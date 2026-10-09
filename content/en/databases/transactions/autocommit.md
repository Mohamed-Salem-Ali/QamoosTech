---
id: autocommit
category: databases
subcategory: transactions
level: intermediate
related: [transaction, acid, savepoint]
tags: [sql, django]
aliases: ["auto commit"]
term: "Autocommit"
pronunciation: "AW-toh-kuh-MIT"
keywords: ["each statement commits immediately", "no explicit begin", "default mode", "turn off for transactions", "single statement is its own transaction", "django default", "كل جملة تُثبَّت فوراً", "بدون begin صريحة", "الوضع الافتراضي", "أوقفه لاستخدام المعاملات", "الجملة الواحدة معاملة بحد ذاتها", "الافتراضي في Django"]
---

## Definition

In autocommit mode every SQL statement is committed as soon as it finishes, as its own tiny transaction, unless you explicitly start a transaction.

## Where you hear it

In database client settings, Django's default behaviour and bugs where half of a multi-step change was saved.

## Examples

- With autocommit on, the first insert is saved even if the second fails.
- Wrap related writes in `atomic()` so they succeed or fail together.
- Each insert commits by itself, so turning autocommit off made the import all-or-nothing.

## Common mistake

Running several related writes in autocommit mode. A crash in the middle leaves the data half-updated.

## Don't confuse with

An explicit transaction, where nothing is saved until you commit.

## Say it at work

- Is autocommit on in this session?
- Start a transaction first.
