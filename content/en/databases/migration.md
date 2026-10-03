---
id: migration
category: databases
level: intermediate
related: [schema, orm]
term: "Migration"
pronunciation: "my-GRAY-shun"
keywords: ["database schema version control","apply database structure changes","track database table updates","versioned database evolution script","how to update db schema","run database change files","manage database table history","database migration tool","sync database across environments","mygration","db schema evolution","تحديث بنية قاعدة البيانات","تتبع تغييرات جداول البيانات","ملفات إصدارات قاعدة البيانات","تطبيق تغييرات الهيكلية برمجيا","مايجريشن","تغيير أعمدة قاعدة البيانات","سجل تغييرات قاعدة البيانات","أداة ترحيل البيانات","تحديث هيكل قاعدة البيانات","إدارة إصدارات القاعدة"]
---
## Definition

A versioned file that describes one change to the database structure, like adding a column. Running it applies the change.

## Where you hear it

Deployments and team workflows with Django, Prisma, or Rails.

## Examples

- Run the migration before starting the new version.
- Never edit a migration that already ran in production.

## Common mistake

Editing an old migration. Create a new one so every environment follows the same history.

## Don't confuse with

Migration updates the database structure over time, whereas a seed populates the database with initial or test data.

## Say it at work

- Did someone add a new migration for the user profile table, or should I create one?
- Please make sure to run the latest migration before testing the changes on the staging environment.
