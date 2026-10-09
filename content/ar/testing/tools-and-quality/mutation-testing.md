---
id: mutation-testing
category: testing
subcategory: tools-and-quality
level: intermediate
related: [test-coverage, assertion, unit-test]
tags: [python]
aliases: ["mutant", "mutation test"]
term: "Mutation Testing"
translation: "اختبار الطفرات"
pronunciation: "ميوتيشن تيستنج"
keywords: ["زرع أخطاء لفحص الاختبارات", "هل تلتقط الاختبارات التغييرات", "طفرات قُتلت أو نجت", "اختبار الاختبارات", "التغطية لا تكفي", "أداة mutmut", "plant bugs to check tests", "do tests catch changes", "mutants killed or survived", "test the tests", "coverage is not enough", "mutmut"]
---

## التعريف

اختبار الطفرات (Mutation Testing) يغيّر كودك عمداً بتغييرات صغيرة (كقلب `>` إلى `>=`) ويفحص هل تفشل اختباراتك. التغيير الذي لا تلتقطه الاختبارات يدل على اختبار ضعيف.

## أين تسمعه؟

في نقاشات جودة الاختبارات بما يتجاوز أرقام التغطية، وفي أدوات مثل mutmut وStryker.

## أمثلة

- Coverage is 100%, but mutation testing shows half the mutants survive.
  - التغطية 100% لكن اختبار الطفرات يُظهر أن نصف الطفرات ينجو.
- A surviving mutant means we need a sharper assertion.
  - نجاة الطفرة تعني أننا نحتاج تحققاً أدق.
- Mutation testing flipped a plus to a minus and no test failed, which exposed a gap.
  - قلب اختبار الطفرات علامة الجمع إلى طرح، ولم يفشل أي اختبار، فكشف ذلك ثغرة.

## خطأ شائع

اعتبار 100% هدفاً. بعض الطفرات مكافئة أو غير مهمة؛ استخدمه دليلاً إلى الاختبارات الضعيفة.

## لا تخلطه مع

تغطية الاختبارات التي تقول أي الأسطر نُفّذت فقط. أما اختبار الطفرات فيقول هل ستلاحظ الاختبارات خطأً هناك.

## قلها في العمل

- Run mutation testing on the payment module.
  - شغّل اختبار الطفرات على وحدة الدفع.
- Kill the surviving mutant with a boundary test.
  - اقتل الطفرة الناجية باختبار حدّي.
