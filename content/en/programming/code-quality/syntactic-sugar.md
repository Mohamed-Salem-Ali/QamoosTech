---
id: syntactic-sugar
category: programming
subcategory: code-quality
level: intermediate
related: [decorator, comprehension, ternary-operator]
aliases: ["sugar"]
term: "Syntactic Sugar"
pronunciation: "sin-TAK-tik SHUG-er"
keywords: ["shorter way to write the same thing", "easier syntax for the same behavior", "decorator is syntactic sugar", "async await sugar", "convenience syntax", "just shorthand", "طريقة أقصر لكتابة الشيء نفسه", "صيغة أسهل لنفس السلوك", "الـ decorator سكر نحوي", "سكر async await", "صيغة للتسهيل", "مجرد اختصار"]
---

## Definition

Syntactic sugar is syntax that makes code easier to write or read but does not add new ability: it means exactly the same as a longer form.

## Where you hear it

In language discussions, tutorials explaining decorators or `async/await`, and interviews asking what happens underneath.

## Examples

- The `@decorator` line is just syntactic sugar for `func = decorator(func)`.
- A list comprehension is sugar over a loop that appends to a list.
- The for-in loop is syntactic sugar over calling next() on the iterator.

## Common mistake

Treating the sugar as magic. Knowing what it expands to helps you debug when it behaves unexpectedly.

## Don't confuse with

A new feature, which adds something you could not do before. Sugar only changes how it is written.

## Say it at work

- That's just syntactic sugar for a function call.
- Under the hood the sugar expands into a plain loop.
