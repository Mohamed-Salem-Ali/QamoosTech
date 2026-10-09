---
id: mixin
category: programming
subcategory: object-oriented
level: intermediate
related: [multiple-inheritance, composition, inheritance]
tags: [python, django]
aliases: ["mixins"]
term: "Mixin"
pronunciation: "MIK-sin"
keywords: ["small class that adds one behavior", "reusable behavior via inheritance", "jsonmixin example", "combine with other classes", "add feature to many classes", "mixin vs base class", "صنف صغير يضيف سلوكاً واحداً", "سلوك قابل لإعادة الاستخدام بالوراثة", "مثال JsonMixin", "الدمج مع أصناف أخرى", "إضافة ميزة لأصناف كثيرة", "الفرق بين mixin والصنف الأساسي"]
---

## Definition

A mixin is a small class that adds one specific behaviour to other classes through inheritance. It is not meant to be used on its own.

## Where you hear it

In Python and Django code, for example mixins that add logging or JSON output, and in design discussions about reuse.

## Examples

- `JsonMixin` gives any class a `to_json()` method.
- The view inherits from the login mixin to require authentication.
- The Timestamps mixin adds created_at and updated_at to any model that inherits it.

## Common mistake

Piling up many mixins with overlapping behaviour. The lookup order gets confusing; keep each mixin focused.

## Don't confuse with

A normal base class that represents what something is. A mixin only adds a capability.

## Say it at work

- Put that logging in a mixin and reuse it across the views.
- Keep the mixin small: one behaviour only.
