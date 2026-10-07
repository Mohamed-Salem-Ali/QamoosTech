---
id: tuple
category: programming
subcategory: data-structures
level: beginner
related: [array, immutable, dictionary]
tags: [python]
term: "Tuple"
pronunciation: "TUP-el"
keywords: ["list that cannot change", "immutable sequence python", "tuple vs list", "return multiple values from function", "unpack a tuple", "fixed record of values", "tuple as dictionary key", "single item tuple comma", "قائمة لا يمكن تغييرها", "تسلسل غير قابل للتعديل في بايثون", "الفرق بين tuple وlist", "إرجاع عدة قيم من دالة", "فك تغليف tuple", "سجل ثابت من القيم", "استخدام tuple كمفتاح في القاموس", "tuple بعنصر واحد والفاصلة"]
---

## Definition

A tuple is an ordered, fixed collection of values. Once created, it cannot be changed.

## Where you hear it

In Python code that returns several values, and in explanations of when to use a tuple instead of a list.

## Examples

- The function returns a tuple of the minimum and maximum.
- A tuple of coordinates can be used as a dictionary key.

## Common mistake

Forgetting the comma in a one-item tuple: `(5)` is just the number 5, while `(5,)` is a tuple.

## Don't confuse with

A list, which is changeable. Use a tuple for a fixed record and a list for a collection that grows.

## Say it at work

- Return a tuple so the caller can unpack both values at once.
- Make it a tuple, since these values should never change.
