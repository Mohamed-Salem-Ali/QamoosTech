---
id: endpoint
category: web-apis
level: beginner
related: [restful-api, request-response]
term: "Endpoint"
translation: "نقطة نهاية"
pronunciation: "إندبوينت"
---
## التعريف

عنوان URL محدد في الـ API ينفّذ مهمة واحدة، مثل `GET /users/42` لجلب مستخدم.

## أين تسمعه؟

وثائق الـ API، ومهام الـ backend، والنقاش مع العملاء («أي endpoint أستدعي؟»).

## أمثلة

- We added a new endpoint for exporting invoices.
  - أضفنا endpoint جديدًا لتصدير الفواتير.
- The endpoint returns 404 for unknown users.
  - يعيد الـ endpoint الرمز 404 للمستخدمين غير الموجودين.

## خطأ شائع

تسمية الـ endpoints بأفعال مثل `/getUsers`. في REST الفعل هو طريقة HTTP، لذلك استخدم `GET /users`.
