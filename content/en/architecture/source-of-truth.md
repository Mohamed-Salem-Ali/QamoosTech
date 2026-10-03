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

## Don't confuse with

Source of truth is often confused with 'Single Source of Truth' (SSOT), but while the former refers to the authoritative location of data, the latter is a design principle ensuring that every data element is mastered in exactly one place across the entire organization.

## Say it at work

- We need to decide which service will be the source of truth for user profiles before we start building the API.
- Please update the configuration file in the repository, as it serves as the source of truth for our deployment environment variables.
