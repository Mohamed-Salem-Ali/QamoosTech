---
id: dictionary
category: programming
subcategory: data-structures
level: beginner
related: [array, tuple, database]
tags: [python]
aliases: ["dict", "hash map", "hashmap", "key-value pair", "key value store", "associative array"]
term: "Dictionary"
pronunciation: "DIK-shuh-ner-ee"
keywords: ["store data by key", "key value pairs", "python dict", "look up value by name", "hash map explained", "fast lookup by key", "object as map in javascript", "count items with a dictionary", "تخزين البيانات بمفتاح", "أزواج المفتاح والقيمة", "القاموس في بايثون", "البحث عن قيمة بالاسم", "شرح الـ hash map", "بحث سريع بالمفتاح", "الكائن كخريطة في جافاسكريبت", "عد العناصر باستخدام قاموس"]
---

## Definition

A dictionary stores data as key-value pairs, so you can find a value quickly by its key instead of its position.

## Where you hear it

In Python code, JSON handling, and discussions of fast lookups, also called hash maps or objects in other languages.

## Examples

- We keep the user's settings in a dictionary keyed by name.
- Looking up a key in a dictionary is much faster than searching a list.

## Common mistake

Reading a missing key directly raises an error. Use `get()` with a default when the key may not exist.

## Don't confuse with

A list, which is found by position. A dictionary is found by key, and its keys must be unique.

## Say it at work

- Let's use a dictionary here instead of scanning the whole list.
- Key the dictionary by id so we can look each item up instantly.
