---
id: materialized-view
category: databases
subcategory: performance
level: intermediate
related: [index, cache, query]
tags: [sql, postgresql]
aliases: ["materialised view", "matview"]
term: "Materialized View"
pronunciation: "muh-TEER-ee-ul-eyezd VYOO"
keywords: ["saved query result", "precomputed report", "refresh materialized view", "faster than running the query", "stale until refreshed", "postgres view stored on disk", "نتيجة استعلام محفوظة", "تقرير محسوب مسبقاً", "تحديث العرض المجسد", "أسرع من تنفيذ الاستعلام", "قديم حتى التحديث", "عرض Postgres مخزن على القرص"]
---

## Definition

A materialized view stores the result of a query on disk, so reads are fast, and you refresh it when the underlying data changes. A normal view just re-runs its query every time.

## Where you hear it

In PostgreSQL and data warehouse work, dashboards over heavy reports and "this report is too slow" fixes.

## Examples

- The leaderboard reads from a materialized view refreshed every 5 minutes.
- `REFRESH MATERIALIZED VIEW CONCURRENTLY` avoids blocking readers.
- The dashboard queries the materialized view, which is refreshed every night.

## Common mistake

Forgetting that it is a snapshot. Until you refresh it, it shows old numbers.

## Don't confuse with

A normal view, which stores no data and always shows the current result, but is as slow as the query behind it.

## Say it at work

- Make that report a materialized view.
- When does the view get refreshed?
