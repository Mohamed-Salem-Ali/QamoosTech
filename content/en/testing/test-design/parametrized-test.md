---
id: parametrized-test
category: testing
subcategory: test-design
level: intermediate
related: [unit-test, test-case, edge-case]
tags: [python]
aliases: ["data-driven test", "parameterized test", "table-driven test"]
term: "Parametrized Test"
pronunciation: "PAIR-uh-meh-trized test"
keywords: ["one test many inputs", "pytest parametrize", "table of cases", "same logic different data", "avoid copy paste tests", "input and expected pairs", "اختبار واحد لمدخلات كثيرة", "أداة parametrize في pytest", "جدول حالات", "نفس المنطق ببيانات مختلفة", "تجنب نسخ الاختبارات", "أزواج المدخل والمتوقع"]
---

## Definition

A parametrized test runs the same test logic over many sets of inputs and expected results, so you write the test once and list the cases.

## Where you hear it

In pytest (`@pytest.mark.parametrize`), unit-testing guides, and reviews that remove copy-pasted tests.

## Examples

- Parametrize the test with each edge case: empty, one, many.
- Each row in the table shows as its own pass or fail.

## Common mistake

Packing too much into one table with cases that test different things. Group cases that share one rule.

## Don't confuse with

A loop inside a test, which stops at the first failure and hides the rest. Parametrized cases report separately.

## Say it at work

- Turn these five tests into one parametrized test.
- Add another row for the leap-year case.
