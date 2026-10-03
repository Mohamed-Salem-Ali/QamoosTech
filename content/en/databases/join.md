---
id: join
category: databases
level: intermediate
related: [query, table-row-column, n-plus-one]
term: "Join"
pronunciation: "JOYN"
---
## Definition

A SQL operation that combines rows from two tables using a shared value, such as `user_id`.

## Where you hear it

SQL interviews and reporting queries.

## Examples

- Join the `orders` table with `users` to show the customer name.
- A missing join condition returns millions of rows.

## Common mistake

Forgetting the join condition, which multiplies every row by every row.
