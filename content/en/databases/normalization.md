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

## Don't confuse with

Normalization is often confused with denormalization, where normalization focuses on reducing redundancy by splitting tables, while denormalization intentionally adds redundancy to improve read performance.

## Say it at work

- Let's perform some normalization on this schema to clean up these redundant columns before we start coding.
- I have reviewed the database model and suggest applying further normalization to ensure data integrity across the new modules.
