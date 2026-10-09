---
id: composite-index
category: databases
subcategory: performance
level: intermediate
related: [database, index, query]
term: "Composite Index"
pronunciation: "KOM-po-zit IN-deks"
keywords: ["index on multiple columns","speed up sql queries","multi column index","database index optimization","optimize queries with multiple filters","composite key index","b tree multiple columns","index with more than one column","fix slow database search","فهرس على أكثر من عمود","تسريع استعلامات قاعدة البيانات","فهرس متعدد الأعمدة","تحسين أداء استعلامات sql","فهرس مركب لقواعد البيانات","البحث باستخدام عمودين أو أكثر","كومبوزيت إنديكس","حل بطء استعلامات قاعدة البيانات"]
---

## Definition

A composite index is a database index created on two or more columns of a table. It allows the database to efficiently search for rows based on combinations of those columns.

## Where you hear it

Database performance tuning sessions, schema design reviews, and when optimizing slow SQL queries.

## Examples

- We added a composite index on `(last_name, first_name)` to speed up our user search feature.
- The query is slow because it filters by `category` and `created_at` without a matching composite index.
- The composite index on the customer and date columns speeds up the monthly report.

## Common mistake

Assuming that a composite index on `(A, B)` automatically speeds up queries that only filter by column `B` alone; it usually only works if the query includes the leftmost column `A`.

## Don't confuse with

A composite index is one index over several columns. Column order matters: it helps queries that filter on the first column, or on the first and second together, but not on the second column alone.

## Say it at work

- We should consider adding a composite index on these two columns to reduce the query execution time.
- I have identified that the slow performance is due to a missing composite index on the filtering criteria.
