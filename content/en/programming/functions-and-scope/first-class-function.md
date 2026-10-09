---
id: first-class-function
category: programming
subcategory: functions-and-scope
level: intermediate
related: [function, higher-order-function, anonymous-function]
aliases: ["functions as values"]
term: "First-Class Function"
pronunciation: "FURST klas FUNK-shun"
keywords: ["functions are values", "store function in variable", "pass function as argument", "return a function from a function", "function in a dictionary", "functions are objects", "الدوال قيم", "تخزين دالة في متغير", "تمرير دالة كوسيط", "إرجاع دالة من دالة", "دالة داخل قاموس", "الدوال كائنات"]
---

## Definition

A language has first-class functions when functions are treated like any other value: you can store them in variables, pass them around and return them.

## Where you hear it

In Python and JavaScript explanations of callbacks, closures and decorators.

## Examples

- Because functions are first-class, we can keep them in a dictionary and call them by name.
- JavaScript functions are first-class, so you can pass one as an argument.
- Because functions are first-class, we can pass the validator as an argument to the form builder.

## Common mistake

Mixing up referring to a function with calling it. `f` is the function itself; `f()` runs it.

## Don't confuse with

A higher-order function, which is one that uses functions as inputs or outputs. First-class is the capability that makes it possible.

## Say it at work

- Since functions are first-class here, a lookup table beats the if-chain.
- Store the handler in a variable and pass it along.
