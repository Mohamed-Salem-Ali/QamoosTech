---
id: operator-overloading
category: programming
subcategory: object-oriented
level: intermediate
related: [dunder-method, polymorphism, class]
tags: [python]
term: "Operator Overloading"
pronunciation: "OP-er-ay-ter OH-ver-LOH-ding"
keywords: ["define plus for my class", "__add__ and __eq__", "custom behavior for operators", "make objects addable", "vector addition class", "compare custom objects", "تعريف + لصنفي", "‏__add__ و __eq__", "سلوك مخصص للعوامل", "جعل الكائنات قابلة للجمع", "صنف جمع المتجهات", "مقارنة كائنات مخصصة"]
---

## Definition

Operator overloading lets your own class decide what operators such as `+`, `==` or `<` mean for its objects, by defining special methods.

## Where you hear it

In Python and C++ classes, math or money types, and reviews of custom value objects.

## Examples

- Implementing `__add__` lets you write `price_a + price_b` for Money objects.
- Compare two points with `==` because the class defines equality.
- The Vector class defines __add__, so two vectors can be added with the plus sign.

## Common mistake

Giving an operator a surprising meaning. Keep it natural: `+` should combine things, not trigger side effects.

## Don't confuse with

A normal method such as `add()`. Overloading makes the operator itself work on your objects.

## Say it at work

- Overload `+` so adding two amounts of the same currency just works.
- Return `NotImplemented` for types the operator doesn't support.
