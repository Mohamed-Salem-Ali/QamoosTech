---
id: cors-preflight
category: web-apis
subcategory: http-and-requests
level: intermediate
related: [cors, http-header, request-response]
term: "CORS Preflight"
pronunciation: "كورز بري فلايت"
keywords: ["طلب التحقق التمهيدي","فحص صلاحيات الوصول للمتصفح","مشاكل طلبات كروس اوريجين","طلب خيارات المتصفح التلقائي","حل خطأ cors في المتصفح","التحقق من أذونات الخادم","طلب خيارات قبل الإرسال","فحص أمان واجهة البرمجة","كورز بري فلايت","تجاوز قيود المصادر المختلفة","browser options request","check cross origin permissions","fix cors request failure","automatic preflight check","handle options http method","cors access control check","why is my api failing","api security handshake","cors pre-flight error","browser security verification request"]
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

## لا تخلطه مع

غالباً ما يُخلط بين طلب CORS preflight وبين CORS نفسه، لكن الطلب التمهيدي هو فحص OPTIONS التلقائي الذي يُرسل مسبقاً، بينما CORS هو الآلية الأمنية الشاملة للطلبات عبر المصادر المختلفة.

## قلها في العمل

- Let's check the browser network tab to see if the CORS preflight request is failing.
  - دعنا نتحقق من تبويب الشبكة في المتصفح لنرى ما إذا كان طلب CORS preflight يفشل.
- We need to update our server configuration to handle the CORS preflight OPTIONS requests properly.
  - نحتاج إلى تحديث إعدادات الخادم لدينا للتعامل مع طلبات CORS preflight من نوع OPTIONS بشكل صحيح.
