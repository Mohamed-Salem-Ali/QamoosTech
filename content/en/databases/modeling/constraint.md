---
id: constraint
category: databases
subcategory: modeling
level: beginner
related: [database, schema, query, invariant]
term: "Constraint"
pronunciation: "kuhn-STRAYNT"
keywords: ["rules for database columns","restrict data input values","ensure database data integrity","prevent invalid table entries","enforce column value rules","database schema validation rules","limit allowed column data","ensure unique table values","database column restrictions","check for valid data entry","sql column validation rules","database field requirements","قواعد لتقييد إدخال البيانات","فرض شروط على الأعمدة","منع إدخال بيانات غير صالحة","ضمان سلامة بيانات الجدول","قواعد التحقق من البيانات","شروط على أعمدة قاعدة البيانات","تحديد القيم المسموح بها","طريقة منع تكرار البيانات","قيد أو شرط في الجدول","التحقق من صحة المدخلات","مفاهيم تصميم قواعد البيانات","ضبط جودة بيانات الجداول"]
---

## Definition

A rule applied to database columns or tables that restricts the type of data that can be inserted or updated.

## Where you hear it

In database design discussions, when defining table schemas, or when an insert fails due to invalid data.

## Examples

- The email column has a `UNIQUE` constraint to prevent duplicate accounts.
- The age column includes a `CHECK` constraint to ensure values are greater than zero.
- The database refuses a second account with the same email because of the unique constraint.

## Common mistake

Thinking constraints only slow down performance, ignoring how they protect data integrity and prevent invalid states.

## Don't confuse with

Constraint restricts the data allowed in a table, while an index improves query performance and speeds up data retrieval.

## Say it at work

- Let us add a foreign key constraint to make sure we do not end up with orphaned records.
- The build pipeline failed because the new migration violated an existing unique constraint on the users table.
