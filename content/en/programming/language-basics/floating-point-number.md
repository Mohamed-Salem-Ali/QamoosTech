---
id: floating-point-number
category: programming
subcategory: language-basics
level: intermediate
related: [data-type]
aliases: ["float", "floating point"]
term: "Floating-Point Number"
pronunciation: "FLOH-ting point NUM-ber"
keywords: ["why 0.1 + 0.2 is not 0.3", "float precision error", "decimal vs float for money", "rounding problem in code", "ieee 754", "never compare floats with ==", "money calculation bug", "float rounding python", "لماذا 0.1 + 0.2 لا تساوي 0.3", "خطأ دقة الأعداد العشرية", "الفرق بين decimal وfloat للمال", "مشكلة التقريب في الكود", "معيار IEEE 754", "لا تقارن الأعداد العشرية بـ ==", "خطأ حساب المبالغ المالية", "تقريب الكسور في بايثون"]
---

## Definition

A floating-point number stores a decimal value as a binary approximation, so some fractions, such as 0.1, cannot be represented exactly.

## Where you hear it

In bug reports about rounding, discussions of money calculations, and interviews asking why `0.1 + 0.2` is not `0.3`.

## Examples

- Never compare two floats with equality; check that they are close enough instead.
- We store prices as whole piasters to avoid floating-point errors.

## Common mistake

Using floats for money. Tiny errors add up; use integers of the smallest unit or a decimal type.

## Don't confuse with

A decimal type, which stores base-10 digits exactly and is slower but safe for money.

## Say it at work

- That total is off by a fraction because of float rounding; let's switch to integers.
- Use a tolerance when comparing floats in the test.
