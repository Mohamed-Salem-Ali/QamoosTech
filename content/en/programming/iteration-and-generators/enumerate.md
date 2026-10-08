---
id: enumerate
category: programming
subcategory: iteration-and-generators
level: beginner
related: [loop, iterable, iterator]
tags: [python]
aliases: ["enumerate function"]
term: "Enumerate"
pronunciation: "ih-NOO-muh-rayt"
keywords: ["index and value in a loop", "get position while looping", "python enumerate function", "numbered loop", "loop with counter", "start index at one", "الفهرس والقيمة داخل الحلقة", "معرفة الترتيب أثناء التكرار", "الدالة enumerate في بايثون", "حلقة مرقمة", "حلقة بعداد", "بدء الترقيم من واحد"]
---

## Definition

A built-in Python function that pairs each item of an iterable with its index, so a loop can read the position and the value together, without a counter you manage by hand.

## Where you hear it

In Python code that prints numbered lists, in reviews that replace a manual counter, and in tutorials about loops.

## Examples

- for i, name in enumerate(names): print(i, name) prints each index with its name.
- enumerate(items, start=1) numbers the items from one instead of zero.
- Use enumerate instead of a counter variable that you increment yourself.

## Common mistake

Forgetting that the index starts at zero unless you pass a start value, so the printed numbers are one less than a person would count.

## Don't confuse with

A range loop, which only produces numbers. enumerate pairs those numbers with the items of a sequence, so you get both at once.

## Say it at work

- Use enumerate here so the report shows row numbers without a manual counter.
- Start the numbering at one for the list the user sees.
