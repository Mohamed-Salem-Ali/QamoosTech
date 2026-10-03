---
id: synchronous-vs-asynchronous
category: architecture
level: beginner
related: [async-await, callback, message-queue]
term: "Synchronous vs Asynchronous"
pronunciation: "SING-kro-nus vs ay-SING-kro-nus"
---

## Definition

Synchronous operations execute tasks one after another, where each task must finish before the next begins. Asynchronous operations allow a task to start and run in the background, letting the program continue with other work without waiting for the task to complete.

## Where you hear it

During system design discussions, API integration planning, and when debugging performance bottlenecks.

## Examples

- The application uses a synchronous call to fetch user data, which blocks the UI until the response arrives.
- We implemented an asynchronous process for sending emails to ensure the user doesn't wait for the mail server.

## Common mistake

Assuming that asynchronous code always runs in parallel or on multiple threads, when it is often just a way to handle waiting for I/O operations efficiently on a single thread.
