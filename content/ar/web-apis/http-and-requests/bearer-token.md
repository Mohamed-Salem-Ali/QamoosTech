---
id: bearer-token
category: web-apis
subcategory: http-and-requests
level: beginner
related: [http-header, jwt, oauth]
term: "Bearer Token"
pronunciation: "بِيرَر تُوكِن"
keywords: ["رمز التحقق من الهوية","ترويسة المصادقة في الطلبات","كيفية إرسال رمز الدخول","رمز الوصول للموارد المحمية","طريقة استخدام بيرر توكن","توثيق الطلبات عبر الويب","رمز المصادقة في الهيدر","استخدام الرموز في api","نظام صلاحيات الوصول","التعامل مع bearer token","authorization header string","access token for api","how to authenticate api requests","send identity in http request","token used for bearer auth","bearer token misspelling","secure api request credentials","get access with token","oauth authentication string","verify user identity via header"]
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

## لا تخلطه مع

يمنح رمز المصادقة (Bearer Token) وصولاً مباشراً بناءً على حيازته، بينما يحدد مفتاح واجهة برمجة التطبيقات (API Key) المشروع أو التطبيق الذي يرسل الطلب فقط.

## قلها في العمل

- Can you check why the API is rejecting my bearer token during this test?
  - هل يمكنك التحقق من سبب رفض واجهة البرمجة لرمز المصادقة الخاص بي أثناء هذا الاختبار؟
- Please ensure that the bearer token is never exposed in the client-side code.
  - يرجى التأكد من عدم كشف رمز المصادقة (bearer token) أبداً في شفرة جهة العميل.
