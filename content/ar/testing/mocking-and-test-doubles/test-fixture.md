---
id: test-fixture
category: testing
subcategory: mocking-and-test-doubles
level: intermediate
related: [unit-test, integration-test, dummy-object]
term: "Test Fixture"
translation: "تجهيزات الاختبار"
pronunciation: "تيست فيكستشر"
keywords: ["بيئة اختبار ثابتة وموحدة","تجهيز بيانات وبيئة الاختبار","تهيئة حالة التطبيق للاختبار","إعداد وتنظيف بيانات الاختبار","قاعدة بيانات افتراضية للاختبار","تيست فيكستشر","تهيئة بيئة التشغيل للاختبارات","حالة ثابتة لتشغيل الاختبارات","consistent test baseline environment","setup test data and state","test preparation and cleanup code","fixed environment for running tests","initialize database before running tests","test fixture","test setup and teardown state","reset application state for testing","test environment configuration data","tiyst fikstur"]
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
- The fixture creates one user and one order before each test in the file.
  - ينشئ الجهاز الثابت مستخدماً واحداً وطلباً واحداً قبل كل اختبار في الملف.

## خطأ شائع

الخلط بين الـ Test Fixture والـ Mock؛ فبينما يقوم الـ Mock بمحاكاة التبعيات (dependencies)، يقوم الـ Fixture بتهيئة البيئة الفعلية أو البيانات المطلوبة لكي يعمل الاختبار بشكل صحيح.

## لا تخلطه مع

الخلط بين الـ Test fixture والـ test setup؛ فبينما يشير الـ Test fixture إلى البيئة أو الحالة الكاملة، فإن الـ setup هو تحديداً كتلة الكود التي تقوم بتهيئة تلك البيئة قبل كل اختبار.

## قلها في العمل

- Could you help me refactor the test fixture so we don't have to recreate the user object in every single test case?
  - هل يمكنك مساعدتي في إعادة هيكلة الـ test fixture حتى لا نضطر إلى إعادة إنشاء كائن المستخدم في كل حالة اختبار؟
- I have updated the test fixture to include the new configuration parameters required for the latest service integration.
  - لقد قمت بتحديث الـ test fixture ليشمل معاملات الإعداد الجديدة المطلوبة لأحدث تكامل للخدمة.
