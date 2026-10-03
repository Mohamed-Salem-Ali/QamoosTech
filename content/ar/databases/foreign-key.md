---
id: foreign-key
category: databases
level: beginner
related: [database, schema, table-row-column, join]
term: "Foreign Key"
pronunciation: "فوريان كي"
translation: "مفتاح أجنبي"
---

## التعريف

حقل أو مجموعة حقول في جدول معين تُستخدم للربط بين جدولين وضمان تكامل البيانات من خلال الإشارة إلى المفتاح الأساسي في جدول آخر.

## أين تسمعه؟

أثناء تصميم قواعد البيانات، أو كتابة قيود `SQL`، أو مناقشة العلاقات بين الجداول.

## أمثلة

- The `orders` table includes a foreign key that references the `users` table.
  - يتضمن جدول `orders` مفتاحاً أجنبياً يشير إلى جدول `users`.
- A foreign key prevents the database from deleting a customer who still has active purchases.
  - يمنع المفتاح الأجنبي قاعدة البيانات من حذف عميل لديه مشتريات نشطة.

## خطأ شائع

الاعتقاد بأن المفتاح الأجنبي ينشئ تلقائياً فهرساً (`index`) لعمليات البحث السريعة، وهذا غير صحيح في بعض أنظمة قواعد البيانات وغالباً ما يتطلب إنشاءه بشكل منفصل.

## لا تخلطه مع

الفرق بين المفتاح الأجنبي والمفتاح الأساسي هو أن المفتاح الأساسي يحدد سجلاً فريداً داخل جدوله الخاص، بينما يُستخدم المفتاح الأجنبي لربط البيانات بين جدولين مختلفين.

## قلها في العمل

- I think we need to add a foreign key to the logs table so we can track which user triggered each event.
  - أعتقد أننا بحاجة لإضافة مفتاح أجنبي إلى جدول السجلات حتى نتمكن من تتبع المستخدم الذي تسبب في كل حدث.
- Please ensure that the foreign key constraint is properly defined in the migration file to maintain referential integrity between these two tables.
  - يرجى التأكد من تعريف قيد المفتاح الأجنبي بشكل صحيح في ملف الترحيل للحفاظ على تكامل البيانات المرجعي بين هذين الجدولين.
