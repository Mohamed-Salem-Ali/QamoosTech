---
id: check-constraint
category: databases
subcategory: modeling
level: intermediate
related: [constraint, unique-constraint, schema]
tags: [sql, django]
aliases: ["check rule"]
term: "Check Constraint"
pronunciation: "CHEK kun-STRAYNT"
keywords: ["rule enforced by the database", "value must be positive", "reject invalid rows", "weeks greater than zero", "data integrity rule", "constraint on a column", "قاعدة تفرضها قاعدة البيانات", "يجب أن تكون القيمة موجبة", "رفض الصفوف غير الصالحة", "الأسابيع أكبر من صفر", "قاعدة سلامة البيانات", "قيد على عمود"]
---

## Definition

A check constraint is a rule stored in the database that every row must satisfy, such as "the amount must be greater than zero". The database rejects any row that breaks it.

## Where you hear it

In schema design, migrations, and discussions about where validation should live.

## Examples

- A check constraint stops anyone saving a negative amount, even from a script.
- Add a check constraint so weeks can never be zero.
- The check constraint rejects any order whose quantity is zero.

## Common mistake

Validating only in application code. Another script, a manual edit or a future service can bypass it; the database cannot be bypassed.

## Don't confuse with

Application validation, which gives friendly messages but can be skipped. The constraint is the last line of defence.

## Say it at work

- Put the rule in a check constraint, not just in the form.
- The insert failed on the check constraint.
