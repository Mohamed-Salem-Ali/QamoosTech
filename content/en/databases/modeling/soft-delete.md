---
id: soft-delete
category: databases
subcategory: modeling
level: beginner
related: [database, table-row-column]
term: "Soft Delete"
pronunciation: "SOFT de-LEET"
keywords: ["hide records instead of deleting","mark record as deleted","logical delete pattern","recover deleted database rows","deleted at timestamp column","is deleted status flag","keep history after delete","soft deletion implementation","الحذف المنطقي للبيانات","اخفاء السجلات بدلا من حذفها","تمييز السجل كحذف مؤقت","استعادة السجلات المحذوفة","الحذف الوهمي من قاعدة البيانات","الاحتفاظ بالسجلات المحذوفة","عمود تاريخ الحذف","سوفت ديليت"]
---

## Definition

Soft delete is a data management technique where a record is marked as deleted using a status flag or timestamp instead of being permanently removed from the database. This allows for data recovery and maintains historical integrity.

## Where you hear it

During database schema design, API development, or when discussing data retention policies.

## Examples

- We implemented a `deleted_at` column to perform soft deletes on user accounts.
- The system filters out records where the `is_active` flag is false instead of running a delete query.
- The app marks the order as cancelled with a deleted_at timestamp, so finance can still see it.

## Common mistake

Forgetting to update all application queries to filter out soft-deleted records, which results in "deleted" items still appearing in the user interface.

## Don't confuse with

Soft delete is often confused with hard delete; soft delete hides the record by updating a flag, while hard delete permanently removes the data from the database using a SQL DELETE command.

## Say it at work

- Let's use a soft delete for these orders so we can easily restore them if the customer changes their mind.
- Please ensure that the API endpoint filters out any records marked with a soft delete before returning the list to the client.
