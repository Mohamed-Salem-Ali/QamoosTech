---
id: race-condition
category: architecture
subcategory: reliability
level: intermediate
related: [deadlock, idempotency, unique-constraint]
tags: [python, sql]
aliases: ["race", "concurrency bug", "lost update"]
term: "Race Condition"
pronunciation: "RAYS kun-DISH-un"
keywords: ["timing dependent bug", "two requests at the same time", "check then act", "double payment", "works alone fails under load", "lost update", "خطأ يعتمد على التوقيت", "طلبان في الوقت نفسه", "افحص ثم نفّذ", "دفع مزدوج", "يعمل منفرداً ويفشل تحت الحمل", "تحديث ضائع"]
---

## Definition

A race condition is a bug where the result depends on the timing of two actions, such as two requests both checking that a seat is free and then both booking it.

## Where you hear it

In bug reports that only happen "sometimes", payment and booking systems, and concurrency discussions.

## Examples

- Two clicks at once created two payments; it's a race condition.
- A unique constraint closes the race at the database level.

## Common mistake

Checking in code and then writing, assuming nothing changes in between. Use a database constraint, a lock or an atomic update.

## Don't confuse with

A deadlock, where two operations wait for each other forever. A race produces wrong results; a deadlock produces a freeze.

## Say it at work

- We can't reproduce it, so I suspect a race condition.
- Wrap the check and the write in one transaction.
