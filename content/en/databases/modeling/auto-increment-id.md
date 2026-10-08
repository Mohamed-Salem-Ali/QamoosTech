---
id: auto-increment-id
category: databases
subcategory: modeling
level: beginner
related: [primary-key, table-row-column, database]
aliases: ["auto increment", "autoincrement", "serial id", "sequential id"]
term: "Auto-Increment ID"
pronunciation: "AW-toh IN-krih-ment eye-DEE"
keywords: ["id that counts up by itself", "serial primary key", "autoincrement column", "numeric id vs uuid", "database assigns the id", "id never reused", "معرّف يزيد من تلقاء نفسه", "مفتاح أساسي تسلسلي", "عمود autoincrement", "المعرّف الرقمي مقابل UUID", "قاعدة البيانات تعطي المعرّف", "المعرّف لا يُعاد استخدامه"]
---

## Definition

An auto-increment ID is a primary key whose value the database assigns automatically, counting up: 1, 2, 3 and so on.

## Where you hear it

In table design, ORM defaults, and discussions about integer ids versus UUIDs.

## Examples

- The database gives each new payment the next auto-increment ID.
- Don't expose sequential ids in public URLs because people can guess them.
- The orders table uses an auto-increment ID, so each new order gets the next number.

## Common mistake

Expecting ids to be gap-free. Deleted rows and failed inserts leave gaps, and a deleted id is not reused.

## Don't confuse with

A UUID, which is a long random identifier. It is hard to guess and can be created without asking the database.

## Say it at work

- Use an auto-increment ID internally and a public slug in URLs.
- Ids are never reused, so there will be gaps.
