---
id: consistent-hashing
category: architecture
subcategory: scaling
level: intermediate
related: [sharding, load-balancer, hot-shard]
aliases: ["hash ring", "virtual nodes"]
term: "Consistent Hashing"
pronunciation: "kun-SIS-tent HASH-ing"
keywords: ["add a server move few keys", "hash ring", "spread keys across nodes", "cache cluster growth", "avoid reshuffling everything", "virtual nodes", "إضافة خادم ونقل مفاتيح قليلة", "حلقة التجزئة", "توزيع المفاتيح على العقد", "نمو عنقود الذاكرة المؤقتة", "تجنب إعادة خلط كل شيء", "العقد الافتراضية"]
---

## Definition

Consistent hashing is a way to spread keys across servers so that adding or removing a server moves only a small share of the keys, instead of reshuffling almost all of them.

## Where you hear it

In cache clusters, distributed databases, load balancers and system design interviews.

## Examples

- With consistent hashing, adding a cache node only moves about 1/N of the keys.
- Virtual nodes even out the load between servers.

## Common mistake

Using plain `hash(key) % N`. When N changes, nearly every key maps to a different server.

## Don't confuse with

Sharding, which is splitting data across servers. Consistent hashing is one way to decide which shard a key goes to.

## Say it at work

- Use consistent hashing so scaling doesn't flush the cache.
- How many virtual nodes per server?
