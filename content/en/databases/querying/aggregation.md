---
id: aggregation
category: databases
subcategory: querying
level: intermediate
related: [group-by, query, sql, lookup]
tags: [sql, django]
aliases: ["aggregate", "aggregate function", "annotation"]
term: "Aggregation"
pronunciation: "ag-ruh-GAY-shun"
keywords: ["sum count average of rows", "collapse many rows into one value", "total of a column", "max and min", "aggregate function", "count rows", "مجموع أو عدد أو متوسط الصفوف", "اختصار عدة صفوف في قيمة واحدة", "مجموع عمود", "القيمة العظمى والصغرى", "دالة تجميعية", "عدّ الصفوف"]
---

## Definition

Aggregation combines many rows into a single value, such as a sum, a count, an average, a minimum or a maximum.

## Where you hear it

In reporting queries, dashboards, ORM code such as `aggregate()` and `annotate()`, and performance reviews.

## Examples

- The report uses an aggregation to total every payment for the week.
- Let the database do the aggregation instead of looping in Python.
- The dashboard uses GROUP BY with SUM to show revenue per country.

## Common mistake

Fetching every row and adding them up in application code. The database can do it far faster in one query.

## Don't confuse with

`GROUP BY`, which splits rows into groups first so that you get one aggregate per group instead of one for the whole table.

## Say it at work

- Do the aggregation in SQL and return just the total.
- That page is slow because it aggregates in Python.
