---
id: pessimistic-locking
category: databases
subcategory: transactions
level: intermediate
related: [optimistic-locking, deadlock, isolation-level]
tags: [sql, django]
aliases: ["select for update", "row lock", "select_for_update"]
term: "Pessimistic Locking"
pronunciation: "PES-ih-MIS-tik LOK-ing"
keywords: ["lock the row first", "select for update", "others wait", "prevent concurrent edits", "hold lock during transaction", "deadlock risk", "اقفل الصف أولاً", "الأمر select for update", "الآخرون ينتظرون", "منع التعديلات المتزامنة", "إمساك القفل طوال المعاملة", "خطر الجمود"]
---

## Definition

Pessimistic locking locks a row as soon as you read it for updating (`SELECT ... FOR UPDATE`), so other transactions must wait until you finish. It assumes conflicts are likely.

## Where you hear it

In booking, balances and counters where two requests must not act on the same row, and Django's `select_for_update()`.

## Examples

- Lock the account row with `select_for_update()` before changing the balance.
- Keep the transaction short so the lock isn't held long.
- The bank transfer locks both account rows first, so two transfers cannot overlap.

## Common mistake

Locking rows in different orders in different code paths. That is the classic recipe for a deadlock.

## Don't confuse with

Optimistic locking, which takes no lock and detects conflicts at save time.

## Say it at work

- Use select_for_update inside atomic.
- Someone is holding the lock.
