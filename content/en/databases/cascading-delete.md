---
id: cascading-delete
category: databases
level: intermediate
related: [database, schema, table-row-column]
term: "Cascading Delete"
pronunciation: "kas-KAY-ding di-LEET"
keywords: ["delete child records automatically","remove related rows on delete","prevent orphaned database records","automatic cleanup of foreign keys","database relationship delete behavior","cascade row removal","delete parent and children together","sql automatic record deletion","automatic table row cleanup","handle foreign key constraints delete","حذف السجلات التابعة تلقائيا","مسح البيانات المرتبطة عند الحذف","منع وجود سجلات يتيمة","تفعيل الحذف المتتابع في الجداول","حذف الصفوف المرتبطة بقاعدة البيانات","تنظيف البيانات المرتبطة تلقائيا","إعدادات الحذف التلقائي للعلاقات","كاسكيدينج ديليت","حذف السجل الرئيسي والتابع","تلقائية حذف البيانات المرتبطة"]
---

## Definition

A database feature that automatically removes child records when their associated parent record is deleted. It ensures data integrity by preventing orphaned records in related tables.

## Where you hear it

During database schema design, migration planning, or when configuring ORM relationships.

## Examples

- We configured a cascading delete so that removing a user automatically deletes their profile settings.
- Using a cascading delete simplifies cleanup but can lead to accidental data loss if not used carefully.

## Common mistake

Assuming that cascading delete is always the best choice; developers often forget that it can trigger unintended mass deletions across multiple tables if the relationship chain is long.

## Don't confuse with

Cascading delete automatically removes related records when the parent is deleted, whereas a soft delete merely flags a record as inactive without actually removing it from the database.

## Say it at work

- Make sure we set up a cascading delete on this foreign key so we don't end up with orphaned records in the table.
- Please review the database migration to verify that enabling cascading delete will not cause unintended data loss across related tables.
