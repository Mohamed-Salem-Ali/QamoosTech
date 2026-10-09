---
id: property
category: programming
subcategory: object-oriented
level: intermediate
related: [attribute, encapsulation, method]
tags: [python]
aliases: ["getter", "setter", "getter and setter"]
term: "Property"
pronunciation: "PROP-er-tee"
keywords: ["getter and setter", "attribute with validation", "@property decorator", "computed attribute", "read only attribute", "run code on attribute access", "getter و setter", "خاصية مع تحقق", "الـ decorator ‏@property", "خاصية محسوبة", "خاصية للقراءة فقط", "تنفيذ كود عند الوصول للخاصية"]
---

## Definition

A property looks like a plain attribute but runs code when you read or write it, which lets a class validate values or compute them on demand.

## Where you hear it

In Python and C# classes, code reviews about validation, and discussions of getters and setters.

## Examples

- `balance` is a read-only property, so callers cannot assign to it.
- The setter rejects negative ages.
- The total property is computed from the line items every time it is read.

## Common mistake

Hiding slow work behind a property. People expect reading an attribute to be quick and free of side effects.

## Don't confuse with

A method, which you call with parentheses. A property is used without them.

## Say it at work

- Turn that getter into a property so callers keep the simple syntax.
- Validate it in the setter, not at every call site.
