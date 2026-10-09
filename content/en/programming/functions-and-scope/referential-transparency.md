---
id: referential-transparency
category: programming
subcategory: functions-and-scope
level: intermediate
related: [pure-function, side-effect, memoization]
aliases: ["referentially transparent", "equational reasoning"]
term: "Referential Transparency"
pronunciation: "REF-er-EN-shul trans-PAIR-en-see"
keywords: ["replace a call with its value", "same input same result", "no hidden state", "functional programming property", "safe to cache", "equational reasoning", "استبدل الاستدعاء بقيمته", "نفس المدخل نفس النتيجة", "بلا حالة خفية", "خاصية في البرمجة الوظيفية", "آمن للتخزين المؤقت", "الاستدلال بالمساواة"]
---

## Definition

An expression is referentially transparent if you can replace it with its result anywhere without changing the program's behaviour. Pure functions have this property.

## Where you hear it

In functional programming talks, discussions on caching and testing, and comparisons of Haskell with Python.

## Examples

- `add(2, 3)` can always be replaced by `5`, so it is referentially transparent.
- `random()` is not referentially transparent.
- A pure call such as area(2) can be replaced by its result, 12.56, anywhere in the code.

## Common mistake

Hiding a clock, a global or a database read inside a function that looks pure. Then replacing it with a value changes behaviour.

## Don't confuse with

A pure function, which is the practical form of the idea. Referential transparency is the property you reason with.

## Say it at work

- That makes it safe to memoize.
- Is this call referentially transparent?
