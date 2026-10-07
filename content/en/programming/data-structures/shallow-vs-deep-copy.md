---
id: shallow-vs-deep-copy
category: programming
subcategory: data-structures
level: intermediate
related: [aliasing, reference, object]
tags: [python, javascript]
aliases: ["shallow copy", "deep copy", "deepcopy"]
term: "Shallow vs Deep Copy"
pronunciation: "SHAL-oh vee-ess DEEP KOP-ee"
keywords: ["copy a list with nested lists", "copy.deepcopy", "inner objects still shared", "clone an object", "structuredclone javascript", "copy dictionary python", "نسخ قائمة تحتوي قوائم داخلية", "الدالة copy.deepcopy", "الكائنات الداخلية ما زالت مشتركة", "استنساخ كائن", "الدالة structuredClone في جافاسكريبت", "نسخ قاموس في بايثون"]
---

## Definition

A shallow copy duplicates only the outer container, so nested objects are still shared. A deep copy duplicates everything inside it too.

## Where you hear it

In Python and JavaScript debugging, interviews, and when changing a copied list unexpectedly changes the original.

## Examples

- A shallow copy of the list still shares the inner dictionaries with the original.
- Use a deep copy when the structure contains nested lists.

## Common mistake

Assuming `list.copy()` or `[:]` is fully independent. It copies one level only.

## Don't confuse with

Aliasing, where there is no copy at all: two names for one object.

## Say it at work

- It's a shallow copy, so the inner lists are still shared.
- Deep-copy the config before each test so they don't affect each other.
