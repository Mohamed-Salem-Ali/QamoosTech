---
id: closure
category: programming
level: intermediate
related: [function, scope, variable]
term: "Closure"
pronunciation: "كلوزشر"
translation: "إغلاق"
---

## التعريف

الـ Closure هي دالة تحتفظ بالوصول إلى المتغيرات الموجودة في النطاق الخارجي المحيط بها، حتى بعد انتهاء تنفيذ الدالة الخارجية التي أنشأتها.

## أين تسمعه؟

في مقابلات جافاسكريبت، ونقاشات البرمجة دالية الاتجاه، وعند شرح خصوصية البيانات في الكود.

## أمثلة

- The inner function forms a closure over the counter variable to keep track of the state.
  - تشكل الدالة الداخلية closure فوق متغير العداد لتتبع الحالة.
- We use a closure to create private variables that cannot be modified directly from the outside.
  - نستخدم الـ closure لإنشاء متغيرات خاصة لا يمكن تعديلها مباشرة من الخارج.

## خطأ شائع

الاعتقاد بأن الـ closure هو بناء نحوي مميز، بينما هو في الحقيقة مجرد سلوك طبيعي للدوال تحتفظ فيه بالوصول إلى بيئة إنشائها.
