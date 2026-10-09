---
id: full-table-scan
category: databases
subcategory: performance
level: intermediate
related: [index, explain-plan, query]
tags: [sql, postgresql]
aliases: ["seq scan", "sequential scan", "table scan", "query plan"]
term: "Full Table Scan"
pronunciation: "FUL TAY-bul SKAN"
keywords: ["reads every row", "no index used", "seq scan", "slow on big tables", "explain shows seq scan", "missing index", "يقرأ كل الصفوف", "لا فهرس مستخدم", "المسح التسلسلي", "بطيء على الجداول الكبيرة", "‏EXPLAIN يعرض seq scan", "فهرس ناقص"]
---

## Definition

A full table scan means the database reads every row of a table to answer a query, because it has no useful index to jump straight to the matching rows.

## Where you hear it

In `EXPLAIN` output (`Seq Scan`), slow-query investigations and index design reviews.

## Examples

- The plan shows a sequential scan over 5 million rows.
- Add an index on `member_id` to avoid the full scan.
- The query reads all 5 million rows because the filter column has no index.

## Common mistake

Assuming every scan is bad. On a small table, or when you need most rows, a scan is actually the fastest choice.

## Don't confuse with

An index scan, which uses an index to jump to the needed rows.

## Say it at work

- Is it doing a full table scan?
- Run EXPLAIN ANALYZE and look for Seq Scan.
