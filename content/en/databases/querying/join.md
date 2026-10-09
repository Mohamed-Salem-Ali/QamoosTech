---
id: join
category: databases
subcategory: querying
level: intermediate
related: [query, table-row-column, n-plus-one]
term: "Join"
pronunciation: "JOYN"
keywords: ["combine two tables in sql","merge tables on shared column","sql join operation","inner join and left join","link tables using id","query data from multiple tables","sql table relationship query","join vs union sql","connect two tables together","ربط جدولين في قاعدة البيانات","دمج جدولين بناء على عمود","استعلام من جدولين مختلفين","ربط بيانات جدولين sql","كيف أعمل join بين جدولين","الفرق بين join و union","ربط الجداول في قواعد البيانات","امر الربط في sql"]
---
## Definition

A SQL operation that combines rows from two tables using a shared value, such as `user_id`.

## Where you hear it

SQL interviews and reporting queries.

## Examples

- Join the `orders` table with `users` to show the customer name.
- A missing join condition returns millions of rows.
- The join pairs each order with its customer using customer_id.

## Common mistake

Forgetting the join condition, which multiplies every row by every row.

## Don't confuse with

Join is often confused with Union; while a Join combines columns from two tables based on a related column, a Union appends the rows of one result set to another.

## Say it at work

- We should use a left join here to make sure we don't lose any records from the primary table.
- Please include an inner join in the query to filter out users who do not have an active subscription.
