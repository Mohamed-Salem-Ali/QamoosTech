---
id: http-methods
category: web-apis
level: beginner
related: [request-response, restful-api, status-code]
term: "HTTP Methods"
translation: "طرق بروتوكول HTTP"
pronunciation: "اتش تي تي بي ميثودز"
---

## التعريف

هي الأفعال القياسية مثل `GET` و `POST` و `PUT` و `DELETE` التي تخبر الخادم بالإجراء المراد تنفيذه على مورد معين، وهي تشكل أساس التواصل بين العملاء والخوادم في تطبيقات الويب وواجهات برمجة التطبيقات.

## أين تسمعه؟

- في وثائق واجهات برمجة التطبيقات (API documentation)
- أثناء تطوير الواجهة الخلفية
- عند تتبع طلبات الشبكة في المتصفح

## أمثلة

- Use a `GET` request to retrieve user profile data from the server.
  - استخدم طلب `GET` لجلب بيانات الملف الشخصي للمستخدم من الخادم.
- Submit a `POST` request with the form data to create a new account.
  - أرسل طلب `POST` مع بيانات النموذج لإنشاء حساب جديد.
- Send a `DELETE` request to remove an item from the shopping cart.
  - أرسل طلب `DELETE` لإزالة عنصر من سلة التسوق.

## خطأ شائع

استخدام طلب `GET` لإرسال بيانات حساسة أو تعديل حالة الخادم، وهو أمر غير آمن ويخالف معايير بروتوكول HTTP لأن طلبات `GET` يجب أن تكون آمنة ولا تغير شيئاً.
