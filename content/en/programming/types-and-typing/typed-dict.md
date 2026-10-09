---
id: typed-dict
category: programming
subcategory: types-and-typing
level: intermediate
related: [dictionary, type-hint, json-schema]
tags: [python]
term: "TypedDict"
pronunciation: "TYPT dikt"
keywords: ["describe shape of a dictionary", "dict with known keys", "json shaped data types", "typed keys and values", "python typing for dicts", "interface for objects", "وصف شكل القاموس", "قاموس بمفاتيح معروفة", "أنواع البيانات على شكل JSON", "مفاتيح وقيم محددة الأنواع", "الأنواع للقواميس في بايثون", "واجهة للكائنات"]
---

## Definition

A TypedDict describes the shape of a dictionary: which keys it has and what type each value is. At runtime it is still a normal dictionary.

## Where you hear it

In Python projects that handle JSON-like data, and in type-checking discussions.

## Examples

- The API response is typed as a TypedDict with a name and a list of tags.
- The checker warns if you read a key that is not in the TypedDict.
- The config is a TypedDict, so the checker catches a typo in any of its keys.

## Common mistake

Expecting a TypedDict to validate data when the program runs. It only helps the type checker; use a validation library for real input.

## Don't confuse with

A dataclass, which creates real objects with attributes. A TypedDict stays a plain dictionary.

## Say it at work

- Use a TypedDict to describe the JSON we receive.
- Add the missing key to the TypedDict so the checker passes.
