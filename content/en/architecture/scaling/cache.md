---
id: cache
category: architecture
subcategory: scaling
level: beginner
related: [latency-vs-throughput, scalability]
term: "Cache"
pronunciation: "KASH"
keywords: ["fast temporary data storage","speed up database queries","reduce server load time","keep copy of frequent data","improve application response speed","memory for quick access","stale data issues fix","caching layer implementation","temporary retrieval storage","how to clear cache","ذاكرة مؤقتة سريعة","تسريع جلب البيانات","تقليل الضغط على السيرفر","حفظ نسخة من البيانات","حل مشكلة بطء الاستجابة","تخزين مؤقت للبيانات","تحديث البيانات المخزنة","مسح ذاكرة التخزين","تحسين أداء التطبيق","تخزين البيانات في الذاكرة"]
---
## Definition

A fast place to keep a copy of data that is expensive to get, so the next request can reuse it.

## Where you hear it

Performance work and the famous "clear your cache" advice.

## Examples

- We cache the product list for five minutes.
- The old data appears because of the cache.

## Common mistake

Caching without a plan to refresh it. Users then see old data and nobody knows why.

## Don't confuse with

Cache stores data temporarily for faster access, while a database stores the source of truth permanently.

## Say it at work

- Let's add a cache layer here so we can reduce the load on the main database.
- Please invalidate the cache after updating user profiles to prevent stale data issues.
