---
id: dataclass
category: programming
subcategory: object-oriented
level: intermediate
related: [class, attribute, boilerplate]
tags: [python]
aliases: ["data class"]
term: "Dataclass"
pronunciation: "DAY-tuh-klas"
keywords: ["class that mostly holds data", "@dataclass decorator", "auto generated init and repr", "data container class", "frozen immutable dataclass", "less boilerplate classes", "صنف يحمل البيانات في الغالب", "الـ decorator ‏@dataclass", "init وrepr تُنشأ تلقائياً", "صنف حاوية بيانات", "dataclass غير قابل للتعديل", "أصناف بكود أقل"]
---

## Definition

A dataclass is a class meant mainly to hold data. The `@dataclass` decorator writes `__init__`, `__repr__` and `__eq__` for you from the field list.

## Where you hear it

In modern Python code, code reviews that remove boilerplate, and explanations of records and value objects.

## Examples

- Use a dataclass for the member record instead of writing the constructor by hand.
- A frozen dataclass cannot be changed after creation.

## Common mistake

Using a mutable default like `tags: list = []`. Use `field(default_factory=list)` so each object gets its own list.

## Don't confuse with

A TypedDict, which only describes the shape of a dictionary. A dataclass creates real objects.

## Say it at work

- Make it a dataclass; we don't need a hand-written constructor.
- Freeze the dataclass so it can be used as a dictionary key.
