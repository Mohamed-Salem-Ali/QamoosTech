---
id: arrange-act-assert
category: testing
subcategory: test-design
level: beginner
related: [assertion, unit-test, test-case]
tags: [python]
aliases: ["aaa pattern", "given when then"]
term: "Arrange, Act, Assert"
translation: "رتّب ثم نفّذ ثم تحقق"
pronunciation: "أرينج أكت أسيرت"
keywords: ["الخطوات الثلاث للاختبار", "جهّز ونفّذ وتحقق", "المعطى والحدث والنتيجة", "بنية الاختبار الواضح", "نمط AAA", "إجراء واحد لكل اختبار", "three steps of a test", "set up do the thing check", "given when then", "structure of a clear test", "aaa pattern", "one action per test"]
---

## التعريف

نمط "رتّب ثم نفّذ ثم تحقق" (Arrange, Act, Assert) يجعل الاختبار واضحاً: جهّز البيانات، ثم نفّذ الشيء الوحيد المراد اختباره، ثم تحقق من النتيجة.

## أين تسمعه؟

في أدلة الاختبار، ومراجعات كود الاختبارات، ونقاشات أسلوب BDD "المعطى والحدث والنتيجة".

## أمثلة

- Keep the test in three blocks: arrange, act, assert.
  - أبقِ الاختبار في ثلاث كتل: ترتيب وتنفيذ وتحقق.
- This test acts twice, so it is hard to tell what failed.
  - هذا الاختبار ينفّذ مرتين، فيصعب معرفة ما الذي فشل.

## خطأ شائع

خلط الخطوات بوضع تحققات في المنتصف وعدة إجراءات. عند الفشل لا تعرف أي خطوة هي السبب.

## لا تخلطه مع

الـ test fixture الذي يشارك خطوة الترتيب بين اختبارات كثيرة. أما النمط فيصف شكل اختبار واحد.

## قلها في العمل

- Split it so each test has one act.
  - قسّمه ليكون لكل اختبار إجراء واحد.
- Name the test after what the act does.
  - سمِّ الاختبار بحسب ما يفعله الإجراء.
