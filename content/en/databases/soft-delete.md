---
id: soft-delete
category: databases
level: beginner
related: [database, table-row-column]
term: "Soft Delete"
pronunciation: "SOFT de-LEET"
---

## Definition

Soft delete is a data management technique where a record is marked as deleted using a status flag or timestamp instead of being permanently removed from the database. This allows for data recovery and maintains historical integrity.

## Where you hear it

During database schema design, API development, or when discussing data retention policies.

## Examples

- We implemented a `deleted_at` column to perform soft deletes on user accounts.
- The system filters out records where the `is_active` flag is false instead of running a delete query.

## Common mistake

Forgetting to update all application queries to filter out soft-deleted records, which results in "deleted" items still appearing in the user interface.
