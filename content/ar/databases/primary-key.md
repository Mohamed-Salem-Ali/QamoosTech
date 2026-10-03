---
id: primary-key
category: databases
level: beginner
related: [database, table-row-column, schema]
term: "Primary Key"
pronunciation: "برايمري كي"
translation: "المفتاح الأساسي"
keywords: ["معرف فريد للصفوف","عمود لتمييز السجلات","منع تكرار البيانات في الجدول","المفتاح الرئيسي لقاعدة البيانات","تحديد صفوف الجدول برقم فريد","حقل لا يقبل القيمة الفارغة","المفتاح الأساسي في الجداول","برايمري كي","كيفية تمييز سجلات قاعدة البيانات","تعريف المفتاح الأساسي","unique identifier for table row","column to prevent duplicate entries","field that cannot be null","database record id","main table index","how to uniquely identify rows","primary key definition","unique row constraint","db table identifier","id column setup"]
---

## التعريف

المفتاح الأساسي هو عمود أو مجموعة أعمدة في جدول قاعدة البيانات، يُستخدم لتمييز كل صف بشكل فريد عن غيره. يضمن هذا المفتاح عدم تكرار القيم في هذا العمود، كما يمنع أن تكون قيمته فارغة (null).

## أين تسمعه؟

تسمع هذا المصطلح عند تصميم هيكلية قواعد البيانات (schemas)، أو عند كتابة استعلامات SQL، أو عند إعداد أدوات الربط البرمجي (ORM).

## أمثلة

- The `user_id` column is set as the primary key for the users table.
  - تم تعيين عمود `user_id` ليكون المفتاح الأساسي لجدول المستخدمين.
- Every table in the database must have a primary key to ensure data integrity.
  - يجب أن يحتوي كل جدول في قاعدة البيانات على مفتاح أساسي لضمان سلامة البيانات.

## خطأ شائع

الاعتقاد بأن المفتاح الأساسي يمكن أن يحتوي على قيم مكررة أو قيم فارغة، وهذا يخالف القاعدة الأساسية لفرادة البيانات في قواعد البيانات.

## لا تخلطه مع

المفتاح الأساسي يميز كل صف بشكل فريد ولا يمكن أن تكون قيمته فارغة، بينما المفتاح الأجنبي يربط الجدول بمفتاح أساسي في جدول آخر وقد يقبل قيمًا فارغة.

## قلها في العمل

- Can we use a composite primary key for this mapping table, or should we stick to an auto-incrementing ID?
  - هل يمكننا استخدام مفتاح أساسي مركب لجدول الربط هذا، أم يجب أن نلتزم بمعرف يتزايد تلقائياً؟
- Please ensure that every table created in this migration has a proper primary key defined.
  - يرجى التأكد من أن كل جدول يتم إنشاؤه في ملف الترحيل هذا يحتوي على مفتاح أساسي محدد بشكل صحيح.
