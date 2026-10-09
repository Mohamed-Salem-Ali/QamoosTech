---
id: lookup
category: databases
subcategory: querying
level: intermediate
related: [queryset, aggregation, sql]
tags: [django, python]
aliases: ["field lookup", "filter operator"]
term: "Lookup"
pronunciation: "LOOK-up"
keywords: ["__gte __icontains", "filter operator", "field lookups in django", "double underscore filter", "greater than or contains", "filter(name__startswith)", "العاملان gte وicontains", "عامل التصفية", "عوامل الحقول في Django", "التصفية بشرطتين سفليتين", "أكبر من أو يحتوي", "التصفية ببداية الاسم"]
---

## Definition

A lookup is a filter operator you attach to a field name in an ORM query, such as `amount__gte=100` or `name__icontains="ali"`, to say how to compare it.

## Where you hear it

In Django queries (`filter()`, `exclude()`), ORM docs, and code reviews on search features.

## Examples

- Use `__gte` to get payments of at least 100.
- `__icontains` ignores upper and lower case.
- Filtering with name__icontains matches both Ali and ali.

## Common mistake

Using `__contains` for case-insensitive search. It is case-sensitive; use `__icontains`.

## Don't confuse with

A SQL `WHERE` clause, which is the raw form. A lookup is the ORM's way of writing the same condition.

## Say it at work

- Chain two lookups to narrow it down.
- Which lookup would match the beginning of the name?
