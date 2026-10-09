---
id: one-to-one-relationship
category: databases
subcategory: modeling
level: intermediate
related: [foreign-key, many-to-many-relationship, data-model]
tags: [sql, django]
aliases: ["one to one", "one-to-one", "onetoonefield"]
term: "One-to-One Relationship"
pronunciation: "WUN-too-WUN ree-LAY-shun-ship"
keywords: ["each row has exactly one match", "user and profile", "split a large table", "unique foreign key", "onetoonefield", "extra details table", "كل صف له مقابل واحد بالضبط", "المستخدم وملفه الشخصي", "تقسيم جدول كبير", "مفتاح أجنبي فريد", "حقل OneToOneField", "جدول تفاصيل إضافية"]
---

## Definition

In a one-to-one relationship each row in one table matches at most one row in another, such as a user and their profile.

## Where you hear it

In schema design, when optional details are split out of a main table, and in ORM fields such as `OneToOneField`.

## Examples

- Each user has exactly one profile row.
- A one-to-one link is just a foreign key with a unique constraint.
- Each employee has one badge record, enforced by a unique foreign key.

## Common mistake

Using one-to-one when the data could simply be columns on the same table. Split only when there is a real reason.

## Don't confuse with

A one-to-many relationship, where one row can match many rows, like one customer with many orders.

## Say it at work

- Model the optional details as a one-to-one table.
- It's one-to-one, so the foreign key must be unique.
