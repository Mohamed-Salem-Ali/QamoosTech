---
id: model
category: databases
subcategory: orm-and-migrations
level: beginner
related: [orm, queryset, data-model]
tags: [django, python]
aliases: ["django model", "model class", "orm model"]
term: "Model"
pronunciation: "MOD-ul"
keywords: ["class that describes a table", "django model", "fields become columns", "instances are rows", "orm class", "define your data in python", "صنف يصف جدولاً", "نموذج Django", "الحقول تصبح أعمدة", "الكائنات هي الصفوف", "صنف الـ ORM", "عرّف بياناتك في بايثون"]
---

## Definition

In an ORM, a model is a class that describes a database table: its fields become columns and each instance is a row.

## Where you hear it

In Django and SQLAlchemy code, `models.py` files, and migration discussions.

## Examples

- Add a `due_date` field to the Payment model.
- Changing a model means creating a migration.

## Common mistake

Using it for any data object. A model is tied to a table; a plain class or dataclass is not.

## Don't confuse with

A data model, which is the overall design of the data. A model is one class inside that design.

## Say it at work

- Which model owns this field?
- Keep the model thin; put rules in services.
