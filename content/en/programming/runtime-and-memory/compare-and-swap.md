---
id: compare-and-swap
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [mutex, data-race, race-condition]
aliases: ["cas", "lock-free", "optimistic update"]
term: "Compare-and-Swap"
pronunciation: "kum-PAIR and SWOP"
keywords: ["atomic update without a lock", "cas instruction", "update only if unchanged", "lock-free", "optimistic update", "atomic counter", "تحديث ذري بلا قفل", "تعليمة CAS", "حدّث فقط إن لم يتغير", "بلا أقفال", "تحديث متفائل", "عداد ذري"]
---

## Definition

Compare-and-swap (CAS) is an atomic operation that updates a value only if it still holds the value you expected, and reports whether it worked. It's the building block of lock-free code.

## Where you hear it

In atomic counters, lock-free data structures, optimistic locking in databases and interview questions.

## Examples

- Retry the CAS in a loop until it succeeds.
- A SQL `UPDATE ... WHERE version = 3` is compare-and-swap at database level.
- The counter uses compare-and-swap so two threads never overwrite each other's update.

## Common mistake

Ignoring the ABA problem. The value can change from A to B and back to A, and the CAS can't tell.

## Don't confuse with

A mutex, which blocks other threads. CAS never blocks; it just fails and you retry.

## Say it at work

- Use an atomic counter instead of a lock.
- This is a CAS loop.
