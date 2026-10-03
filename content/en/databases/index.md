---
id: index
category: databases
level: intermediate
related: [query, table-row-column]
term: "Index"
pronunciation: "IN-deks"
---
## Definition

A structure the database keeps so it can find rows quickly, like the index at the back of a book.

## Where you hear it

Query optimization and migration reviews.

## Examples

- Add an index on `email` to speed up the login query.
- Too many indexes slow down writes.

## Common mistake

Adding an index to every column. Each index costs space and makes inserts slower.
