---
id: schema
category: databases
subcategory: fundamentals
level: beginner
related: [table-row-column, migration, cascading-delete]
term: "Schema"
pronunciation: "SKEE-muh"
keywords: ["database structure definition","how to organize tables","define data types and relations","database design blueprint","api request validation format","skima","database map layout","data model structure","table column configuration","database schema definition","data structure blueprint","بنية قاعدة البيانات","تصميم هيكل الجداول","تحديد أنواع البيانات والعلاقات","مخطط قاعدة البيانات","طريقة تنظيم البيانات","تعريف هيكلية الجداول","سكيما قاعدة البيانات","شكل البيانات في الجدول","مواصفات هيكل البيانات","كيفية تصميم جداول البيانات"]
---
## Definition

The structure of your data: which tables exist, which columns they have, their types, and the relations between them.

## Where you hear it

Database design, Prisma, and API validation.

## Examples

- Update the schema, then create a migration.
- The request does not match the schema, so it is rejected.
- The schema says price is a decimal with two places after the point.

## Common mistake

Designing the schema without thinking about future queries. Think about how data will be read.

## Don't confuse with

Schema defines the structure of your data, while a migration is the version-controlled script that applies those structural changes to the database.

## Say it at work

- Let us update the database schema first before we write the new API endpoints.
- Please review the proposed schema changes in the pull request to ensure all foreign keys are properly indexed.
