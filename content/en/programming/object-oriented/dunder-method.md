---
id: dunder-method
category: programming
subcategory: object-oriented
level: intermediate
related: [method, class, operator-overloading]
tags: [python]
aliases: ["magic method", "special method", "dunder"]
term: "Dunder Method"
pronunciation: "DUN-der METH-ud"
keywords: ["__init__ and __str__", "special methods in python", "double underscore methods", "magic methods", "make object work with len and +", "__repr__ __eq__", "__init__ و __str__", "الدوال الخاصة في بايثون", "دوال الشرطتين السفليتين", "الدوال السحرية", "جعل الكائن يعمل مع len و +", "__repr__ و __eq__"]
---

## Definition

A dunder (double-underscore) method is a special method whose name is wrapped in double underscores, such as `__init__` or `__len__`. Python calls it for you in certain situations.

## Where you hear it

In Python classes, explanations of how `len(obj)` or `a + b` work, and code reviews of custom classes.

## Examples

- Define `__repr__` so the object prints clearly in logs.
- Adding `__len__` lets you call `len()` on the collection.
- Defining __eq__ makes two Money objects compare equal when their amounts match.

## Common mistake

Calling dunder methods directly, like `obj.__len__()`. Use the built-in `len(obj)` and let Python call them.

## Don't confuse with

A private method named with one underscore, which is only a convention for internal use.

## Say it at work

- Implement `__eq__` so two members with the same data compare equal.
- Add a `__repr__` for easier debugging.
