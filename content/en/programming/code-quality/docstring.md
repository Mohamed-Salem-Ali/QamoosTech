---
id: docstring
category: programming
subcategory: code-quality
level: beginner
related: [function, class, pep-8]
tags: [python]
aliases: ["doc string", "documentation string"]
term: "Docstring"
pronunciation: "DOK-string"
keywords: ["documentation string in python", "describe a function", "triple quoted string", "help() output", "document parameters and return", "module documentation", "نص توثيق في بايثون", "وصف الدالة", "نص بين ثلاث علامات اقتباس", "ناتج help()", "توثيق المعاملات والقيمة المعادة", "توثيق الوحدة"]
---

## Definition

A docstring is a string placed right at the start of a module, class or function that describes what it does. Tools and `help()` read it.

## Where you hear it

In Python code reviews, documentation tools, and style guides that ask every public function to explain itself.

## Examples

- Add a docstring that says what the function returns and when it raises.
- `help(my_function)` prints the docstring.

## Common mistake

Repeating the code in words. A good docstring explains the purpose and the surprising cases, not each line.

## Don't confuse with

A comment, which starts with `#` and is ignored by the program. A docstring is real data attached to the object.

## Say it at work

- Please add a docstring to every public function.
- The docstring explains the edge case better than a comment.
