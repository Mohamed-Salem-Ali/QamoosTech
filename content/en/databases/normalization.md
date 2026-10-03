---
id: normalization
category: databases
level: intermediate
related: [database, schema, table-row-column]
term: "Normalization"
pronunciation: "NOR-muh-li-ZAY-shun"
---

## Definition

Normalization is the process of organizing data in a database to minimize redundancy and improve data integrity. It involves dividing large tables into smaller, related tables and defining relationships between them.

## Where you hear it

During database schema design, performance optimization discussions, or when reviewing data models for potential anomalies.

## Examples

- We need to apply normalization to this table to avoid storing the same address multiple times.
- The database schema requires normalization to ensure that updates to user information remain consistent.

## Common mistake

Thinking that normalization always leads to the best performance; sometimes, denormalization is preferred in read-heavy systems to reduce the number of complex joins.
