---
id: index
category: databases
level: intermediate
related: [query, table-row-column]
term: "Index"
translation: "فهرس"
pronunciation: "إنديكس"
---
## التعريف

بنية تحتفظ بها قاعدة البيانات لتجد الصفوف بسرعة، مثل فهرس الكلمات في آخر الكتاب.

## أين تسمعه؟

تحسين الاستعلامات ومراجعات الـ migrations.

## أمثلة

- Add an index on `email` to speed up the login query.
  - أضف index على `email` لتسريع استعلام تسجيل الدخول.
- Too many indexes slow down writes.
  - كثرة الـ indexes تبطّئ عمليات الكتابة.

## خطأ شائع

إضافة index لكل عمود. كل index يستهلك مساحة ويبطّئ الإدخال.
