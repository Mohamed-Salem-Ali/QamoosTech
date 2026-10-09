---
id: queryset
category: databases
subcategory: orm-and-migrations
level: intermediate
related: [orm, query, eager-loading, default-ordering]
tags: [django, python]
aliases: ["query set"]
term: "QuerySet"
pronunciation: "KWEER-ee-set"
keywords: ["django lazy query object", "filter and chain queries", "queryset is lazy", "evaluate a queryset", "objects.filter", "django orm result", "كائن الاستعلام الكسول في Django", "التصفية وتسلسل الاستعلامات", "الـ QuerySet كسول", "تنفيذ الـ queryset", "‏objects.filter", "نتيجة الـ ORM في Django"]
---

## Definition

A QuerySet is Django's lazy description of a database query. You can filter and chain it, and the query only runs when you actually read the results.

## Where you hear it

In Django code and documentation, performance reviews about how many queries a page runs, and interviews about the ORM.

## Examples

- Chaining `filter()` and `order_by()` doesn't hit the database until the QuerySet is evaluated.
- Return a QuerySet from the function so callers can keep refining it.
- The QuerySet is filtered twice, and the database is queried only once when we loop over it.

## Common mistake

Turning it into a list too early. That runs the query and loses the chance to add filters or limits.

## Don't confuse with

A list of model instances, which is already loaded into memory. A QuerySet may not have touched the database yet.

## Say it at work

- Keep it as a QuerySet and filter further in the view.
- Print `qs.query` to see the SQL it will run.
