---
id: sql
category: databases
subcategory: querying
level: beginner
related: [query, database, join]
tags: [sql]
aliases: ["structured query language"]
term: "SQL"
translation: "لغة الاستعلام البنيوية"
pronunciation: "إس كيو إل"
keywords: ["لغة التخاطب مع قاعدة البيانات", "‏select و insert و update و delete", "لغة الاستعلام البنيوية", "كتابة استعلام لجدول", "لغة قواعد البيانات العلائقية", "الفرق بين SQL وNoSQL", "language to talk to a database", "select insert update delete", "structured query language", "write a query for a table", "relational database language", "sql vs nosql"]
---

## التعريف

SQL (لغة الاستعلام البنيوية) هي اللغة المستخدمة لقراءة البيانات وتغييرها في قواعد البيانات العلائقية، بأوامر مثل `SELECT` و`INSERT` و`UPDATE` و`DELETE`.

## أين تسمعه؟

في مقابلات الـ backend، ونقاشات قواعد البيانات، وكلما قال أحدهم "اكتب استعلاماً" لـ PostgreSQL أو MySQL أو SQLite.

## أمثلة

- Run this SQL against the staging database to count the unpaid rows.
  - نفّذ هذا الـ SQL على قاعدة بيانات الـ staging لعدّ الصفوف غير المدفوعة.
- The ORM generates the SQL for us, but we still read it when debugging.
  - يولّد الـ ORM الـ SQL عنا، لكننا نقرؤه عند تصحيح الأخطاء.
- A SQL query selects the unpaid orders and sorts them by due date.
  - يختار استعلام SQL الطلبات غير المدفوعة ويرتّبها حسب تاريخ الاستحقاق.

## خطأ شائع

بناء الـ SQL بلصق مدخلات المستخدم في نص. هذا يفتح الباب لحقن SQL؛ استخدم المعاملات (parameters) بدلاً من ذلك.

## لا تخلطه مع

قاعدة البيانات (Database) التي تخزّن البيانات. أما SQL فهي اللغة التي تسألها وتغيّرها بها.

## قلها في العمل

- Can you show me the SQL this query produces?
  - هل يمكنك أن تريني الـ SQL الذي ينتجه هذا الاستعلام؟
- Check the SQL in the logs before blaming the database.
  - افحص الـ SQL في السجلات قبل أن تلوم قاعدة البيانات.
