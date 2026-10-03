---
id: composite-index
category: databases
level: intermediate
related: [database, index, query]
term: "Composite Index"
pronunciation: "KOM-po-zit IN-deks"
---

## Definition

A composite index is a database index created on two or more columns of a table. It allows the database to efficiently search for rows based on combinations of those columns.

## Where you hear it

Database performance tuning sessions, schema design reviews, and when optimizing slow SQL queries.

## Examples

- We added a composite index on `(last_name, first_name)` to speed up our user search feature.
- The query is slow because it filters by `category` and `created_at` without a matching composite index.

## Common mistake

Assuming that a composite index on `(A, B)` automatically speeds up queries that only filter by column `B` alone; it usually only works if the query includes the leftmost column `A`.

## Don't confuse with

Composite index vs. multi-column index: these terms are often used interchangeably, but a composite index specifically refers to the order of columns which dictates how the B-tree structure is traversed.

## Say it at work

- We should consider adding a composite index on these two columns to reduce the query execution time.
- I have identified that the slow performance is due to a missing composite index on the filtering criteria.
