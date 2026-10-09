---
id: window-function
category: databases
subcategory: querying
level: intermediate
related: [aggregation, group-by, subquery]
tags: [sql, postgresql]
aliases: ["over clause", "row_number", "running total", "partition by"]
term: "Window Function"
pronunciation: "WIN-doh FUNK-shun"
keywords: ["running total", "rank within a group", "over partition by", "row number", "compare to previous row", "calculate without collapsing rows", "مجموع تراكمي", "الترتيب ضمن مجموعة", "عبارة OVER وPARTITION BY", "رقم الصف", "المقارنة بالصف السابق", "الحساب دون دمج الصفوف"]
---

## Definition

A window function calculates a value across a set of related rows, such as a running total or a rank within a group, while still returning every row. It uses `OVER (...)`.

## Where you hear it

In reporting and analytics SQL, interview questions ("top 3 per group") and Django `Window()` expressions.

## Examples

- Use `ROW_NUMBER() OVER (PARTITION BY member ORDER BY paid_at)` to get each member's first payment.
- A running total is a window function over the ordered rows.
- The running total column is a window function over the rows ordered by date.

## Common mistake

Expecting it to collapse rows like `GROUP BY`. A window function keeps every row and adds a column.

## Don't confuse with

`GROUP BY`, which turns each group into one row.

## Say it at work

- Rank them with a window function.
- Partition by team, order by score.
