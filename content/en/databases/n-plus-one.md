---
id: n-plus-one
category: databases
level: intermediate
related: [orm, join, query]
term: "N+1 Query Problem"
pronunciation: "EN plus WUN"
---
## Definition

A performance bug: one query loads a list of N items, then the code runs one extra query for each item, so you get N+1 queries.

## Where you hear it

ORM performance reviews and slow-page investigations.

## Examples

- The page runs 101 queries because of an N+1 problem.
- Use `select_related` to load the related data in one query.

## Common mistake

Testing only with 5 rows. The problem appears only with thousands of rows in production.
