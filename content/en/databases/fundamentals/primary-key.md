---
id: primary-key
category: databases
subcategory: fundamentals
level: beginner
related: [database, table-row-column, schema, auto-increment-id]
term: "Primary Key"
pronunciation: "PRY-meh-ree KEE"
keywords: ["unique identifier for table row","column to prevent duplicate entries","field that cannot be null","database record id","main table index","how to uniquely identify rows","primary key definition","unique row constraint","db table identifier","id column setup","معرف فريد للصفوف","عمود لتمييز السجلات","منع تكرار البيانات في الجدول","المفتاح الرئيسي لقاعدة البيانات","تحديد صفوف الجدول برقم فريد","حقل لا يقبل القيمة الفارغة","المفتاح الأساسي في الجداول","برايمري كي","كيفية تمييز سجلات قاعدة البيانات","تعريف المفتاح الأساسي"]
---

## Definition

A primary key is a column or a set of columns in a database table that uniquely identifies each row. It ensures that no two rows have the same value in this field and that the value is never null.

## Where you hear it

You hear this when designing database schemas, writing SQL queries, or configuring an ORM.

## Examples

- The `user_id` column is set as the primary key for the users table.
- Every table in the database must have a primary key to ensure data integrity.
- The order ID is the primary key, so two orders can never share it.

## Common mistake

Assuming that a primary key can contain duplicate values or nulls, which would break the fundamental rule of database uniqueness.

## Don't confuse with

Primary key uniquely identifies each row and cannot be null, while a foreign key links to a primary key in another table and can sometimes accept null values.

## Say it at work

- Can we use a composite primary key for this mapping table, or should we stick to an auto-incrementing ID?
- Please ensure that every table created in this migration has a proper primary key defined.
