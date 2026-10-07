---
id: ttl
category: devops
subcategory: infrastructure
level: beginner
related: [dns-record, cache-hit-and-miss, cdn]
aliases: []
term: "TTL (Time To Live)"
pronunciation: "TEE-TEE-EL"
keywords: ["how long to keep a value", "dns cache duration", "cache expiry seconds", "lower ttl before migration", "expires after", "redis key ttl", "كم تُحفظ القيمة", "مدة تخزين DNS", "ثوانٍ حتى انتهاء الصلاحية", "خفض TTL قبل الترحيل", "تنتهي بعد", "‏TTL لمفتاح Redis"]
---

## Definition

TTL (Time To Live) is how long a piece of data may be kept in a cache before it must be fetched again. A DNS record with TTL 3600 can be cached for an hour.

## Where you hear it

In DNS settings, CDN and Redis caching rules, and before migrating a site.

## Examples

- Lower the TTL to 300 a day before we switch servers.
- The Redis key expires after its TTL.

## Common mistake

Leaving a long TTL before a change. Some users keep the old value for hours after the switch.

## Don't confuse with

Cache invalidation, which removes an item on purpose. TTL is automatic expiry by time.

## Say it at work

- What TTL are we using?
- Set a short TTL for records that might change.
