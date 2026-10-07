---
id: sql
category: databases
subcategory: querying
level: beginner
related: [query, database, join]
tags: [sql]
aliases: ["structured query language"]
term: "SQL"
pronunciation: "ESS-kyoo-EL"
keywords: ["language to talk to a database", "select insert update delete", "structured query language", "write a query for a table", "relational database language", "sql vs nosql", "لغة التخاطب مع قاعدة البيانات", "‏select و insert و update و delete", "لغة الاستعلام البنيوية", "كتابة استعلام لجدول", "لغة قواعد البيانات العلائقية", "الفرق بين SQL وNoSQL"]
---

## Definition

SQL (Structured Query Language) is the language used to read and change data in relational databases, with commands such as `SELECT`, `INSERT`, `UPDATE` and `DELETE`.

## Where you hear it

In backend interviews, database discussions, and whenever someone says "write a query" for PostgreSQL, MySQL or SQLite.

## Examples

- Run this SQL against the staging database to count the unpaid rows.
- The ORM generates the SQL for us, but we still read it when debugging.

## Common mistake

Building SQL by gluing user input into a string. That opens the door to SQL injection; use parameters instead.

## Don't confuse with

A database, which stores the data. SQL is the language you use to ask it questions and change it.

## Say it at work

- Can you show me the SQL this query produces?
- Check the SQL in the logs before blaming the database.
