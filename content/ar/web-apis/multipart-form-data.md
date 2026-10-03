---
id: multipart-form-data
category: web-apis
level: intermediate
related: [http-header, payload, request-response]
term: "Multipart Form Data"
pronunciation: "مولتي-بارت فورم داتا"
---

## التعريف

نوع من أنواع محتوى طلبات HTTP يُستخدم لإرسال ملفات وبيانات نصية معاً في رسالة واحدة. يقوم بتقسيم جسم الطلب إلى أجزاء متعددة، حيث يحتوي كل جزء على ترويسات (headers) خاصة به.

## أين تسمعه؟

عند بناء ميزات رفع الملفات أو التعامل مع نماذج HTML التي تحتوي على حقول لرفع الملفات.

## أمثلة

- The browser sets the Content-Type header to multipart/form-data when a user submits a file upload form.
  - يقوم المتصفح بضبط ترويسة Content-Type على multipart/form-data عندما يرسل المستخدم نموذجاً يحتوي على ملف.
- You must configure your backend server to parse multipart/form-data to handle incoming image uploads.
  - يجب عليك تهيئة خادم الواجهة الخلفية لمعالجة multipart/form-data للتعامل مع صور الملفات المرفوعة.

## خطأ شائع

محاولة إرسال ملف ككائن JSON عادي؛ حيث لا يمكن لـ JSON التعامل مع البيانات الثنائية (binary data)، لذا يجب استخدام multipart/form-data بدلاً من ذلك.
