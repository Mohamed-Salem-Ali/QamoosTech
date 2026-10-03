---
id: bearer-token
category: web-apis
level: beginner
related: [http-header, jwt, oauth]
term: "Bearer Token"
pronunciation: "بِيرَر تُوكِن"
---

## التعريف

رمز مصادقة (Bearer Token) يُرسل ضمن طلبات HTTP لإثبات هوية المستخدم. يعني الاسم ضمنياً أن أي شخص يحمل هذا الرمز يُمنح حق الوصول إلى الموارد المحمية.

## أين تسمعه؟

- في وثائق واجهات برمجة التطبيقات تحت ترويسات المصادقة
- أثناء تنفيذ تسجيل الدخول عبر بروتوكول OAuth
- عند فحص ترويسات HTTP في أدوات تطوير المتصفح

## أمثلة

- Send the bearer token in the Authorization header of your API request.
  - أرسل رمز المصادقة (bearer token) في ترويسة التفويض (Authorization) لطلب واجهة البرمجة الخاصة بك.
- The server returns a bearer token after a successful login.
  - يعيد الخادم رمز مصادقة (bearer token) بعد نجاح عملية تسجيل الدخول.

## خطأ شائع

التعامل مع الرمز ككلمة مرور وتخزينه في أماكن غير آمنة في المتصفح مثل `localStorage` بدلاً من الذاكرة الآمنة أو ملفات تعريف الارتباط من نوع `httpOnly`.
