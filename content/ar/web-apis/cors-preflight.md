---
id: cors-preflight
category: web-apis
level: intermediate
related: [cors, http-header, request-response]
term: "CORS Preflight"
pronunciation: "كورز بري فلايت"
---

## التعريف

طلب تحقق تمهيدي يتم إرساله تلقائياً من المتصفح قبل إرسال الطلب الفعلي بين مصادر مختلفة (Cross-Origin)، للتأكد مما إذا كان الخادم يسمح بالطلب الأساسي.

## أين تسمعه؟

- في أدوات المطورين في المتصفح عند إيجاد أخطاء في طلبات واجهات البرمجة
- عند ضبط إعدادات الأمان ورؤوس الطلبات في خادم الخلفية (Backend)

## أمثلة

- The browser sends a CORS preflight request before making a `POST` request with custom headers.
  - يرسل المتصفح طلباً تمهيدياً لـ CORS قبل إجراء طلب `POST` يحتوي على رؤوس مخصصة.
- If the server rejects the CORS preflight, the actual API request never gets sent.
  - إذا رفض الخادم الطلب التمهيدي لـ CORS، فلن يُرسل طلب واجهة البرمجة الفعلي أبداً.

## خطأ شائع

الاعتقاد بأن الطلب التمهيدي يحمل بيانات التطبيق الخاصة بك، بينما هو يحمل فقط بيانات وصفية مثل الطرق ورؤوس الطلبات المسموح بها.
