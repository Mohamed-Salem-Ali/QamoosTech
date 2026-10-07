---
id: join-table
category: databases
subcategory: modeling
level: intermediate
related: [many-to-many-relationship, foreign-key, join]
tags: [sql, django]
aliases: ["junction table", "through table", "associative table", "link table"]
term: "Join Table"
pronunciation: "JOYN TAY-bul"
keywords: ["table linking two tables", "junction table", "through table", "many to many in sql", "associative table", "student course enrollment", "جدول يربط جدولين", "جدول الوصل", "جدول through", "علاقة متعدد لمتعدد في SQL", "الجدول التجميعي", "تسجيل الطلاب في المقررات"]
---

## Definition

A join table is a table whose rows connect rows from two other tables, usually with two foreign keys. It is how a many-to-many relationship is stored.

## Where you hear it

In schema design, ORM documentation for many-to-many fields, and database interviews.

## Examples

- The `enrollment` table is a join table between students and courses.
- Django creates the join table for a many-to-many field automatically.

## Common mistake

Not adding a unique constraint on the pair of keys. The same link can then be stored twice.

## Don't confuse with

A SQL `JOIN`, which is a query that combines tables. A join table is a real table that stores the links.

## Say it at work

- Add a join table with the two foreign keys and a unique pair.
- The join table can also hold extra data, like the date someone joined.
