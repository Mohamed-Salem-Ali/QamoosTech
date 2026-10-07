---
id: unique-constraint
category: databases
subcategory: modeling
level: beginner
related: [constraint, primary-key, check-constraint]
tags: [sql, django]
aliases: ["unique key", "unique together"]
term: "Unique Constraint"
pronunciation: "yoo-NEEK kun-STRAYNT"
keywords: ["no duplicate values", "email must be unique", "unique together", "reject duplicate row", "integrityerror duplicate key", "one per member per week", "لا قيم مكررة", "البريد يجب أن يكون فريداً", "فرادة مجموعة أعمدة", "رفض الصف المكرر", "خطأ مفتاح مكرر", "واحد لكل عضو في كل أسبوع"]
---

## Definition

A unique constraint makes the database reject a row if another row already has the same value, or the same combination of values, in the constrained columns.

## Where you hear it

In table design, migrations, and errors such as "duplicate key value violates unique constraint".

## Examples

- A unique constraint on member and week stops a double payment.
- Emails must be unique, so the database refuses a second account.

## Common mistake

Checking for duplicates only in code. Two requests at once can both pass the check; the constraint is what really prevents it.

## Don't confuse with

A primary key, which is also unique but identifies the row and cannot be empty. A table can have many unique constraints.

## Say it at work

- Add a unique constraint instead of checking in code.
- The migration fails because the existing data has duplicates.
