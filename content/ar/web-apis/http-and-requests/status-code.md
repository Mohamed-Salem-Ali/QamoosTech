---
id: status-code
category: web-apis
subcategory: http-and-requests
level: beginner
related: [request-response, endpoint]
term: "Status Code"
translation: "رمز الحالة"
pronunciation: "ستاتس كود"
keywords: ["أرقام استجابة الخادم","رموز نجاح أو فشل الطلب","معاني أرقام الـ http","ماذا تعني أرقام الخطأ","رموز حالة الطلبات","ستاتس كود","رموز استجابة الـ api","أرقام نتائج الـ http","كيف أعرف حالة الطلب","رموز الخطأ في الخادم","http response numbers","api success error codes","what does 404 mean","http error digits","check request result code","server response status","api status numbers","http status codes list","meaning of 200 404 500","http return values"]
---
## التعريف

رقم من ثلاث خانات في استجابة HTTP يخبرك بالنتيجة: 200 تعني نجاح، و404 غير موجود، و500 خطأ في الخادم.

## أين تسمعه؟

تتبع أخطاء الـ API، والسجلات، وتقارير الأخطاء.

## أمثلة

- The API returns 401 when the token is missing.
  - تعيد الـ API الرمز 401 عندما يكون الـ token مفقودًا.
- A 500 means the bug is on the server, not in your request.
  - الرمز 500 يعني أن الخطأ في الخادم لا في طلبك.
- The API returns 201 after it creates the new order.
  - ترجع الواجهة الرمز 201 بعد أن تنشئ الطلب الجديد.

## خطأ شائع

إعادة 200 مع رسالة خطأ في المحتوى. استخدم الرمز الصحيح ليتصرف العميل بشكل سليم.

## قلها في العمل

- Can you check why this endpoint is returning a 500 status code instead of a 400?
  - هل يمكنك التحقق من سبب إرجاع نقطة النهاية هذه لرمز الحالة 500 بدلاً من 400؟
- Please ensure the payment service returns the correct status code when a transaction fails.
  - يرجى التأكد من أن خدمة الدفع تعيد رمز الحالة الصحيح عند فشل المعاملة.
