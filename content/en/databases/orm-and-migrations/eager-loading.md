---
id: eager-loading
category: databases
subcategory: orm-and-migrations
level: intermediate
related: [n-plus-one, orm, join]
tags: [django, sql]
aliases: ["select_related", "prefetch_related", "preloading"]
term: "Eager Loading"
pronunciation: "EE-ger LOH-ding"
keywords: ["load related rows up front", "select_related and prefetch_related", "avoid extra queries in a loop", "fetch relations with the main query", "fix n plus one", "include relation in query", "تحميل الصفوف المرتبطة مسبقاً", "‏select_related و prefetch_related", "تجنب استعلامات إضافية في حلقة", "جلب العلاقات مع الاستعلام الرئيسي", "علاج مشكلة N+1", "تضمين العلاقة في الاستعلام"]
---

## Definition

Eager loading fetches related rows together with the main query, instead of fetching them one by one later when your code touches them.

## Where you hear it

In ORM performance work, code reviews that fix slow list pages, and Django's `select_related` and `prefetch_related`.

## Examples

- Eager loading the member with each payment turned 101 queries into one.
- Use eager loading before looping over the related objects.
- With eager loading, the orders page runs one query instead of one per customer.

## Common mistake

Eager-loading everything everywhere. Load only the relations you will really use, or you fetch data you never read.

## Don't confuse with

Lazy loading, which fetches a relation only when you first access it. It is convenient but is the cause of N+1 queries in loops.

## Say it at work

- Add select_related here to load the member eagerly.
- This page does one query per row; eager load the relation.
