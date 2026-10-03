---
id: n-plus-one
category: databases
level: intermediate
related: [orm, join, query]
term: "N+1 Query Problem"
pronunciation: "EN plus WUN"
keywords: ["too many database queries","orm performance issues","n plus one query problem","database query loop bug","eager loading vs lazy loading","fix slow page load queries","excessive database round trips","optimizing orm fetch patterns","n plus one problem","reduce database calls in loop","مشكلة كثرة استعلامات قاعدة البيانات","تحسين أداء استعلامات الـ orm","بطء تحميل البيانات من قاعدة البيانات","مشكلة الاستعلامات المتكررة داخل حلقة","حل مشكلة n plus one","تقليل عدد الاستعلامات لقاعدة البيانات","التحميل الاستباقي مقابل الكسول","أخطاء الأداء في استعلامات sql","مشكلة الاستعلام الإضافي لكل عنصر","تسريع جلب البيانات من الجداول"]
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

## Don't confuse with

N+1 query problem is often mixed up with a slow database index, but while an index speeds up a single query, N+1 causes hundreds of unnecessary queries to run.

## Say it at work

- We need to fix this N+1 query issue on the dashboard before we release it to production.
- This pull request introduces an N+1 query problem when fetching user profiles, please use eager loading instead.
