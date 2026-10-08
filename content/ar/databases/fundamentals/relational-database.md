---
id: relational-database
category: databases
subcategory: fundamentals
level: beginner
related: [database, sql, table-row-column]
tags: [sql, postgresql]
aliases: ["rdbms", "sql database", "relational"]
term: "Relational Database"
translation: "قاعدة البيانات العلائقية"
pronunciation: "ريليشنال داتابيس"
keywords: ["جداول بصفوف وأعمدة", "‏Postgres وMySQL وSQLite", "علاقات عبر المفاتيح", "قواعد بيانات SQL", "مخطط ثابت", "مقابل NoSQL", "tables with rows and columns", "postgres mysql sqlite", "relationships through keys", "sql databases", "fixed schema", "versus nosql"]
---

## التعريف

قاعدة البيانات العلائقية (Relational Database) تخزن البيانات في جداول من صفوف وأعمدة وتربط الجداول بالمفاتيح. تستعلم عنها بـ SQL وتفرض مخططاً ثابتاً وقيوداً.

## أين تسمعه؟

في اختيار التقنيات (PostgreSQL مقابل MongoDB)، ومناهج المقررات، ومقابلات تصميم الأنظمة.

## أمثلة

- Payments and members fit a relational database well.
  - تناسب الدفعات والأعضاء قاعدة بيانات علائقية.
- PostgreSQL and MySQL are relational databases.
  - ‏PostgreSQL وMySQL قاعدتا بيانات علائقيتان.
- Orders, customers and payments are linked by foreign keys in a relational database.
  - ترتبط الطلبات والعملاء والمدفوعات بمفاتيح أجنبية في قاعدة بيانات علائقية.

## خطأ شائع

الظن بأن "علائقية" مأخوذة من الأقارب. تعني جداول لها علاقات محددة بينها.

## لا تخلطه مع

قاعدة NoSQL التي تخزن مستندات أو بيانات مفتاح وقيمة دون بنية جداول ثابتة.

## قلها في العمل

- Use a relational database unless we have a reason not to.
  - استخدم قاعدة علائقية ما لم يكن لدينا سبب آخر.
- Model it as tables with foreign keys.
  - نمذجه كجداول بمفاتيح أجنبية.
