---
id: cache-aside
category: architecture
subcategory: scaling
level: intermediate
related: [cache, cache-hit-and-miss, write-through-cache]
aliases: ["lazy loading cache", "read-through cache"]
term: "Cache-Aside"
pronunciation: "KASH uh-SIDE"
keywords: ["check the cache first", "load from database on miss", "app manages the cache", "lazy loading cache", "fill the cache on read", "invalidate on write", "افحص الذاكرة المؤقتة أولاً", "حمّل من قاعدة البيانات عند الإخفاق", "التطبيق يدير الذاكرة المؤقتة", "تحميل كسول للذاكرة المؤقتة", "املأ الذاكرة عند القراءة", "أبطل عند الكتابة"]
---

## Definition

Cache-aside is a caching pattern where the application checks the cache first, and on a miss loads from the database and stores the result in the cache for next time.

## Where you hear it

In Redis usage guides, system design interviews and performance fixes for slow read endpoints.

## Examples

- On a miss we read from the database, then set the cache with a 5-minute TTL.
- After an update we delete the cache key so it reloads.

## Common mistake

Forgetting to invalidate the key on write, so users see stale data until the TTL ends.

## Don't confuse with

Write-through, where every write goes to the cache and the database together.

## Say it at work

- Let's use cache-aside for the leaderboard.
- Who invalidates the key on update?
