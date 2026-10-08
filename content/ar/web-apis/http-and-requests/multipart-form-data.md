---
id: multipart-form-data
category: web-apis
subcategory: http-and-requests
level: intermediate
related: [http-header, payload, request-response]
term: "Multipart Form Data"
translation: "بيانات النموذج متعددة الأجزاء"
pronunciation: "مولتي-بارت فورم داتا"
keywords: ["رفع الملفات عبر طلبات الويب","إرسال الصور مع البيانات النصية","طريقة رفع الملفات في الـ API","إرسال البيانات الثنائية في النماذج","تنسيق إرسال الملفات في HTTP","التعامل مع حقول رفع الملفات","بديل إرسال البيانات بصيغة JSON","إرسال مرفقات مع نموذج ويب","ترويسة نوع المحتوى للملفات","رفع المستندات عبر واجهة البرمجة","send files via http request","uploading binary data in forms","how to send images to api","content type for file uploads","sending text and files together","multipart form data alternative","handling file input in post","http request body with attachments","multipart content type header","uploading documents via web form"]
---

## التعريف

نوع من أنواع محتوى طلبات HTTP يُستخدم لإرسال ملفات وبيانات نصية معاً في رسالة واحدة. يقوم بتقسيم جسم الطلب إلى أجزاء متعددة، حيث يحتوي كل جزء على ترويسات (headers) خاصة به.

## أين تسمعه؟

عند بناء ميزات رفع الملفات أو التعامل مع نماذج HTML التي تحتوي على حقول لرفع الملفات.

## أمثلة

- The browser sets the Content-Type header to multipart/form-data when a user submits a file upload form.
  - يقوم المتصفح بضبط ترويسة Content-Type على multipart/form-data عندما يرسل المستخدم نموذجاً يحتوي على ملف.
- You must configure your backend server to parse multipart/form-data to handle incoming image uploads.
  - يجب عليك تهيئة خادم الواجهة الخلفية لمعالجة multipart/form-data للتعامل مع الصور المرفوعة.

## خطأ شائع

محاولة إرسال ملف ككائن JSON عادي؛ حيث لا يمكن لـ JSON التعامل مع البيانات الثنائية (binary data)، لذا يجب استخدام multipart/form-data بدلاً من ذلك.

## لا تخلطه مع

غالباً ما يتم الخلط بين multipart/form-data و application/x-www-form-urlencoded، ولكن الأول ضروري لرفع الملفات الثنائية بينما الثاني مناسب فقط لأزواج المفتاح والقيمة النصية البسيطة.

## قلها في العمل

- We need to switch the request to multipart/form-data because the current JSON payload doesn't support the image file upload.
  - نحتاج إلى تغيير الطلب إلى multipart/form-data لأن حمولة JSON الحالية لا تدعم رفع ملف الصورة.
- Please ensure the API endpoint is configured to accept multipart/form-data so that users can successfully upload their profile documents.
  - يرجى التأكد من تهيئة نقطة نهاية الـ API لقبول multipart/form-data حتى يتمكن المستخدمون من رفع مستندات ملفاتهم الشخصية بنجاح.
