---
id: subquery
category: databases
subcategory: querying
level: intermediate
related: [join, sql, query]
tags: [sql]
aliases: ["nested query", "inner query", "correlated subquery", "derived table"]
term: "Subquery"
pronunciation: "SUB-kweer-ee"
keywords: ["query inside a query", "select in parentheses", "where in select", "nested select", "inner query", "derived table", "استعلام داخل استعلام", "جملة select بين قوسين", "‏where in select", "استعلام متداخل", "الاستعلام الداخلي", "جدول مشتق"]
---

## Definition

A subquery is a `SELECT` written inside another query, usually in parentheses, whose result the outer query uses, for example to filter rows against a computed list or value.

## Where you hear it

In SQL interviews, report queries and ORM code that generates nested `IN (SELECT ...)` clauses.

## Examples

- Find members whose total is above the average using a subquery.
- Often a join is clearer and faster than a subquery.
- The subquery finds the customers who have at least one unpaid invoice.

## Common mistake

Using a correlated subquery that runs once per row on a big table. It can be very slow; try a join or a window function.

## Don't confuse with

A join, which combines tables side by side. A subquery produces a value or list for another query to use.

## Say it at work

- Can we replace this subquery with a join?
- Check the plan for the nested select.
