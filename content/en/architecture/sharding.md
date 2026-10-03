---
id: sharding
category: architecture
level: intermediate
related: [database, scalability, monolith-vs-microservices]
term: "Sharding"
pronunciation: "SHAR-ding"
keywords: ["split large database across servers","horizontal database scaling technique","distribute data into smaller chunks","database partitioning across multiple nodes","handle high traffic database load","scaling database beyond single server","database sharding strategy","shard database table","partitioning data for performance","horizontal partitioning explained","تقسيم قاعدة البيانات على خوادم","توزيع البيانات على عدة خوادم","تجزئة قاعدة البيانات الضخمة","تحسين أداء قاعدة البيانات","توسيع نطاق قاعدة البيانات","تقنية تقسيم الجداول أفقيا","توزيع البيانات لتقليل الضغط","تجزئة البيانات إلى أجزاء","شاردينج قاعدة البيانات","استراتيجية توزيع البيانات"]
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
