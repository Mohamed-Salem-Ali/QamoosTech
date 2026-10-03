---
id: status-code
category: web-apis
level: beginner
related: [request-response, endpoint]
term: "Status Code"
translation: "رمز الحالة"
pronunciation: "ستاتس كود"
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

## خطأ شائع

إعادة 200 مع رسالة خطأ في المحتوى. استخدم الرمز الصحيح ليتصرف العميل بشكل سليم.
