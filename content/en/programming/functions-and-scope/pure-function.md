---
id: pure-function
category: programming
subcategory: functions-and-scope
level: intermediate
related: [side-effect, function, immutable, method-chaining]
aliases: ["pure functions"]
term: "Pure Function"
pronunciation: "PYOOR FUNK-shun"
keywords: ["same input same output", "function without side effects", "easy to test function", "no global state", "deterministic function", "functional programming basics", "نفس المدخل نفس المخرج", "دالة بلا آثار جانبية", "دالة سهلة الاختبار", "بلا حالة عامة", "دالة حتمية", "أساسيات البرمجة الوظيفية"]
---

## Definition

A pure function always returns the same result for the same inputs and changes nothing outside itself.

## Where you hear it

In functional programming talks, in code reviews about testability, and when separating logic from input and output.

## Examples

- The payout calculation is a pure function, so testing it is easy.
- Keep the logic pure and put printing and file access in a thin outer layer.

## Common mistake

Hiding a side effect inside a function that looks pure, for example reading the clock or a global variable.

## Don't confuse with

A function with side effects, which may read or change things outside itself, such as files, the network or global state.

## Say it at work

- Make this a pure function and pass the date in as an argument.
- Pure functions are trivial to unit test.
