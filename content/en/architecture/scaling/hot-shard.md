---
id: hot-shard
category: architecture
subcategory: scaling
level: intermediate
related: [sharding, consistent-hashing, load-balancer]
aliases: ["hot partition", "hot key", "partition key"]
term: "Hot Shard"
pronunciation: "HOT shard"
keywords: ["one shard gets all the traffic", "uneven data distribution", "popular key overloads a node", "skewed load", "hot partition", "bad partition key", "جزء واحد يتلقى كل الزيارات", "توزيع غير متساوٍ للبيانات", "مفتاح شائع يحمّل عقدة زائداً", "حمل غير متوازن", "قسم ساخن", "مفتاح تقسيم سيئ"]
---

## Definition

A hot shard is one partition of a sharded system that receives far more traffic than the others, so it becomes the bottleneck while the rest sit idle.

## Where you hear it

In database performance incidents, DynamoDB and Cassandra design reviews, and key-design discussions.

## Examples

- A celebrity's account became a hot shard.
- Choosing the date as the partition key sends all today's writes to one hot shard.
- The campaign sent all the traffic to one shard, which became the hot shard.

## Common mistake

Picking a partition key with few distinct values or a skewed pattern. Choose one that spreads load evenly.

## Don't confuse with

A single point of failure, where one component's failure stops everything. A hot shard is slow, not necessarily failed.

## Say it at work

- That key is hot; let's add a random suffix.
- One shard is at 90% while the others are at 10%.
