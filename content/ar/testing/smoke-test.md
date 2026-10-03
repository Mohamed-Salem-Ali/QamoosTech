---
id: smoke-test
category: testing
level: beginner
related: [ci-cd, regression, unit-test]
term: "Smoke Test"
pronunciation: "سموك تيست"
---

## التعريف

هو مجموعة أولية من الاختبارات تُجرى للتأكد من أن الوظائف الأساسية والحرجة في النظام تعمل بشكل صحيح. الهدف منه هو اكتشاف الأعطال الكبيرة بسرعة قبل البدء في اختبارات أكثر تعمقاً.

## أين تسمعه؟

أثناء مراحل الـ CI/CD، أو في بداية دورة اختبار الجودة (QA)، أو بعد نشر تحديث جديد في بيئة التجربة (Staging).

## أمثلة

- We run a smoke test after every deployment to ensure the login page loads correctly.
  - نقوم بإجراء Smoke Test بعد كل عملية نشر للتأكد من أن صفحة تسجيل الدخول تعمل بشكل سليم.
- If the smoke test fails, we stop the release process immediately.
  - إذا فشل الـ Smoke Test، نتوقف عن عملية إطلاق التحديث فوراً.

## خطأ شائع

الاعتقاد بأن الـ Smoke Test هو اختبار شامل؛ فهو مصمم ليكون سريعاً وسطحياً للتأكد من استقرار النظام الأساسي، وليس لتغطية كل الحالات الاستثنائية أو المتطلبات التفصيلية.
