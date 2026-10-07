---
id: bulk-operation
category: databases
subcategory: orm-and-migrations
level: intermediate
related: [n-plus-one, orm, transaction]
tags: [django]
aliases: ["bulk insert", "bulk create", "batch insert"]
term: "Bulk Operation"
pronunciation: "BULK op-er-AY-shun"
keywords: ["insert many rows at once", "update many rows in one query", "bulk_create", "avoid saving in a loop", "batch insert", "faster than one by one", "إدراج صفوف كثيرة دفعة واحدة", "تحديث صفوف كثيرة باستعلام واحد", "‏bulk_create", "تجنب الحفظ داخل حلقة", "إدراج دفعي", "أسرع من واحد تلو الآخر"]
---

## Definition

A bulk operation inserts, updates or deletes many rows with a single query, instead of sending one query per row.

## Where you hear it

In ORM code, data imports, seeding scripts and performance reviews that remove slow loops.

## Examples

- Use a bulk insert for the 10,000 imported rows.
- Saving each object in a loop sent thousands of queries; the bulk version sends one.

## Common mistake

Assuming bulk methods run all your model logic. Many skip signals and custom `save()` code.

## Don't confuse with

A transaction, which groups steps so they succeed or fail together. A bulk operation is about sending fewer queries.

## Say it at work

- Switch that loop to a bulk insert.
- Do the import in batches of a thousand rows.
