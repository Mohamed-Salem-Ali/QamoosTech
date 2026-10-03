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

## قلها في العمل

- We should check if adding an index on this foreign key helps with the slow join.
  - يجب أن نتحقق مما إذا كانت إضافة index على هذا الـ foreign key ستساعد في معالجة الـ join البطيء.
- Please ensure that the new migration includes the required index for the status column.
  - يرجى التأكد من أن الـ migration الجديد يتضمن الـ index المطلوب لعمود الـ status.
