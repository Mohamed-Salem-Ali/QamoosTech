---
id: connection-pool
category: databases
level: intermediate
related: [database, query, latency-vs-throughput]
term: "Connection Pool"
pronunciation: "ku-NEK-shun pool"
---

## Definition

A cache of database connections maintained for reuse, which avoids the expensive overhead of opening a new connection for every request.

## Where you hear it

When configuring database settings, optimizing backend performance, or debugging connection limits.

## Examples

- We configured a connection pool to handle sudden spikes in user traffic.
- The application crashed because the connection pool size was set too low.

## Common mistake

Thinking that setting the pool size to a very high number will always improve performance, when it can actually overwhelm the database server.
