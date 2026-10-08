---
id: union-type
category: programming
subcategory: types-and-typing
level: intermediate
related: [type-hint, type-narrowing, null-vs-undefined, generics]
tags: [python, typescript]
aliases: ["union", "optional type"]
term: "Union Type"
pronunciation: "YOON-yun TYPE"
keywords: ["value can be one of several types", "int or string type", "optional type none", "str | None", "type a | b", "nullable type", "قيمة قد تكون من عدة أنواع", "نوع رقم أو نص", "نوع اختياري أو None", "النوع a | b", "نوع يقبل القيمة الفارغة"]
---

## Definition

A union type says a value may be one of several types, for example `int | None` for a number that can also be missing.

## Where you hear it

In TypeScript and Python typing, and in code reviews about functions that may return nothing.

## Examples

- The function returns `str | None`, so check for None before using it.
- A union of two types is clearer than using the any type.

## Common mistake

Using a union and then ignoring the other case. The checker forces you to narrow the type first.

## Don't confuse with

A generic type, which keeps one unknown type consistent. A union allows several known alternatives.

## Say it at work

- Make the return type a union so callers know it can be empty.
- Narrow the union with an if before accessing the field.
