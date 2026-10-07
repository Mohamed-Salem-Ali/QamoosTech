---
id: mutex
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [data-race, semaphore, deadlock]
aliases: ["lock", "mutual exclusion", "critical section"]
term: "Mutex"
pronunciation: "MYOO-teks"
keywords: ["only one thread at a time", "lock around shared data", "critical section", "acquire and release", "mutual exclusion", "threading.lock", "خيط واحد فقط في كل مرة", "قفل حول بيانات مشتركة", "المقطع الحرج", "الحصول والتحرير", "الاستبعاد المتبادل", "القفل في threading"]
---

## Definition

A mutex (mutual exclusion lock) lets only one thread at a time enter a critical section, the code that touches shared data, so threads can't corrupt each other's work.

## Where you hear it

In multithreaded code, Python's `threading.Lock`, Go's `sync.Mutex` and database locking discussions.

## Examples

- Take the mutex before updating the shared counter.
- Hold the lock for as short a time as possible.

## Common mistake

Forgetting to release the lock on an error path, or taking two locks in different orders. Both lead to deadlock.

## Don't confuse with

A semaphore, which lets up to N threads in. A mutex is the special case where N is 1.

## Say it at work

- Wrap this in a lock.
- Use `with lock:` so it is always released.
