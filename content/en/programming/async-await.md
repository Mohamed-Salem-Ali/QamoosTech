---
id: async-await
category: programming
level: intermediate
related: [callback]
term: "Async / Await"
pronunciation: "AY-sink uh-WAYT"
---
## Definition

Keywords that let you write code that waits for slow work, like a network call, in a simple top-to-bottom style.

## Where you hear it

JavaScript, TypeScript, Python, and C# code, plus interviews.

## Examples

- Use `await` to wait for the database query to finish.
- You forgot `await`, so you got a promise instead of the data.

## Common mistake

Awaiting things one by one when they could run together. Independent calls can run in parallel.

## Don't confuse with

Async / await is often mixed up with multithreading, but async/await handles waiting without blocking the thread, whereas multithreading runs multiple tasks on different threads at the same time.

## Say it at work

- Can we refactor this function to use async/await so it is easier to read?
- Please wrap the API call in an async/await block to handle the response properly.
