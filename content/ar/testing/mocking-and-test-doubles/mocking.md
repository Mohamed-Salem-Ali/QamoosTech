---
id: mocking
category: testing
subcategory: mocking-and-test-doubles
level: intermediate
related: [unit-test, dependency-injection]
term: "Mocking"
translation: "المحاكاة"
pronunciation: "موكينج"
keywords: ["إنشاء كائنات وهمية للاختبار","استبدال التبعيات في الاختبارات","محاكاة استدعاءات قاعدة البيانات","تجنب الاتصال بخدمات حقيقية","عمل موك للخدمات الخارجية","كيفية عمل محاكاة برمجية","استخدام كائنات وهمية في الاختبار","بدائل الخدمات الحقيقية أثناء الاختبار","موكينج للبرمجيات","محاكاة استجابة الـ api","fake external service in tests","replace dependency with dummy object","simulate api responses for testing","avoid calling real payment gateway","mocking vs stubbing","create test doubles","unit test isolation techniques","how to mock database calls","testing code without real dependencies","prevent real email during tests"]
---
## التعريف

استبدال تبعية حقيقية، مثل خدمة البريد أو API الدفع، بأخرى وهمية أثناء الاختبارات.

## أين تسمعه؟

اختبار الوحدات ونقاشات إعداد الاختبارات.

## أمثلة

- We mock the payment gateway so tests never charge real cards.
  - نحاكي بوابة الدفع (mock) حتى لا تخصم الاختبارات من بطاقات حقيقية.
- Too many mocks make the test fragile.
  - كثرة الـ mocks تجعل الاختبار هشًّا.

## خطأ شائع

محاكاة كل شيء. إذا كان الاختبار يفحص الـ mocks فقط فهو لا يثبت شيئًا عن الشيفرة الحقيقية.

## لا تخلطه مع

المحاكاة (Mocking) تنشئ كائنات ذات سلوك وتوقعات مسبقة، بينما التثبيت (Stubbing) يقدم فقط إجابات جاهزة للنداءات التي تتم أثناء الاختبار.

## قلها في العمل

- Let us mock the database call here so we can run these unit tests quickly.
  - دعنا نقوم بمحاكاة (mock) استدعاء قاعدة البيانات هنا لكي نتمكن من تشغيل اختبارات الوحدات بسرعة.
- Please add a mock for the external notification service to prevent sending real emails during the CI pipeline.
  - الرجاء إضافة محاكاة (mock) لخدمة الإشعارات الخارجية لمنع إرسال رسائل بريد إلكتروني حقيقية أثناء خط أنابيب التكامل المستمر.
