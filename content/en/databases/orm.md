---
id: orm
category: databases
level: intermediate
related: [query, prisma, n-plus-one]
term: "ORM"
pronunciation: "oh-ar-EM"
---
## Definition

A tool that lets you work with database tables using objects and methods in your language instead of writing SQL.

## Where you hear it

Django, Prisma, TypeORM, and SQLAlchemy discussions.

## Examples

- The ORM generates the SQL for us.
- For this heavy report, raw SQL is faster than the ORM.

## Common mistake

Never looking at the SQL it creates. An ORM can hide slow queries.

## Don't confuse with

ORM is often confused with an ODM; while an ORM maps objects to relational database tables, an ODM is specifically designed for document-oriented databases like MongoDB.

## Say it at work

- Let's switch to raw queries for this endpoint because the ORM is generating way too many joins.
- I recommend using the ORM for these simple CRUD operations to keep the codebase clean and maintainable.
