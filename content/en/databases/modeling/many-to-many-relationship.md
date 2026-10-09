---
id: many-to-many-relationship
category: databases
subcategory: modeling
level: intermediate
related: [join-table, foreign-key, one-to-one-relationship]
tags: [sql, django]
aliases: ["many to many", "many-to-many", "manytomanyfield"]
term: "Many-to-Many Relationship"
pronunciation: "MEN-ee-too-MEN-ee ree-LAY-shun-ship"
keywords: ["many on both sides", "students and courses", "tags on articles", "linking table", "manytomanyfield", "each can have many", "متعدد من الطرفين", "الطلاب والمقررات", "الوسوم على المقالات", "جدول الربط", "حقل ManyToManyField", "لكل منهما عدة مقابلات"]
---

## Definition

In a many-to-many relationship, rows on both sides can match many rows on the other, such as students and courses. It is stored in a join table.

## Where you hear it

In schema design, ORM documentation, and any feature involving tags, memberships or enrolments.

## Examples

- An article can have many tags, and a tag can belong to many articles.
- The ORM manages the many-to-many link through a hidden table.
- A student takes many courses, and each course has many students.

## Common mistake

Trying to store a list of ids in one column. Use a join table so the database can enforce and query the links.

## Don't confuse with

A one-to-many relationship, where each child row has exactly one parent.

## Say it at work

- This is many-to-many, so we need a join table.
- Does a member belong to several circles? Then it's many-to-many.
