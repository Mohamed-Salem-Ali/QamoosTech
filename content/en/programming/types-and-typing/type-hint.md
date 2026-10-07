---
id: type-hint
category: programming
subcategory: types-and-typing
level: intermediate
related: [dynamic-typing, static-typing, data-type]
tags: [python, typescript]
aliases: ["type annotation", "type hints", "type annotations"]
term: "Type Hint"
pronunciation: "TYPE hint"
keywords: ["annotate function parameters", "tell the editor the type", "python type annotations", "def f(x: int) -> str", "mypy checks", "typescript types", "تحديد أنواع معاملات الدالة", "إخبار المحرر بالنوع", "تعليقات النوع في بايثون", "def f(x: int) -> str", "فحص mypy", "أنواع TypeScript"]
---

## Definition

A type hint is a note in the code that says what type a value should have. Tools such as editors and type checkers use it to find mistakes early.

## Where you hear it

In Python and TypeScript projects, code reviews, and discussions of how to make a dynamic language safer.

## Examples

- Add type hints to the function signature so the editor can warn us.
- Python ignores type hints at runtime; a separate checker reads them.

## Common mistake

Assuming type hints are enforced. In Python they are not checked when the program runs; you need a tool such as mypy.

## Don't confuse with

A runtime check such as `isinstance`, which actually inspects a value while the program runs.

## Say it at work

- Please add type hints to the public functions.
- The checker caught a wrong type before the tests even ran.
