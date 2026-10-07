---
id: write-through-cache
category: architecture
subcategory: scaling
level: intermediate
related: [cache-aside, cache, eventual-consistency]
aliases: ["write-back cache", "write behind", "write-through"]
term: "Write-Through Cache"
pronunciation: "RYT-throo KASH"
keywords: ["write to cache and database", "cache always up to date", "write-back cache", "write behind", "slower writes", "keeps cache fresh", "الكتابة إلى الذاكرة وقاعدة البيانات", "الذاكرة المؤقتة محدثة دائماً", "الذاكرة المؤقتة المؤجلة الكتابة", "الكتابة المتأخرة", "كتابة أبطأ", "تبقي الذاكرة حديثة"]
---

## Definition

In a write-through cache every write goes to the cache and the database together, so reads from the cache are never stale. A write-back cache writes to the cache first and saves to the database later.

## Where you hear it

In caching strategy discussions, storage controllers, and ORM or CDN settings.

## Examples

- Write-through keeps reads fast and correct, but each write is slower.
- Write-back risks losing data if the cache dies before it flushes.

## Common mistake

Choosing write-back for important data. If the cache fails before saving, the data is gone.

## Don't confuse with

Cache-aside, where the application fills the cache on reads instead of on every write.

## Say it at work

- We use write-through for the settings table.
- What happens on a crash with write-back?
