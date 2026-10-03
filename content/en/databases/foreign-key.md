---
id: foreign-key
category: databases
level: beginner
related: [database, schema, table-row-column, join]
term: "Foreign Key"
pronunciation: "FAWR-uh-n KEE"
---

## Definition

A field or group of fields in one table that uniquely identifies a row of another table, used to link two tables together and enforce referential integrity.

## Where you hear it

During database design, writing SQL constraints, or discussing table relationships.

## Examples

- The `orders` table includes a foreign key that references the `users` table.
- A foreign key prevents the database from deleting a customer who still has active purchases.

## Common mistake

Assuming a foreign key automatically creates an index for fast lookups, which is not true for all database systems and often needs to be created manually.
