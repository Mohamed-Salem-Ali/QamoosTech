---
id: relational-database
category: databases
subcategory: fundamentals
level: beginner
related: [database, sql, table-row-column]
tags: [sql, postgresql]
aliases: ["rdbms", "sql database", "relational"]
term: "Relational Database"
pronunciation: "rih-LAY-shun-ul DAY-tuh-bays"
keywords: ["tables with rows and columns", "postgres mysql sqlite", "relationships through keys", "sql databases", "fixed schema", "versus nosql", "جداول بصفوف وأعمدة", "‏Postgres وMySQL وSQLite", "علاقات عبر المفاتيح", "قواعد بيانات SQL", "مخطط ثابت", "مقابل NoSQL"]
---

## Definition

A relational database stores data in tables of rows and columns and links the tables through keys. You query it with SQL, and it enforces a fixed schema and constraints.

## Where you hear it

In stack choices (PostgreSQL vs MongoDB), course syllabi and system design interviews.

## Examples

- Payments and members fit a relational database well.
- PostgreSQL and MySQL are relational databases.
- Orders, customers and payments are linked by foreign keys in a relational database.

## Common mistake

Thinking "relational" refers to relatives. It means tables with defined relations between them.

## Don't confuse with

A NoSQL database, which can store documents or key-value data without a fixed table structure.

## Say it at work

- Use a relational database unless we have a reason not to.
- Model it as tables with foreign keys.
