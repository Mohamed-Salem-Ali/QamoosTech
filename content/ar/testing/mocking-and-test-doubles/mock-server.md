---
id: mock-server
category: testing
subcategory: mocking-and-test-doubles
level: intermediate
related: [mocking, test-double]
term: "Mock Server"
translation: "خادم المحاكاة"
pronunciation: "موك سيرفر"
aliases: ["fake server"]
keywords: ["خادم HTTP مزيف", "ردود جاهزة لطلبات الواجهة البرمجية", "بديل لخدمة خارجية", "تشغيل الاختبارات دون الخدمة الحية", "fake HTTP server", "canned responses for API calls", "stand in for a third-party API", "run tests without the live service"]
---

## التعريف

خادم المحاكاة (Mock Server) خادم HTTP مزيف يرد على طلبات الكود المختبَر بردود معدّة مسبقاً. تستطيع الاختبارات استدعاء واجهة برمجية دون الوصول إلى الخدمة الحقيقية.

## أين تسمعه؟

في اختبارات الواجهات البرمجية واختبارات التكامل، وفي تطوير الواجهات الأمامية حين يكون الخادم الخلفي غير جاهز، أو تكون خدمة خارجية بطيئة أو مكلفة أو محدودة الطلبات.

## أمثلة

- Our integration tests call a mock server instead of the real payment API.
  - تستدعي اختبارات التكامل لدينا خادم محاكاة بدلاً من واجهة الدفع الحقيقية.
- A mock server returns canned responses for every HTTP call the app makes.
  - يعيد خادم المحاكاة ردوداً جاهزة لكل طلب HTTP يرسله التطبيق.
- Start the mock server before the tests and stop it when they finish.
  - شغّل خادم المحاكاة قبل الاختبارات، وأوقفه حين تنتهي.

## خطأ شائع

معاملة خادم المحاكاة كأنه الواجهة الحقيقية. إنه يجيب فقط عمّا ضبطته، فقد ينجح الاختبار بينما تتصرف الخدمة الحقيقية بشكل مختلف.

## لا تخلطه مع

البديل الاختباري يحل محل كائن أو دالة داخل الاختبار. أما خادم المحاكاة فيحل محل خدمة بعيدة عبر الشبكة، فيبقى كود عميل HTTP الحقيقي عاملاً ويُختبر استدعاء الشبكة نفسه.

## قلها في العمل

- Point the tests at the mock server, not the live API.
  - وجّه الاختبارات إلى خادم المحاكاة، لا إلى الواجهة الحية.
- Did we reset the mock server between test runs?
  - هل أعدنا ضبط خادم المحاكاة بين تشغيلات الاختبار؟
