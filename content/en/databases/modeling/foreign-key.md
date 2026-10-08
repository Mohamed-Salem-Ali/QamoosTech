---
id: foreign-key
category: databases
subcategory: modeling
level: beginner
related: [database, schema, table-row-column, join]
term: "Foreign Key"
pronunciation: "FAWR-uh-n KEE"
keywords: ["link two tables together","enforce referential integrity in sql","reference primary key in another table","database relationship constraint","connect tables with id","foreign key","forign key","foriegn key","fk constraint","table relationship field","مفتاح أجنبي","ربط جدولين مع بعض","قيد التكامل المرجعي","العلاقة بين جدولين في قاعدة البيانات","الربط بواسطة المفتاح الأساسي","فوريان كي","ربط جدول بجدول آخر","منع حذف بيانات مرتبطة"]
---

## Definition

A field or group of fields in one table that uniquely identifies a row of another table, used to link two tables together and enforce referential integrity.

## Where you hear it

During database design, writing SQL constraints, or discussing table relationships.

## Examples

- The `orders` table includes a foreign key that references the `users` table.
- A foreign key prevents the database from deleting a customer who still has active purchases.
- The payments table uses a foreign key to point at the order it pays for.

## Common mistake

Assuming a foreign key automatically creates an index for fast lookups, which is not true for all database systems and often needs to be created manually.

## Don't confuse with

Foreign Key vs. Primary Key: A primary key uniquely identifies a record within its own table, whereas a foreign key is used to establish a link between data in two different tables.

## Say it at work

- I think we need to add a foreign key to the logs table so we can track which user triggered each event.
- Please ensure that the foreign key constraint is properly defined in the migration file to maintain referential integrity between these two tables.
