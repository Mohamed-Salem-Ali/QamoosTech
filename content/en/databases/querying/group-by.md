---
id: group-by
category: databases
subcategory: querying
level: intermediate
related: [aggregation, query, sql]
tags: [sql]
aliases: ["group by clause"]
term: "GROUP BY"
pronunciation: "GROOP BY"
keywords: ["group rows by a column", "count per category", "total per week", "one result per group", "having clause", "report by month", "تجميع الصفوف بعمود", "العدد لكل فئة", "المجموع لكل أسبوع", "نتيجة واحدة لكل مجموعة", "جملة HAVING", "تقرير حسب الشهر"]
---

## Definition

`GROUP BY` splits the rows of a query into groups that share a value, so that an aggregate such as a sum or a count is calculated for each group.

## Where you hear it

In reporting queries such as "total per week", in SQL interviews, and in ORM code that groups values.

## Examples

- Group by week to get the amount collected in each one.
- Use `HAVING` to filter groups after the grouping.

## Common mistake

Selecting a column that is neither grouped nor aggregated. The database cannot know which row's value to show.

## Don't confuse with

`ORDER BY`, which only sorts the rows. `GROUP BY` changes how many rows come back.

## Say it at work

- Group by member and sum the amounts.
- Filter the groups with `HAVING`, not `WHERE`.
