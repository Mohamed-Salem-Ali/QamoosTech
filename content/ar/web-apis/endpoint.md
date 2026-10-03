---
id: endpoint
category: web-apis
level: beginner
related: [restful-api, request-response]
term: "Endpoint"
translation: "نقطة نهاية"
pronunciation: "إندبوينت"
keywords: ["عنوان url للـ api","مسار الـ api","رابط الاتصال بالخادم","عنوان الطلب","نقطة نهاية","إندبوينت","عنوان الـ url المخصص","مسار طلب البيانات","رابط خدمة الويب","api url path","url to call api","backend route address","api route url","where to send request","api address","endpoint","indpoint","rest api url path","call backend service url"]
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

## لا تخلطه مع

الـ endpoint هو مسار الـ URL المحدد الذي يمكن الوصول إلى الـ API من خلاله، بينما الـ API هو النظام بأكمله أو مجموعة القواعد التي تسمح بالتطبيقات بالتواصل.

## قلها في العمل

- Can you check which endpoint returns the user profile data?
  - هل يمكنك التحقق من الـ endpoint الذي يعيد بيانات الملف الشخصي للمستخدم؟
- Please update this endpoint to support pagination parameters in the query string.
  - يرجى تحديث هذا الـ endpoint ليدعم معاملات التصفح في سلسلة الاستعلام.
