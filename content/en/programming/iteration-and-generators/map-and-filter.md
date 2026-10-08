---
id: map-and-filter
category: programming
subcategory: iteration-and-generators
level: intermediate
related: [comprehension, generator, lazy-evaluation]
aliases: ["map function", "filter function"]
term: "Map and Filter"
pronunciation: "MAP and FIL-ter"
keywords: ["apply a function to every item", "keep only matching items", "python map and filter", "transform a list without a loop", "array map and filter in javascript", "lazy map result", "تطبيق دالة على كل عنصر", "الإبقاء على العناصر المطابقة", "map وfilter في بايثون", "تحويل قائمة دون حلقة", "دالتا map وfilter في JavaScript", "نتيجة map الكسولة"]
---

## Definition

Two ways to transform a collection without writing the loop yourself. map applies a function to every item, and filter keeps only the items for which the function returns a true value. In Python, both return lazy iterators.

## Where you hear it

In code written in a functional style, in data pipelines, and in JavaScript, where map and filter are array methods with the same names.

## Examples

- map(str.upper, names) converts every name to uppercase.
- filter(lambda n: n > 0, numbers) keeps only the positive numbers.
- In JavaScript, items.map(f) and items.filter(f) do the same job on arrays.

## Common mistake

Treating the result of map or filter in Python as a list. It is an iterator, so a second loop over it finds nothing. Wrap it in list() when you need it twice.

## Don't confuse with

A list comprehension does the same job in one readable expression, such as [n for n in numbers if n > 0]. Choose whichever is clearer for the team.

## Say it at work

- Could we filter the orders with a comprehension instead of chaining map and filter?
- The map call returns an iterator, so wrap it in list() before we count it.
