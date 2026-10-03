---
id: sharding
category: architecture
level: intermediate
related: [database, scalability, monolith-vs-microservices]
term: "Sharding"
pronunciation: "SHAR-ding"
---

## Definition

Sharding is a database partitioning technique that splits a large dataset into smaller, more manageable chunks called shards, which are then distributed across multiple servers. This approach helps improve performance and scalability by reducing the load on any single database instance.

## Where you hear it

In system design discussions, database administration meetings, and when planning for high-traffic application infrastructure.

## Examples

- We need to implement sharding to handle the rapid growth of our user data.
- The database team is sharding the logs table across four different servers to improve query speed.

## Common mistake

Thinking that sharding is a simple configuration change; it is a complex architectural decision that makes cross-shard queries and data consistency significantly harder to manage.

## Don't confuse with

Sharding vs partitioning: partitioning usually splits a database within a single server or instance, while sharding distributes those partitions across multiple physical servers.

## Say it at work

- Before we hit database limits this holiday season, we should look into sharding our user table.
- Please review the proposed sharding strategy to ensure our cross-shard queries remain efficient.
