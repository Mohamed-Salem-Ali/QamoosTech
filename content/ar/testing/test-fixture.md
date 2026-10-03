---
id: test-fixture
category: testing
level: intermediate
related: [unit-test, integration-test]
term: "Test Fixture"
pronunciation: "تيست فيكستشر"
---

## التعريف

الـ Test Fixture هو حالة أو بيئة ثابتة تُستخدم كمرجع أساسي وموحد لتشغيل اختبارات البرمجيات. يتضمن ذلك عادةً تجهيز البيانات أو الكائنات أو الإعدادات اللازمة قبل بدء الاختبار، ثم تنظيفها بعد الانتهاء.

## أين تسمعه؟

في إطارات عمل اختبار الوحدات (unit testing frameworks)، ونقاشات أتمتة الاختبارات، ومراجعات الكود.

## أمثلة

- We need to create a test fixture that populates the database with default user records.
  - نحتاج إلى إنشاء Test Fixture يقوم بتعبئة قاعدة البيانات بسجلات مستخدمين افتراضية.
- The test fixture resets the application state to ensure each test runs in isolation.
  - يقوم الـ Test Fixture بإعادة ضبط حالة التطبيق لضمان تشغيل كل اختبار بشكل منعزل.

## خطأ شائع

الخلط بين الـ Test Fixture والـ Mock؛ فبينما يقوم الـ Mock بمحاكاة التبعيات (dependencies)، يقوم الـ Fixture بتهيئة البيئة الفعلية أو البيانات المطلوبة لكي يعمل الاختبار بشكل صحيح.
