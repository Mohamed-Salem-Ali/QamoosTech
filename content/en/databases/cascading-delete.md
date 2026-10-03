---
id: cascading-delete
category: databases
level: intermediate
related: [database, schema, table-row-column]
term: "Cascading Delete"
pronunciation: "kas-KAY-ding di-LEET"
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
