---
id: denormalization
category: databases
level: intermediate
related: [database, index, query, schema]
term: "Denormalization"
pronunciation: "dee-NOR-mal-ih-ZAY-shun"
---

## Definition

Denormalization is the intentional introduction of redundancy into a database schema to improve read performance at the cost of slower writes and larger storage size.

## Where you hear it

In database design meetings, performance tuning sessions, and when scaling applications with high read traffic.

## Examples

- We added a duplicated `user_name` column to the orders table to avoid a costly join.
- Denormalization improved our dashboard query speed by reducing the number of table scans.

## Common mistake

Thinking that denormalization is always bad because it breaks database normalization rules, when in reality it is a standard practice for read-heavy systems.

## Don't confuse with

Denormalization introduces controlled data redundancy to speed up reads, whereas normalization removes redundancy to ensure data integrity and reduce storage.

## Say it at work

- Should we consider denormalization for this table to avoid joining four different collections on every request?
- Please note that this schema uses denormalization to optimize dashboard load times, so keep the synchronization logic in mind.
