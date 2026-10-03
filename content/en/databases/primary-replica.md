---
id: primary-replica
category: databases
level: intermediate
related: [database, query, scalability, single-point-of-failure]
term: "Primary / Replica"
pronunciation: "PRY-ma-ree / REP-li-kuh"
---

## Definition

A database architecture pattern where all write operations go to a single primary node, and data is copied to one or more replica nodes that handle read operations to improve performance and availability.

## Where you hear it

- Scaling database reads
- High availability planning
- Database replication configuration

## Examples

- We configured the application to send heavy read queries to the replica.
- When the primary node failed, one of the replicas was promoted to take its place.

## Common mistake

Assuming that replicas receive data updates instantly, leading to unexpected stale reads if the application reads data immediately after writing it.

## Don't confuse with

Primary / Replica is often mixed up with Active / Active clustering, where multiple nodes handle both reads and writes simultaneously, whereas a primary handles writes and replicas handle reads.

## Say it at work

- Can we route these heavy analytics queries to the replica so we do not slow down the primary?
- Please ensure that the application connection string points write operations exclusively to the primary node.
