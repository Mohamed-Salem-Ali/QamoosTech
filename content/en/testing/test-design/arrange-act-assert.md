---
id: arrange-act-assert
category: testing
subcategory: test-design
level: beginner
related: [assertion, unit-test, test-case]
tags: [python]
aliases: ["aaa pattern", "given when then"]
term: "Arrange, Act, Assert"
pronunciation: "uh-RAYNJ AKT uh-SERT"
keywords: ["three steps of a test", "set up do the thing check", "given when then", "structure of a clear test", "aaa pattern", "one action per test", "الخطوات الثلاث للاختبار", "جهّز ونفّذ وتحقق", "المعطى والحدث والنتيجة", "بنية الاختبار الواضح", "نمط AAA", "إجراء واحد لكل اختبار"]
---

## Definition

Arrange, Act, Assert is a pattern for clear tests: set up the data (arrange), run the one thing under test (act), then check the result (assert).

## Where you hear it

In testing guides, code reviews of tests, and BDD-style "given, when, then" discussions.

## Examples

- Keep the test in three blocks: arrange, act, assert.
- This test acts twice, so it is hard to tell what failed.

## Common mistake

Mixing steps, with asserts in the middle and several actions. When it fails you can't tell which step is to blame.

## Don't confuse with

A test fixture, which shares the arrange step across many tests. The pattern describes one test's shape.

## Say it at work

- Split it so each test has one act.
- Name the test after what the act does.
