---
id: generator
category: programming
subcategory: iteration-and-generators
level: intermediate
related: [iterator, iterable, loop, map-and-filter]
tags: [python, javascript]
aliases: ["generator expression", "yield"]
term: "Generator"
pronunciation: "JEN-er-ay-ter"
keywords: ["function that yields values", "lazy values one at a time", "process huge files without memory", "yield keyword", "generator vs list memory", "infinite sequence", "generator expression syntax", "pause and resume function", "دالة تنتج قيماً بـ yield", "قيم كسولة واحدة تلو الأخرى", "معالجة ملفات ضخمة دون استهلاك الذاكرة", "الكلمة المفتاحية yield", "الفرق بين المولّد والقائمة في الذاكرة", "تسلسل لا نهائي", "صيغة generator expression", "إيقاف الدالة واستئنافها"]
---

## Definition

A generator is a function that produces values one at a time using `yield`, pausing between values instead of building the whole list in memory.

## Where you hear it

In Python code that reads large files or streams, in performance reviews about memory use, and in explanations of lazy evaluation.

## Examples

- We use a generator to read the log file line by line.
- The generator is infinite, so take only the first ten values.

## Common mistake

Treating a generator like a list. You cannot index it or measure its length, and it can be read only once.

## Don't confuse with

A list comprehension, which builds the full list immediately. A generator expression has the same shape but produces items lazily.

## Say it at work

- Make it a generator so we never hold the whole file in memory.
- This pipeline is lazy: each stage is a generator.
