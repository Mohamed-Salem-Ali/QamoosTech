---
id: deterministic-test
category: testing
subcategory: test-design
level: intermediate
related: [flaky-test, test-isolation, test-fixture]
tags: [python]
aliases: ["repeatable test"]
term: "Deterministic Test"
translation: "الاختبار الحتمي"
pronunciation: "ديترمنستك تست"
keywords: ["نفس النتيجة في كل تشغيل", "لا عشوائية في الاختبارات", "ساعة وبذرة ثابتتان", "اختبار موثوق", "اختبار قابل للتكرار", "بلا تذبذب", "same result every run", "no randomness in tests", "fixed clock and seed", "reliable test", "repeatable test", "no flakiness"]
---

## التعريف

الاختبار الحتمي (Deterministic Test) يعطي النتيجة نفسها في كل تشغيل، لأن لا شيء عشوائياً أو مرتبطاً بالوقت أو بالترتيب يستطيع تغيير النتيجة.

## أين تسمعه؟

في نقاشات الاختبارات المتذبذبة، وموثوقية CI، وعندما تستخدم الاختبارات التواريخ أو الأرقام العشوائية أو الشبكة.

## أمثلة

- Freeze the clock so the test is deterministic.
  - ثبّت الساعة ليكون الاختبار حتمياً.
- Seed the random generator in the test.
  - حدّد بذرة مولد الأرقام العشوائية في الاختبار.
- The test fixes the random seed, so it gives the same result on every run.
  - يثبّت الاختبار بذرة العشوائية، فيعطي النتيجة نفسها في كل تشغيل.

## خطأ شائع

استخدام تاريخ اليوم أو استدعاء شبكة حقيقي داخل اختبار. ينجح اليوم ويفشل غداً.

## لا تخلطه مع

الاختبار المتذبذب (Flaky Test) وهو النتيجة غير المرغوبة حين لا يكون الاختبار حتمياً.

## قلها في العمل

- Make it deterministic before you merge.
  - اجعله حتمياً قبل الدمج.
- The failure only happens on some runs, so it's not deterministic.
  - الفشل يحدث في بعض التشغيلات فقط، إذن ليس حتمياً.
