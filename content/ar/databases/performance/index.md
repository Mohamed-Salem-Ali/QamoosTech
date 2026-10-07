---
id: index
category: databases
subcategory: performance
level: intermediate
related: [query, table-row-column]
term: "Index"
translation: "فهرس"
pronunciation: "إنديكس"
keywords: ["تسريع استعلامات قاعدة البيانات","تحسين سرعة البحث في الجداول","فهرسة أعمدة قاعدة البيانات","أداة لتسريع جلب البيانات","إنديكس","طريقة لتسريع البحث في الجداول","تقليل وقت تنفيذ الاستعلامات","تحسين أداء قاعدة البيانات","فهرس قاعدة البيانات","تسريع عمليات القراءة","speed up database queries","make database lookups faster","database search optimization tool","find table rows quickly","improve read performance","database indexing structure","avoid slow select queries","speed up foreign key joins","database search key","indix","indeks","database lookup optimization"]
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
