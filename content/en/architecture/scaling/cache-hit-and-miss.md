---
id: cache-hit-and-miss
category: architecture
subcategory: scaling
level: beginner
related: [cache, cache-aside, cache-stampede]
aliases: ["cache hit", "cache miss", "hit ratio", "hit rate"]
term: "Cache Hit and Miss"
pronunciation: "KASH HIT and MIS"
keywords: ["found in the cache", "not found in cache", "hit ratio", "cache effectiveness", "fast path and slow path", "percentage of hits", "وُجد في الذاكرة المؤقتة", "لم يوجد في الذاكرة المؤقتة", "نسبة الإصابة", "فعالية الذاكرة المؤقتة", "المسار السريع والمسار البطيء", "نسبة الإصابات"]
---

## Definition

A cache hit means the requested data was found in the cache and served quickly. A cache miss means it wasn't, so the system must fetch it from the slower source. The hit ratio is the share of hits.

## Where you hear it

In CDN and Redis dashboards, performance reviews, and discussions about whether caching is worth it.

## Examples

- Our hit ratio is 95%, so the database barely notices the traffic.
- A cold cache means every request is a miss.
- The first request is a miss and loads from the database; the next ones are hits.

## Common mistake

Looking only at the hit ratio. A cache with a high ratio but stale data is still failing users.

## Don't confuse with

A cache stampede, where many misses for the same key hit the database at once.

## Say it at work

- What's the cache hit ratio?
- Misses spike right after every deploy.
