---
id: callback
category: programming
level: intermediate
related: [async-await, function]
term: "Callback"
pronunciation: "KAWL-bak"
---
## Definition

A function you pass to another function so it can be called later, often when a task finishes.

## Where you hear it

JavaScript and Node.js, event handlers, and older asynchronous code.

## Examples

- Pass a callback that runs after the file is read.
- Nested callbacks became hard to read, so we moved to `async/await`.

## Common mistake

Nesting callbacks inside callbacks until the code becomes unreadable ("callback hell").
