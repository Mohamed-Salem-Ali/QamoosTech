---
id: cache
category: architecture
level: beginner
related: [latency-vs-throughput, scalability]
term: "Cache"
pronunciation: "KASH"
---
## Definition

A fast place to keep a copy of data that is expensive to get, so the next request can reuse it.

## Where you hear it

Performance work and the famous "clear your cache" advice.

## Examples

- We cache the product list for five minutes.
- The old data appears because of the cache.

## Common mistake

Caching without a plan to refresh it. Users then see old data and nobody knows why.

## Don't confuse with

Cache stores data temporarily for faster access, while a database stores the source of truth permanently.

## Say it at work

- Let's add a cache layer here so we can reduce the load on the main database.
- Please invalidate the cache after updating user profiles to prevent stale data issues.
