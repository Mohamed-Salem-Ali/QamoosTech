---
id: test-double
category: testing
subcategory: mocking-and-test-doubles
level: intermediate
related: [mocking, system-under-test, monkeypatching, dummy-object]
tags: [python]
aliases: ["fake", "stub", "mock object", "spy"]
term: "Test Double"
translation: "البديل الاختباري"
pronunciation: "تست دَبل"
keywords: ["الزائف والبديل الثابت والمحاكي والجاسوس", "بديل لاعتمادية", "استبدال قاعدة البيانات الحقيقية في الاختبارات", "مرسل بريد مزيف", "بديل يعيد قيماً ثابتة", "كائن محاكٍ يسجل الاستدعاءات", "fake stub mock spy", "stand-in for a dependency", "replace the real database in tests", "fake email sender", "stub returns fixed values", "mock object records calls"]
---

## التعريف

البديل الاختباري (Test Double) بديل يُستخدم في الاختبار بدل اعتمادية حقيقية. من أنواعه الـ stub (يعيد إجابات ثابتة) والـ fake (نسخة مبسطة تعمل) والـ mock (يسجل كيف استُخدم).

## أين تسمعه؟

في أدلة الاختبار، ومراجعات الكود، وكلما وجب أن تتجنب الاختبارات البريد أو بوابات الدفع أو الخدمات البطيئة.

## أمثلة

- Use a fake email sender as a test double.
  - استخدم مرسل بريد مزيفاً كبديل اختباري.
- The stub always returns the same exchange rate.
  - يعيد الـ stub دائماً سعر الصرف نفسه.
- The test double returns a fixed exchange rate instead of calling the live service.
  - يعيد بديل الاختبار سعر صرف ثابتاً بدل استدعاء الخدمة الحية.

## خطأ شائع

تسمية كل شيء mock. الأنواع تختلف: الـ stub يعطي إجابات والـ mock يتحقق من الاستدعاءات.

## لا تخلطه مع

الـ stub يعيد إجابات ثابتة، والـ fake نسخة مبسّطة تعمل، والـ mock يسجّل كيف استُدعي ويتحقق منه. والمحاكاة (mocking) نوع واحد من بدائل الاختبار، وبديل الاختبار هو المصطلح الجامع لكل هذه الأنواع.

## قلها في العمل

- Swap in a test double for the payment gateway.
  - ضع بديلاً اختبارياً لبوابة الدفع.
- Is that a stub or a mock?
  - هل هذا stub أم mock؟
