---
id: savepoint
category: databases
subcategory: transactions
level: intermediate
related: [transaction, acid, autocommit]
tags: [sql, django]
aliases: ["nested transaction", "partial rollback"]
term: "Savepoint"
pronunciation: "SAYV-poynt"
keywords: ["partial rollback", "undo part of a transaction", "nested transaction", "rollback to savepoint", "keep going after an error", "atomic inside atomic", "تراجع جزئي", "التراجع عن جزء من المعاملة", "معاملة متداخلة", "التراجع إلى نقطة الحفظ", "المتابعة بعد خطأ", "ذرية داخل ذرية"]
---

## Definition

A savepoint is a marker inside a transaction that you can roll back to, undoing only the work after it while keeping everything before it.

## Where you hear it

In SQL (`SAVEPOINT`), Django nested `atomic()` blocks and tests that wrap each case in a transaction.

## Examples

- Create a savepoint, try the risky insert, and roll back to it if it fails.
- A nested `atomic()` in Django becomes a savepoint.

## Common mistake

Catching a database error inside a transaction without a savepoint. The whole transaction is then unusable.

## Don't confuse with

A full rollback, which cancels the whole transaction.

## Say it at work

- Wrap the optional step in a savepoint.
- Roll back to the savepoint, not the whole transaction.
