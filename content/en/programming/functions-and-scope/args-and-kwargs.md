---
id: args-and-kwargs
category: programming
subcategory: functions-and-scope
level: intermediate
related: [function, parameter-vs-argument, tuple]
tags: [python]
aliases: ["args kwargs", "variable-length arguments", "varargs"]
term: "*args and **kwargs"
pronunciation: "ARGZ and KWARGZ"
keywords: ["variable number of arguments", "accept any arguments", "pass extra keyword arguments", "unpack list into arguments", "wrapper functions forward arguments", "def f(*args, **kwargs)", "عدد متغير من الوسائط", "قبول أي وسائط", "تمرير وسائط مسماة إضافية", "فك قائمة إلى وسائط", "الدوال المغلِّفة تمرر الوسائط"]
---

## Definition

`*args` collects extra positional arguments into a tuple, and `**kwargs` collects extra keyword arguments into a dictionary, so a function can accept any number of them.

## Where you hear it

In Python tutorials, decorators and wrapper functions, and library code that forwards arguments to another function.

## Examples

- The wrapper takes `*args, **kwargs` and passes them straight to the original function.
- `total(*numbers)` accepts any number of values.
- The decorator accepts *args and **kwargs, so it works with any function signature.

## Common mistake

Using them everywhere. Clear named parameters are easier to read and document than a hidden bag of arguments.

## Don't confuse with

Unpacking at the call site: `f(*items)` spreads a list into arguments, while `def f(*items)` collects them.

## Say it at work

- Accept `**kwargs` and forward them to the parent class.
- I'd rather list the real parameters than hide them in kwargs.
