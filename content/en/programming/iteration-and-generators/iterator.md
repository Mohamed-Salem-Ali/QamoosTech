---
id: iterator
category: programming
subcategory: iteration-and-generators
level: intermediate
related: [iterable, generator, loop]
tags: [python]
aliases: ["iterator protocol", "exhausted iterator"]
term: "Iterator"
pronunciation: "IT-er-ay-ter"
keywords: ["next item one at a time", "stopiteration error", "iterator used only once", "how a for loop works internally", "create custom iterator", "iter and next", "lazy sequence of values", "empty second loop", "العنصر التالي واحداً تلو الآخر", "خطأ StopIteration", "الـ iterator يستخدم مرة واحدة", "كيف تعمل حلقة for داخلياً", "إنشاء iterator مخصص", "الدالتان iter وnext", "تسلسل كسول من القيم", "الحلقة الثانية فارغة"]
---

## Definition

An iterator is an object that produces the items of a sequence one at a time. Each request gives the next item, and when nothing is left it signals the end.

## Where you hear it

When people explain how `for` loops work, in discussions of generators, and when a loop mysteriously runs only once.

## Examples

- Calling `next()` on the iterator returns the next item.
- The iterator is exhausted, so the second loop prints nothing.

## Common mistake

Looping over the same iterator twice. Once it is used up it stays empty; create a new one or keep the data in a list.

## Don't confuse with

An iterable, which is the thing you loop over. Asking an iterable for an iterator is what a `for` loop does first.

## Say it at work

- That's an iterator, so you can only consume it once.
- Wrap it in `list()` if you need to read it twice.
