---
id: test-isolation
category: testing
subcategory: test-design
level: intermediate
related: [test-fixture, deterministic-test, flaky-test]
tags: [python]
aliases: ["isolated tests", "independent tests"]
term: "Test Isolation"
pronunciation: "test eye-suh-LAY-shun"
keywords: ["each test works alone", "tests do not affect each other", "random order still passes", "clean state per test", "no shared mutable data", "fresh database per test", "كل اختبار يعمل وحده", "الاختبارات لا تؤثر ببعضها", "تنجح بأي ترتيب عشوائي", "حالة نظيفة لكل اختبار", "لا بيانات مشتركة قابلة للتغيير", "قاعدة بيانات جديدة لكل اختبار"]
---

## Definition

Test isolation means each test sets up its own state and cleans up after itself, so tests pass in any order and one failure cannot cause another.

## Where you hear it

In flaky-test hunts, test-order bugs, and database test setups with transactions or fresh data.

## Examples

- The test passes alone but fails in the full suite, so isolation is broken.
- Each test runs inside a transaction that is rolled back.

## Common mistake

Sharing a module-level list or database rows between tests. The order then decides who passes.

## Don't confuse with

A test fixture, which is a tool for creating the clean state. Isolation is the goal the fixtures serve.

## Say it at work

- Randomise the order to check isolation.
- Reset the state in teardown.
