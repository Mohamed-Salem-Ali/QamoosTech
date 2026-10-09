---
id: thread
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [process, mutex, data-race]
aliases: ["multithreading", "threads", "thread-safe", "thread safety"]
term: "Thread"
pronunciation: "THRED"
keywords: ["parallel path in a program", "share memory in one process", "multithreading", "background work", "gil in python", "thread safety", "مسار متوازٍ في برنامج", "تتشارك الذاكرة داخل عملية", "تعدد الخيوط", "عمل في الخلفية", "قفل GIL في بايثون", "أمان الخيوط"]
---

## Definition

A thread is an independent path of execution inside a process. Threads of the same process share its memory, which makes them fast to communicate but easy to get wrong.

## Where you hear it

In concurrency discussions, web server settings (worker threads), Python's GIL and performance tuning.

## Examples

- The server handles each request on a separate thread.
- Access to the shared counter must be thread-safe.
- Each worker thread pulls a job from the shared queue and processes it.

## Common mistake

Sharing data between threads without protection. That causes data races and bugs that appear only sometimes.

## Don't confuse with

A process, which has its own memory. Threads live inside a process and share its memory.

## Say it at work

- Is this code thread-safe?
- Use a thread pool instead of a thread per task.
