import { test } from 'node:test'
import assert from 'node:assert/strict'
import { maskTerm } from '../src/lib/mask-term.mjs'

test('hides the term, any case', () => {
  assert.equal(maskTerm('A digital certificate is a signed file.', 'Digital Certificate'), 'A ___ is a signed file.')
})

test('hides the term at the start and with a plural', () => {
  assert.equal(maskTerm('Caches store data; a cache hit is fast.', 'Cache'), '___ store data; a ___ hit is fast.')
})

test('hides each part of a term with an acronym', () => {
  assert.equal(maskTerm('A pull request (PR) asks for review; PRs are common.', 'Pull Request (PR)'), 'A ___ (___) asks for review; ___ are common.')
})

test('hides Latin parts inside an Arabic meaning', () => {
  assert.equal(maskTerm('اختبار A/B يقارن نسختين', 'A/B Test'), 'اختبار ___ يقارن نسختين')
})

test('hides acronyms and symbol tokens from a longer term', () => {
  assert.equal(maskTerm('Use CI/CD daily', 'CI/CD Pipeline'), 'Use ___ daily')
  assert.equal(maskTerm('The API returns JSON', 'REST API'), 'The ___ returns JSON')
})

test('does not touch the term inside a longer word', () => {
  assert.equal(maskTerm('Testing is not a test suite.', 'Test'), 'Testing is not a ___ suite.')
})

test('leaves a meaning without the term unchanged', () => {
  assert.equal(maskTerm('دمج التغييرات', 'Merge'), 'دمج التغييرات')
})
