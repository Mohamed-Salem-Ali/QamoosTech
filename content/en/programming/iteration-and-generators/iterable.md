---
id: iterable
category: programming
subcategory: iteration-and-generators
level: intermediate
related: [iterator, loop, generator]
tags: [python]
term: "Iterable"
pronunciation: "IT-er-uh-bul"
keywords: ["object you can loop over", "for loop works on iterable", "list string dict are iterable", "what can i use in a for loop", "iterable vs iterator", "make a class iterable", "iterate over collection", "loopable object", "كائن يمكن المرور عليه بحلقة", "حلقة for تعمل على الكائنات القابلة للتكرار", "القائمة والنص والقاموس قابلة للتكرار", "ما الذي أستخدمه في حلقة for", "الفرق بين iterable وiterator", "جعل الصنف قابلاً للتكرار", "المرور على مجموعة", "كائن قابل للمرور"]
---

## Definition

An iterable is anything you can loop over, one item at a time, such as a list, a string, a dictionary or a file.

## Where you hear it

In Python tutorials about `for` loops, and when a function says it accepts any iterable.

## Examples

- The function accepts any iterable, so you can pass a list or a generator.
- A string is iterable: the loop gives you one character at a time.

## Common mistake

Thinking an iterable is the same as an iterator. An iterable can produce an iterator; the iterator is what keeps track of where you are.

## Don't confuse with

An iterator, which hands out the items one by one and can be used only once.

## Say it at work

- Type it as an iterable so callers aren't forced to pass a list.
- Any iterable works with this loop.
