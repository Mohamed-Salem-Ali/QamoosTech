---
id: higher-order-function
category: programming
subcategory: functions-and-scope
level: intermediate
related: [function, callback, decorator]
term: "Higher-Order Function"
pronunciation: "HY-er OR-der FUNK-shun"
keywords: ["function that takes a function", "function returning a function", "map filter reduce", "passing functions as arguments", "sorted with key function", "functional programming", "دالة تأخذ دالة", "دالة تعيد دالة", "map وfilter وreduce", "تمرير الدوال كوسائط", "الترتيب بدالة key", "البرمجة الوظيفية"]
---

## Definition

A higher-order function either takes another function as an argument or returns a function, such as `map`, `sorted(key=...)` or a decorator.

## Where you hear it

In JavaScript and Python courses, functional programming talks, and discussions of callbacks and decorators.

## Examples

- `sorted(names, key=len)` is a higher-order function call because it receives `len`.
- A decorator is a higher-order function that returns a new function.
- The helper takes a function and returns a new function that retries it three times.

## Common mistake

Thinking it needs special syntax. It is just an ordinary function that happens to use another function.

## Don't confuse with

A callback, which is the function being passed in. The function that receives it is the higher-order one.

## Say it at work

- Pass the comparison as a function so this stays reusable.
- A higher-order function keeps the loop logic in one place.
