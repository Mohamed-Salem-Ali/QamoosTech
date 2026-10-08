---
id: f-string
category: programming
subcategory: language-basics
level: beginner
related: [type-conversion, data-type, variable]
tags: [python]
aliases: ["formatted string", "string interpolation"]
term: "f-string"
pronunciation: "EF-string"
keywords: ["format text with variables", "f\"hello {name}\"", "string interpolation python", "put variable inside string", "format numbers in string", "print with variables", "تنسيق النص بالمتغيرات", "استبدال المتغيرات داخل النص", "وضع متغير داخل نص", "تنسيق الأرقام داخل النص", "الطباعة مع المتغيرات"]
---

## Definition

An f-string is a Python string that starts with `f` and evaluates the expressions inside `{}` to build the final text.

## Where you hear it

In Python tutorials and code reviews that replace older string formatting.

## Examples

- `f"Hello, {name}!"` puts the name into the greeting.
- `f"{price:,.2f}"` formats a number with commas and two decimals.
- Build the log line with an f-string that includes the number of rows.

## Common mistake

Building log or SQL text with an f-string from user input. For SQL, always use parameters.

## Don't confuse with

A plain string, which has no placeholders and never evaluates what is in braces.

## Say it at work

- Use an f-string instead of concatenating with plus signs.
- Format the amount in the f-string with two decimals.
