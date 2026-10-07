---
id: optimistic-locking
category: databases
subcategory: transactions
level: intermediate
related: [pessimistic-locking, race-condition, compare-and-swap]
tags: [sql, django]
aliases: ["optimistic lock", "version column"]
term: "Optimistic Locking"
pronunciation: "OP-tih-MIS-tik LOK-ing"
keywords: ["version column", "update only if unchanged", "detect conflicting edits", "retry on conflict", "no lock held", "lost update prevention", "عمود الإصدار", "حدّث فقط إن لم يتغير", "اكتشاف التعديلات المتعارضة", "إعادة المحاولة عند التعارض", "لا يُمسك قفل", "منع التحديث الضائع"]
---

## Definition

Optimistic locking lets several users work freely and checks at save time, usually with a version number, that nobody else changed the row meanwhile. If someone did, the save fails and is retried.

## Where you hear it

In ORM features (`version` columns), web forms where two people edit the same record and conflict errors.

## Examples

- `UPDATE ... WHERE id = 7 AND version = 3` affects 0 rows, so someone else saved first.
- Show the user the conflict and let them reload.

## Common mistake

Using it when conflicts are very frequent. Constant retries waste work; a lock may fit better.

## Don't confuse with

Pessimistic locking, which locks the row first so others must wait.

## Say it at work

- Add a version column and check it on update.
- Conflicts are rare here, so optimistic is fine.
