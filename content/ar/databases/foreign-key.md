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

حقل أو مجموعة حقلين في جدول معين تُستخدم للربط بين جدولين وضمان تكامل البيانات من خلال الإشارة إلى المفتاح الأساسي في جدول آخر.

## أين تسمعه؟

أثناء تصميم قواعد البيانات، أو كتابة قيود `SQL`، أو مناقشة العلاقات بين الجداول.

## أمثلة

- The `orders` table includes a foreign key that references the `users` table.
  - يتضمن جدول `orders` مفتاحاً أجنبياً يشير إلى جدول `users`.
- A foreign key prevents the database from deleting a customer who still has active purchases.
  - يمنع المفتاح الأجنبي قاعدة البيانات من حذف عميل لديه مشتريات نشطة.

## خطأ شائع

الاعتقاد بأن المفتاح الأجنبي ينشئ تلقائياً فهرساً (`index`) لعمليات البحث السريعة، وهذا غير صحيح في بعض أنظمة قواعد البيانات وغالباً ما يتطلب إنشاءه بشكل منفصل.
