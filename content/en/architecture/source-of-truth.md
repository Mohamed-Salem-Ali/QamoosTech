---
id: source-of-truth
category: architecture
level: beginner
related: [database, cache]
term: "Source of Truth"
pronunciation: "SORS uv TROOTH"
---
## Definition

The one place where a piece of information officially lives. When two copies disagree, this one wins.

## Where you hear it

Documentation, system design, and config management.

## Examples

- The database is the source of truth; the cache is only a copy.
- Where is the source of truth for prices?

## Common mistake

Having several "sources of truth". Then you actually have none, only a bug waiting to happen.
