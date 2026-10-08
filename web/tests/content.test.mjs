// Tests for the term parser, the script rules, and the content validator. Run with `npm test` (from web/).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { parseTerm } from '../src/lib/parse-term.mjs'
import { scanText } from '../scripts/scan-scripts.mjs'
import { oneWayLinks } from '../src/lib/links.mjs'

const here = path.dirname(fileURLToPath(import.meta.url))

const TERM = `---
id: sample
category: programming
level: beginner
related: []
term: "Sample"
pronunciation: "SAM-pul"
keywords: ["a sample term"]
---

## Definition

A sample.

## Where you hear it

In tests.

## Examples

- One example.
- A second example.

## Common mistake

Forgetting the example.
`

test('a complete term parses with no errors', () => {
  const { term, errors } = parseTerm(TERM)
  assert.deepEqual(errors, [])
  assert.equal(term.id, 'sample')
  assert.equal(term.examples.length, 2)
  assert.equal(term.featured, undefined)
})

test('a missing section is reported', () => {
  const { errors } = parseTerm(TERM.replace('## Common mistake\n\nForgetting the example.\n', ''))
  assert.ok(errors.some((e) => e.includes('expected at least 4')), errors.join('; '))
})

test('a featured slot must be a whole number', () => {
  const ok = parseTerm(TERM.replace('level: beginner', 'level: beginner\nfeatured: 3'))
  assert.equal(ok.term.featured, 3)
  assert.deepEqual(ok.errors, [])
  const bad = parseTerm(TERM.replace('level: beginner', 'level: beginner\nfeatured: first'))
  assert.ok(bad.errors.some((e) => e.includes('invalid featured')), bad.errors.join('; '))
})

test('an unknown level is reported', () => {
  const { errors } = parseTerm(TERM.replace('level: beginner', 'level: expert'))
  assert.ok(errors.some((e) => e.includes('invalid level')))
})

test('English files accept accented Latin letters', () => {
  assert.equal(scanText('Café and Zoë', 'en').length, 0)
})

test('English files reject other scripts', () => {
  assert.ok(scanText('Привет', 'en').length > 0)
  assert.ok(scanText('مرحبا', 'en').length > 0)
})

test('Arabic files reject Latin accents but accept Arabic and ASCII', () => {
  assert.ok(scanText('café', 'ar').length > 0)
  assert.equal(scanText('الحزمة (Package) 42', 'ar').length, 0)
})

test('keyword lines may hold both languages in every file', () => {
  assert.equal(scanText('keywords: ["مرحبا", "hello"]', 'en').length, 0)
})

test('an unknown language has no writing system, so only ASCII passes', () => {
  assert.ok(scanText('Café', 'xx').length > 0)
})

test('one-way related links are found, and two-way links are not', () => {
  const terms = [
    { id: 'a', related: ['b', 'c'] },
    { id: 'b', related: ['a'] },
    { id: 'c', related: [] },
  ]
  assert.deepEqual(oneWayLinks(terms), [['a', 'c']])
})

test('a link to a missing term is not reported as one-way', () => {
  assert.deepEqual(oneWayLinks([{ id: 'a', related: ['ghost'] }]), [])
})

test('the real content passes the validator', () => {
  const script = path.join(here, '..', 'scripts', 'validate-content.mjs')
  const out = execFileSync(process.execPath, [script], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
  assert.match(out, /Content OK/)
})
