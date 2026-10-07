---
id: slicing
category: programming
subcategory: language-basics
level: beginner
related: [array, immutable]
tags: [python]
term: "Slicing"
pronunciation: "SLY-sing"
keywords: ["get part of a list", "substring in python", "start stop step", "reverse a string with [::-1]", "negative index python", "take first n items", "copy a list with [:]", "list[1:3] meaning", "أخذ جزء من قائمة", "استخراج جزء من نص", "البداية والنهاية والخطوة", "عكس نص باستخدام [::-1]", "الفهرس السالب في بايثون", "أخذ أول عناصر من قائمة", "نسخ قائمة بـ [:]", "معنى list[1:3]"]
---

## Definition

Slicing takes a part of a sequence, such as a list or a string, using the form `[start:stop:step]`. The stop position is not included.

## Where you hear it

In Python tutorials, string and list manipulation, and interview exercises such as reversing a string.

## Examples

- `names[1:3]` returns the second and third items.
- `text[::-1]` reverses the string.

## Common mistake

Forgetting that the stop index is excluded, so `[0:3]` gives three items, not four.

## Don't confuse with

Indexing. An index like `items[2]` returns one element; a slice like `items[2:3]` returns a new sequence.

## Say it at work

- Just slice the first ten rows instead of looping through everything.
- A slice returns a copy, so the original list stays unchanged.
