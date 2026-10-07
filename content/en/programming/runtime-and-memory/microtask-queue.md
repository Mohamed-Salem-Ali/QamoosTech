---
id: microtask-queue
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [event-loop, async-await, callback]
tags: [javascript]
aliases: ["microtask", "macrotask"]
term: "Microtask Queue"
pronunciation: "MY-kroh-task KYOO"
keywords: ["promise callbacks run first", "runs before timers", "then and await continuations", "queuemicrotask", "starve the loop", "order of execution", "استدعاءات الوعود تعمل أولاً", "تعمل قبل المؤقتات", "استكمال then وawait", "الدالة queueMicrotask", "تجويع الحلقة", "ترتيب التنفيذ"]
---

## Definition

The microtask queue holds small jobs, mainly Promise callbacks (`then`, and the code after an `await`), that the event loop runs right after the current task and before any timer or other task.

## Where you hear it

In JavaScript execution-order puzzles, "promise vs setTimeout" interview questions and subtle async bugs.

## Examples

- The promise callback prints before the `setTimeout` one because microtasks run first.
- An endless chain of microtasks can starve rendering.

## Common mistake

Assuming all callbacks share one queue. Promises and timers use different queues with different priorities.

## Don't confuse with

The macrotask (task) queue, which holds timers, I/O and user events and is processed one task per loop turn.

## Say it at work

- Microtasks drain completely before the next task.
- What's the output order here?
