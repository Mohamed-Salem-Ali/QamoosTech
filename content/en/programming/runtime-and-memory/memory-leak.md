---
id: memory-leak
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [garbage-collection, virtual-memory, reference]
aliases: ["memory leaks", "leak"]
term: "Memory Leak"
pronunciation: "MEM-uh-ree LEEK"
keywords: ["memory grows and never shrinks", "forgotten references", "restart fixes it", "out of memory crash", "cache without a limit", "heap keeps growing", "الذاكرة تكبر ولا تصغر", "مراجع منسية", "إعادة التشغيل تحلها", "انهيار نفاد الذاكرة", "ذاكرة مؤقتة بلا حد", "الكومة تواصل النمو"]
---

## Definition

A memory leak is a bug where a program keeps memory it no longer needs, so its memory use grows over time until it slows down or crashes.

## Where you hear it

In production monitoring (memory climbing for hours), OOM kills in containers and performance investigations.

## Examples

- Memory climbs 50 MB an hour, so we have a leak.
- An unbounded in-memory cache is a classic leak.

## Common mistake

Thinking a garbage-collected language can't leak. Objects still referenced (in a global list or cache) are never collected.

## Don't confuse with

High memory use that is stable. A leak is memory that keeps growing without bound.

## Say it at work

- Take a heap snapshot to find what's growing.
- Restarting hides the leak; we still need to fix it.
