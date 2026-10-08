---
id: data-model
category: databases
subcategory: modeling
level: beginner
related: [schema, database, normalization]
aliases: ["domain model", "entity relationship model"]
term: "Data Model"
pronunciation: "DAY-tuh MOD-ul"
keywords: ["structure of the data", "tables and relationships", "entity relationship design", "what we store and how it connects", "design the database", "domain model", "بنية البيانات", "الجداول والعلاقات", "تصميم الكيانات والعلاقات", "ما نخزنه وكيف يرتبط", "تصميم قاعدة البيانات", "نموذج المجال"]
---

## Definition

A data model describes what an application stores and how those things relate: the entities, their fields and the relationships between them.

## Where you hear it

In design meetings before building a feature, in diagrams, and in discussions of how to represent a business idea in tables.

## Examples

- Let's sketch the data model before we write any code.
- The data model has four entities: order, customer, payment and shipment.
- The data model shows that each order belongs to one customer and has many items.

## Common mistake

Starting with screens and bolting data on later. A weak data model is expensive to change once real data exists.

## Don't confuse with

A schema, which is the concrete definition of the tables in one database. The data model is the idea behind it.

## Say it at work

- Walk me through the data model.
- This feature needs a change to the data model, not just the UI.
