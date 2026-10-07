---
id: mutation-testing
category: testing
subcategory: tools-and-quality
level: intermediate
related: [test-coverage, assertion, unit-test]
tags: [python]
aliases: ["mutant", "mutation test"]
term: "Mutation Testing"
pronunciation: "myoo-TAY-shun TES-ting"
keywords: ["plant bugs to check tests", "do tests catch changes", "mutants killed or survived", "test the tests", "coverage is not enough", "mutmut", "زرع أخطاء لفحص الاختبارات", "هل تلتقط الاختبارات التغييرات", "طفرات قُتلت أو نجت", "اختبار الاختبارات", "التغطية لا تكفي", "أداة mutmut"]
---

## Definition

Mutation testing changes your code in small ways on purpose (flipping a `>` to `>=`, say) and checks whether your tests fail. A change the tests miss means a weak test.

## Where you hear it

In discussions about test quality beyond coverage numbers, and in tools such as mutmut or Stryker.

## Examples

- Coverage is 100%, but mutation testing shows half the mutants survive.
- A surviving mutant means we need a sharper assertion.

## Common mistake

Treating 100% as the goal. Some mutants are equivalent or irrelevant; use it as a guide to weak tests.

## Don't confuse with

Test coverage, which only says which lines ran. Mutation testing says whether the tests would notice a bug there.

## Say it at work

- Run mutation testing on the payment module.
- Kill the surviving mutant with a boundary test.
