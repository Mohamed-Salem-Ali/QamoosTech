---
id: coroutine
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [async-await, generator, thread]
aliases: ["coroutines", "async function", "cooperative multitasking"]
term: "Coroutine"
pronunciation: "KOH-roo-teen"
keywords: ["function that can pause", "async def", "await gives control back", "cooperative multitasking", "lightweight concurrency", "event loop runs it", "دالة تستطيع التوقف", "الكلمة async def", "‏await تعيد التحكم", "تعدد مهام تعاوني", "تزامن خفيف", "حلقة الأحداث تشغلها"]
---

## Definition

A coroutine is a function that can pause in the middle (at an `await`), let other work run, and resume later where it stopped. Async code is built from coroutines.

## Where you hear it

In Python `asyncio`, Kotlin, JavaScript async functions and discussions about handling many connections.

## Examples

- Calling a coroutine function gives you a coroutine object; you must await it.
- One thread can run thousands of coroutines.

## Common mistake

Forgetting to `await`. The coroutine never runs and Python only warns that it was never awaited.

## Don't confuse with

A thread, which the operating system schedules and can interrupt at any time. A coroutine only pauses where it chooses to.

## Say it at work

- Make this a coroutine so it doesn't block the loop.
- Don't call blocking code inside a coroutine.
