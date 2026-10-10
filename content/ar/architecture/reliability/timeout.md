---
id: timeout
category: architecture
subcategory: reliability
level: beginner
related: [retry-logic, circuit-breaker, fail-fast, bulkhead]
term: "Timeout"
translation: "مهلة الانتظار"
pronunciation: "تايم أوت"
keywords: ["كم ننتظر الرد", "انتهت مهلة الطلب", "ضبط مهلة عميل HTTP", "مهلة الاتصال", "التوقف عن الانتظار بعد ثوان", "how long to wait for a response", "request timed out", "set a timeout on the http client", "connection timeout", "stop waiting after seconds"]
---

## التعريف

أقصى مدة تنتظرها لعملية ما، مثل استدعاء شبكي أو استعلام قاعدة بيانات، ثم تتوقف عن الانتظار وتعدّها فاشلة.

## أين تسمعه؟

في إعدادات عميل HTTP، وإعدادات اتصال قاعدة البيانات، وتقارير الحوادث التي تقول: «انتهت مهلة الطلبات».

## أمثلة

- The payment call has a timeout of five seconds.
  - لاستدعاء الدفع مهلة مدتها خمس ثوان.
- Without a timeout, one slow dependency can hold every thread.
  - بدون مهلة انتظار، قد تحبس خدمة بطيئة واحدة كل الخيوط.
- The request has a timeout of three seconds, after which the app shows a retry button.
  - للطلب مهلة ثلاث ثوانٍ، وبعدها يعرض التطبيق زر إعادة المحاولة.

## خطأ شائع

عدم استخدام أي مهلة، أو استخدام مهلة أطول مما يقبله المستخدم. فتتراكم الطلبات بينما غادر المستخدم بالفعل.

## لا تخلطه مع

مهلة الانتظار هي الحد الأقصى للانتظار، أما إعادة المحاولة فهي محاولة مرة أخرى بعد فشل.
