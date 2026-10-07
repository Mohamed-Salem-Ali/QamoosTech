---
id: enum
category: programming
subcategory: types-and-typing
level: beginner
related: [data-type, type-hint, constraint]
tags: [python, typescript]
aliases: ["enumeration"]
term: "Enum"
pronunciation: "EE-num"
keywords: ["fixed set of named values", "status values paid unpaid", "constants group", "choices for a field", "enumeration type", "avoid magic strings", "مجموعة ثابتة من القيم المسماة", "قيم الحالة مدفوع وغير مدفوع", "مجموعة ثوابت", "خيارات لحقل", "نوع التعداد", "تجنب النصوص السحرية"]
---

## Definition

An enum (enumeration) is a type with a fixed set of named values, such as `PAID`, `UNPAID` and `UPCOMING`.

## Where you hear it

In code that models statuses, roles or options, and in reviews that replace repeated strings with a named type.

## Examples

- Use an enum for the payment status instead of raw strings.
- The database column only accepts the values defined in the enum.

## Common mistake

Scattering the same string, like "paid", across the code. One typo creates a silent bug; an enum lets the tools catch it.

## Don't confuse with

A constant, which is a single fixed value. An enum groups related constants into one type.

## Say it at work

- Replace those magic strings with an enum.
- Adding a new status means adding one enum member.
