---
id: multiple-inheritance
category: programming
subcategory: object-oriented
level: intermediate
related: [inheritance, method-resolution-order, mixin]
tags: [python]
term: "Multiple Inheritance"
pronunciation: "MUL-ti-pul in-HAIR-i-tans"
keywords: ["class with two parents", "inherit from several classes", "diamond problem", "which parent method runs", "mixin classes", "python mro", "صنف له أبوان", "الوراثة من عدة أصناف", "مشكلة الماسة", "أي دالة أب تعمل", "أصناف mixin", "ترتيب MRO في بايثون"]
---

## Definition

Multiple inheritance means a class has more than one parent class and inherits behaviour from all of them.

## Where you hear it

In Python and C++ design discussions, explanations of mixins, and the diamond problem.

## Examples

- `class D(B, C)` inherits from both B and C.
- Python uses the method resolution order to decide which parent's method runs first.

## Common mistake

Using it to share code between unrelated classes. Prefer composition, or small mixins that add one behaviour.

## Don't confuse with

Multilevel inheritance, a chain with one parent per level, such as A, then B, then C. Multiple inheritance has several direct parents.

## Say it at work

- Multiple inheritance makes the lookup order hard to see here.
- Let's use composition instead of a second parent class.
