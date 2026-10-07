---
id: method-resolution-order
category: programming
subcategory: object-oriented
level: intermediate
related: [multiple-inheritance, inheritance, polymorphism]
tags: [python]
term: "Method Resolution Order (MRO)"
pronunciation: "METH-ud rez-uh-LOO-shun OR-der"
keywords: ["order python searches parent classes", "__mro__ attribute", "super() follows mro", "diamond inheritance lookup", "which method gets called", "c3 linearization", "ترتيب بحث بايثون في الأصناف الأب", "الخاصية __mro__", "super() يتبع MRO", "البحث في وراثة الماسة", "أي دالة ستُستدعى", "ترتيب C3"]
---

## Definition

The method resolution order (MRO) is the order in which Python searches a class and its parents for a method. `super()` follows this order.

## Where you hear it

In Python inheritance discussions, interviews about the diamond problem, and debugging which method actually ran.

## Examples

- Print `D.__mro__` to see the lookup order.
- `super()` calls the next class in the MRO, not necessarily the direct parent.

## Common mistake

Assuming `super()` always means the direct parent. With multiple inheritance it means the next class in the MRO.

## Don't confuse with

Method overriding, which is replacing an inherited method. The MRO decides which version is found first.

## Say it at work

- Check the MRO before adding another base class.
- The method resolution order explains why the mixin's version runs first.
