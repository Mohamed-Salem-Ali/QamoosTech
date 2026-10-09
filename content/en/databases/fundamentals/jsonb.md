---
id: jsonb
category: databases
subcategory: fundamentals
level: intermediate
related: [database, query, schema]
tags: [postgresql]
term: "JSONB"
pronunciation: "JAY-SON-BEE"
keywords: ["binary json in postgresql","store json efficiently database","postgresql json storage format","index json data postgres","json vs jsonb postgresql","query semi structured data","decomposed binary json format","jsonb column postgresql","تخزين البيانات الثنائية في بوستجريس","صيغة جيسون الثنائية في قواعد البيانات","فهرسة بيانات جيسون في بوستجريس","الفرق بين جيسون وجيسون بي","تخزين بيانات شبه مهيكلة","تسريع الاستعلام عن بيانات جيسون","نوع بيانات جيسون الثنائي","استخدام جيسون بي في بوستجريس"]
---

## Definition

JSONB is a binary storage format for JSON data in PostgreSQL that allows for efficient indexing and faster processing. Unlike standard JSON, it stores data in a decomposed binary format, which avoids reparsing the text every time the data is accessed.

## Where you hear it

In database schema design meetings, performance optimization discussions, and when working with semi-structured data in PostgreSQL.

## Examples

- We should use a JSONB column to store the flexible user preferences object.
- Querying a JSONB field with a GIN index significantly improves search performance.
- The query finds users whose preferences contain a dark theme, using the JSONB index.

## Common mistake

Thinking that JSONB is always better than standard JSON; while it is faster to query, it takes slightly longer to write because the data must be converted into the binary format first.

## Don't confuse with

JSONB is often confused with standard JSON; the key difference is that JSON stores data as an exact copy of the input text, while JSONB stores it in a decomposed binary format that supports indexing.

## Say it at work

- Let's switch this column to JSONB so we can create an index on the nested attributes.
- I have updated the schema to use JSONB for the metadata field to ensure faster query execution times.
