---
id: jsonb
category: databases
level: intermediate
related: [database, query, schema]
term: "JSONB"
pronunciation: "JAY-SON-BEE"
---

## Definition

JSONB is a binary storage format for JSON data in PostgreSQL that allows for efficient indexing and faster processing. Unlike standard JSON, it stores data in a decomposed binary format, which avoids reparsing the text every time the data is accessed.

## Where you hear it

In database schema design meetings, performance optimization discussions, and when working with semi-structured data in PostgreSQL.

## Examples

- We should use a JSONB column to store the flexible user preferences object.
- Querying a JSONB field with a GIN index significantly improves search performance.

## Common mistake

Thinking that JSONB is always better than standard JSON; while it is faster to query, it takes slightly longer to write because the data must be converted into the binary format first.
