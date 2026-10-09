---
id: semaphore
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [mutex, thread, rate-limiting]
aliases: ["counting semaphore"]
term: "Semaphore"
pronunciation: "SEM-uh-for"
keywords: ["limit concurrent access", "counter of permits", "at most n at once", "connection pool limit", "acquire and release", "asyncio semaphore", "تحديد الوصول المتزامن", "عداد التصاريح", "ما لا يزيد عن N في الوقت نفسه", "حد مجمّع الاتصالات", "الحصول والتحرير", "سيمافور asyncio"]
---

## Definition

A semaphore is a counter that controls how many threads or tasks can use a resource at the same time. Each user takes a permit and gives it back when done; if none are left, the next one waits.

## Where you hear it

In concurrency code (limiting parallel downloads or database connections), OS courses and interviews.

## Examples

- A semaphore of 5 keeps us to five parallel requests.
- Release the permit in a `finally` block.
- A semaphore with a count of ten lets ten workers call the external API at the same time.

## Common mistake

Not releasing the permit when an error happens. Slots leak until nothing can run.

## Don't confuse with

A mutex, which allows exactly one holder at a time.

## Say it at work

- Limit it with a semaphore so we don't overload the API.
- What's the semaphore size?
