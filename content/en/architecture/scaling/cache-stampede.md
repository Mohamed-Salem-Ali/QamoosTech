---
id: cache-stampede
category: architecture
subcategory: scaling
level: intermediate
related: [cache-hit-and-miss, thundering-herd, cache-aside]
aliases: ["dogpile effect", "dogpiling"]
term: "Cache Stampede"
pronunciation: "KASH stam-PEED"
keywords: ["many requests rebuild the same key", "expired key hits the database", "dogpile effect", "lock while rebuilding", "stagger expirations", "cache expiry spike", "طلبات كثيرة تعيد بناء المفتاح نفسه", "مفتاح منتهٍ يضرب قاعدة البيانات", "تأثير التكدس", "قفل أثناء إعادة البناء", "تفاوت أوقات الانتهاء", "ذروة عند انتهاء الصلاحية"]
---

## Definition

A cache stampede happens when a popular cached item expires and many requests miss at the same moment, so they all hit the database to rebuild it.

## Where you hear it

In Redis and CDN performance incidents, and system design interviews about hot keys.

## Examples

- The homepage key expired and 5,000 requests hit the database.
- Add jitter to the TTLs so keys don't all expire together.

## Common mistake

Giving every key the same TTL. They all expire together and cause a spike.

## Don't confuse with

A thundering herd, the broader problem of many clients reacting at once. A stampede is the cache-specific case.

## Say it at work

- Use a lock so only one request rebuilds the key.
- Serve stale data while one worker refreshes it.
