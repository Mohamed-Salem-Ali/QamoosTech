---
id: test-double
category: testing
subcategory: mocking-and-test-doubles
level: intermediate
related: [mocking, system-under-test, monkeypatching]
tags: [python]
aliases: ["fake", "stub", "mock object", "spy"]
term: "Test Double"
pronunciation: "test DUB-ul"
keywords: ["fake stub mock spy", "stand-in for a dependency", "replace the real database in tests", "fake email sender", "stub returns fixed values", "mock object records calls", "الزائف والبديل الثابت والمحاكي والجاسوس", "بديل لاعتمادية", "استبدال قاعدة البيانات الحقيقية في الاختبارات", "مرسل بريد مزيف", "بديل يعيد قيماً ثابتة", "كائن محاكٍ يسجل الاستدعاءات"]
---

## Definition

A test double is a stand-in used in a test instead of a real dependency. Kinds include a stub (returns fixed answers), a fake (a simple working version), and a mock (records how it was used).

## Where you hear it

In testing guides, code reviews, and whenever tests must avoid email, payment gateways or slow services.

## Examples

- Use a fake email sender as a test double.
- The stub always returns the same exchange rate.

## Common mistake

Calling everything a mock. The kinds differ: a stub gives answers, a mock verifies calls.

## Don't confuse with

Mocking, which is the broader practice and the specific kind that records calls. A test double is the umbrella term.

## Say it at work

- Swap in a test double for the payment gateway.
- Is that a stub or a mock?
