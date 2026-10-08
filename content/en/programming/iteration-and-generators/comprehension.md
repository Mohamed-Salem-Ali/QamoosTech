---
id: comprehension
category: programming
subcategory: iteration-and-generators
level: beginner
related: [loop, generator, array, map-and-filter]
tags: [python]
aliases: ["list comprehension", "dictionary comprehension"]
term: "Comprehension"
pronunciation: "kom-pri-HEN-shun"
keywords: ["build a list in one line", "[x for x in items]", "list dictionary set comprehension", "filter and transform", "shorter than a for loop", "python comprehension syntax", "بناء قائمة في سطر واحد", "‏[x for x in items]", "استيعاب القائمة والقاموس والمجموعة", "التصفية والتحويل", "أقصر من حلقة for", "صيغة الاستيعاب في بايثون"]
---

## Definition

A comprehension is a short expression that builds a list, dictionary or set by looping over something and optionally filtering it.

## Where you hear it

In Python code reviews and tutorials, whenever a small loop that only builds a collection can be shortened.

## Examples

- `[n * n for n in numbers if n > 0]` builds the squares of the positive numbers.
- A dictionary comprehension turns the list of pairs into a lookup table.
- This comprehension keeps only the active users and collects their emails.

## Common mistake

Cramming complex logic into one line. If it needs more than one condition or is hard to read, use a normal loop.

## Don't confuse with

A generator expression, which looks the same but with parentheses and produces items lazily.

## Say it at work

- That loop is just building a list; turn it into a comprehension.
- This comprehension is too dense, so let's expand it.
