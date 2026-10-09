---
id: aliasing
category: programming
subcategory: data-structures
level: intermediate
related: [reference, array, immutable]
tags: [python]
aliases: ["alias"]
term: "Aliasing"
pronunciation: "AY-lee-uh-sing"
keywords: ["two names same object", "changing one list changes the other", "b = a does not copy", "unexpected shared change", "shared reference bug", "list modified in function", "اسمان لنفس الكائن", "تغيير قائمة يغيّر الأخرى", "‏b = a لا ينسخ", "تغيير مشترك غير متوقع", "خطأ المرجع المشترك", "تعديل قائمة داخل دالة"]
---

## Definition

Aliasing happens when two or more names refer to the same object, so a change made through one name is visible through the others.

## Where you hear it

In Python and JavaScript debugging, when a list or object changes somewhere you did not touch it.

## Examples

- `b = a` creates an alias, not a copy, so adding to `b` also changes `a`.
- The bug was aliasing: both rows pointed at the same list.
- Both variables point to the same list, so appending to one changes the other.

## Common mistake

Using `[[0] * 3] * 3` to build a grid. It repeats the same row three times; build each row separately.

## Don't confuse with

A copy, which is a separate object with its own data.

## Say it at work

- That's aliasing: make a copy before changing it.
- Passing the list in creates an alias inside the function.
