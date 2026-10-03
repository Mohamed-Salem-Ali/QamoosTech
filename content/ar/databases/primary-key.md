---
id: primary-key
category: databases
level: beginner
related: [database, table-row-column, schema]
term: "Primary Key"
pronunciation: "برايمري كي"
translation: "المفتاح الأساسي"
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
