---
id: smoke-test
category: testing
subcategory: test-types
level: beginner
related: [ci-cd, regression, unit-test]
term: "Smoke Test"
pronunciation: "سموك تيست"
keywords: ["اختبار استقرار النظام الأولي","فحص الوظائف الأساسية للنظام","التأكد من عمل التطبيق","فحص سريع بعد النشر","اختبار الصحة الأولي للنظام","سموك تيست","اختبار التأكد من استقرار النسخة","فحص أولي قبل الاختبارات الشاملة","التحقق من عمل الميزات الحرجة","اختبار مبدئي للبرمجيات","check if build is stable","preliminary software stability check","verify critical features work","quick sanity check after deployment","basic functionality verification test","initial system health check","automated build verification test","fast testing after deployment","ensure application is not broken","smoketest","smoke testing"]
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

## لا تخلطه مع

يفحص Smoke Test الوظائف الأساسية فقط لضمان الاستقرار العام، بينما الـ Sanity Test هو التحقق السريع والمركز من ميزة معينة تم تعديلها حديثاً.

## قلها في العمل

- Let's run a quick smoke test on the staging environment to make sure the build is stable.
  - دعنا نجري Smoke Test سريعاً على بيئة التجربة للتأكد من أن الـ Build مستقر.
- Please ensure the automated smoke test passes successfully before merging this pull request.
  - يرجى التأكد من نجاح الـ Smoke Test التلقائي قبل دمج طلب السحب هذا.
