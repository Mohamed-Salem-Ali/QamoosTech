---
id: seed-data
category: databases
subcategory: orm-and-migrations
level: beginner
related: [database, migration, schema]
term: "Seed Data"
pronunciation: "SEED DAY-tuh"
keywords: ["initial database records","populate database with defaults","database seeder script","default application configuration data","sample data for testing","first time database setup","loading startup records","database seeding process","inserting baseline data","seed data vs migration","predefined database entries","إدخال بيانات أولية للقاعدة","تعبئة قاعدة البيانات بالقيم الافتراضية","سكربت تغذية قاعدة البيانات","بيانات تجريبية عند التشغيل","إعداد قاعدة البيانات لأول مرة","سجلات افتراضية للتطبيق","طريقة استخدام سيد داتا","ملء الجداول ببيانات بدائية","إضافة بيانات أساسية للنظام","تجهيز بيئة العمل ببيانات","الفرق بين المايجريشن والسيد"]
---

## Definition

Seed data refers to the initial set of records loaded into a database when it is first set up or reset. It often includes essential configuration, default roles, or sample entries needed for the application to function correctly.

## Where you hear it

- During local development setup
- In automated testing and database migrations
- When deploying a new environment

## Examples

- Run the database seeder command to populate the roles table with default values.
- The test suite automatically clears the database and loads seed data before every run.
- After the reset, the seed data gives us one admin user and the default roles.

## Common mistake

Treating seed data as production data, or forgetting that seed scripts should be idempotent so running them multiple times does not create unwanted duplicates.

## Don't confuse with

Seed data is used to populate initial configuration and default records, whereas a database migration defines the structural schema changes over time.

## Say it at work

- Could you please update the seed data script so it includes the new default permissions?
- I added a few more sample users to the seed data file for our local testing.
