---
id: table-row-column
category: databases
level: beginner
related: [database, schema]
term: "Table, Row, Column"
translation: "الجدول والصف والعمود"
pronunciation: "تيبل، رو، كولم"
keywords: ["الجدول والصف والعمود في قواعد البيانات","ما هو جدول قاعدة البيانات","الفرق بين الصف والعمود","اضافة عمود الى جدول اس كيو ال","هقسيمة قاعدة البيانات العلائقية","الاعمدة والصفوف في اس كيو ال","سجل وحقل في قاعدة البيانات","شرح الجداول في قواعد البيانات","database table and columns","sql rows and fields","what is a database table","difference between row and column","database record and field","add column to sql table","tebel ro kolum","relational database structure basics"]
---
## التعريف

الـ *table* يحتفظ بنوع واحد من البيانات، والـ *row* سجل واحد (مستخدم واحد)، والـ *column* حقل واحد (البريد الإلكتروني).

## أين تسمعه؟

دروس SQL ونقاشات تصميم قواعد البيانات.

## أمثلة

- The `users` table has a column called `email`.
  - جدول `users` يحتوي على عمود اسمه `email`.
- This query updates only one row.
  - هذا الاستعلام يحدّث صفًا واحدًا فقط.

## خطأ شائع

قول «row» وأنت تقصد الجدول كله. الصف سجل واحد فقط.

## لا تخلطه مع

الفرق بين الجدول (Table) والعرض (View) هو أن الجدول بنية تخزين فيزيائية تحتوي على البيانات الفعلية، بينما العرض هو جدول افتراضي يعتمد على نتائج استعلام SQL.

## قلها في العمل

- Could you check if we need to add a new column to the orders table to track the shipping status?
  - هل يمكنك التحقق مما إذا كنا بحاجة إلى إضافة عمود جديد إلى جدول الطلبات لتتبع حالة الشحن؟
- I noticed that the migration script failed because it tried to insert a duplicate value into a unique column for this row.
  - لاحظت أن سكربت الترحيل فشل لأنه حاول إدخال قيمة مكررة في عمود فريد لهذا الصف.
