---
id: constraint
category: databases
level: beginner
related: [database, schema, query]
term: "Constraint"
pronunciation: "kuhn-STRAYNT"
---

## Definition

A rule applied to database columns or tables that restricts the type of data that can be inserted or updated.

## Where you hear it

In database design discussions, when defining table schemas, or when an insert fails due to invalid data.

## Examples

- The email column has a `UNIQUE` constraint to prevent duplicate accounts.
- The age column includes a `CHECK` constraint to ensure values are greater than zero.

## Common mistake

Thinking constraints only slow down performance, ignoring how they protect data integrity and prevent invalid states.

## Don't confuse with

Constraint restricts the data allowed in a table, while an index improves query performance and speeds up data retrieval.

## Say it at work

- Let us add a foreign key constraint to make sure we do not end up with orphaned records.
- The build pipeline failed because the new migration violated an existing unique constraint on the users table.
