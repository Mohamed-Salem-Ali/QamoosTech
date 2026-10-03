---
id: test-runner
category: testing
level: beginner
related: [unit-test, ci-cd]
term: "Test Runner"
pronunciation: "تيست رانر"
---

## التعريف

أداة برمجية تقوم بتنفيذ ملفات الاختبارات تلقائياً، وتراقب النتائج، ثم تعرض تقريراً يوضح الاختبارات التي نجحت أو فشلت. تسهل هذه الأداة عملية الاختبار من خلال اكتشاف ملفات الاختبار في المشروع وتشغيلها.

## أين تسمعه؟

في خطوط أنابيب التكامل المستمر (CI/CD)، أو أثناء التطوير المحلي، أو عند إعداد إطار عمل جديد للاختبارات.

## أمثلة

- I need to configure the test runner to ignore the integration tests.
  - أحتاج إلى ضبط الـ test runner ليتجاهل اختبارات التكامل.
- The test runner failed because of a syntax error in one of the test files.
  - فشل الـ test runner بسبب خطأ في صياغة الكود في أحد ملفات الاختبار.

## خطأ شائع

الخلط بين الـ test runner وإطار عمل الاختبار (Testing Framework) نفسه؛ فإطار العمل يوفر البنية لكتابة الاختبارات (مثل التحققات)، بينما الـ runner هو المحرك الذي يقوم بتنفيذها فعلياً.

## لا تخلطه مع

الخلط بين الـ test runner وإطار عمل الاختبار (testing framework)؛ حيث يوفر إطار العمل البنية والتحققات لكتابة الاختبارات، بينما يعد الـ runner هو المحرك المسؤول عن اكتشافها وتنفيذها.

## قلها في العمل

- Which test runner are we using for this project to ensure our unit tests run in parallel?
  - أي test runner نستخدمه في هذا المشروع لضمان تشغيل اختبارات الوحدة بالتوازي؟
- I have updated the configuration file so that the test runner correctly identifies the new test suite.
  - لقد قمت بتحديث ملف الإعدادات لكي يتمكن الـ test runner من التعرف على مجموعة الاختبارات الجديدة بشكل صحيح.
