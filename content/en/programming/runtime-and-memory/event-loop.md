---
id: event-loop
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [microtask-queue, async-await, callback]
tags: [javascript]
aliases: ["node event loop", "task queue", "callback queue"]
term: "Event Loop"
pronunciation: "ih-VENT LOOP"
keywords: ["how javascript runs async code", "single thread", "call stack and queues", "settimeout runs later", "blocking the loop", "node.js and browser", "كيف تشغل جافاسكربت الكود غير المتزامن", "خيط واحد", "المكدس والطوابير", "‏setTimeout تعمل لاحقاً", "حجب الحلقة", "‏Node.js والمتصفح"]
---

## Definition

The event loop is the mechanism that lets a single thread handle many tasks: it repeatedly takes the next waiting callback (a timer, a click, a network response) and runs it when the call stack is empty.

## Where you hear it

In JavaScript and Node.js (and Python `asyncio`) interviews, performance debugging when the UI freezes and "why did setTimeout run last?" questions.

## Examples

- A long loop blocks the event loop, so the page can't respond.
- `setTimeout(fn, 0)` still waits until the stack is empty.

## Common mistake

Running heavy CPU work on the loop. Nothing else, including other users' requests in Node, can run meanwhile.

## Don't confuse with

Multithreading, where several threads run at once. The event loop is one thread taking turns.

## Say it at work

- Don't block the event loop.
- Move the heavy work to a worker.
