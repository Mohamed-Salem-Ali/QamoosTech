---
id: hashable
category: programming
subcategory: data-structures
level: intermediate
related: [dictionary, set, hashing]
tags: [python]
term: "Hashable"
pronunciation: "HASH-uh-bul"
keywords: ["can be a dictionary key", "unhashable type error", "why list cannot be key", "immutable objects as keys", "hash and eq", "set members must be hashable", "يمكن أن يكون مفتاحاً في قاموس", "خطأ unhashable type", "لماذا لا تصلح القائمة مفتاحاً", "الكائنات غير القابلة للتعديل كمفاتيح", "‏hash و eq", "عناصر المجموعة يجب أن تكون قابلة للتجزئة"]
---

## Definition

A value is hashable if it has a fixed hash value for its whole life, which lets it be a dictionary key or a set member. Immutable values such as numbers, strings and tuples are hashable.

## Where you hear it

In Python errors such as `unhashable type: 'list'`, and in explanations of why dictionary keys must not change.

## Examples

- A list is not hashable, so you cannot use it as a dictionary key.
- Convert the list to a tuple so it becomes hashable.
- The tuple of coordinates is hashable, so it can be a key in the lookup dictionary.

## Common mistake

Defining `__eq__` on a class without `__hash__`. Python then makes instances unhashable.

## Don't confuse with

Cryptographic hashing, which is a one-way function for passwords and integrity checks. Hashable is about using a value as a key.

## Say it at work

- Keys must be hashable; use a tuple instead of a list.
- The class is mutable, so it shouldn't be hashable.
