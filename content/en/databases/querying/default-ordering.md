---
id: default-ordering
category: databases
subcategory: querying
level: intermediate
related: [queryset, sql, primary-key]
tags: [django, sql]
aliases: ["meta ordering", "row order", "ordering"]
term: "Default Ordering"
pronunciation: "dih-FAWLT OR-der-ing"
keywords: ["order when none is requested", "meta ordering", "rows come back in no guaranteed order", "order by id", "stable ordering for pagination", "sort result consistently", "الترتيب عند عدم طلبه", "ترتيب ضمن Meta", "الصفوف بلا ترتيب مضمون", "الترتيب بالمعرّف", "ترتيب ثابت للترقيم", "ترتيب النتائج بثبات"]
---

## Definition

Default ordering is the order rows come back in when a query doesn't ask for one. Without an explicit `ORDER BY`, a database promises no particular order.

## Where you hear it

In ORM model settings (`Meta.ordering`), pagination bugs, and tests that pass or fail depending on row order.

## Examples

- Set the default ordering to newest first.
- Pagination needs a stable order, or pages repeat rows.
- The default ordering puts the newest orders first unless the query asks for something else.

## Common mistake

Relying on rows coming back in insertion order. It often works on small data and breaks later.

## Don't confuse with

An explicit `order_by` in one query. Default ordering applies to every query that doesn't override it.

## Say it at work

- Add a tie-breaker like the id to the ordering.
- The test is flaky because no ordering is defined.
