---
id: call-stack
category: programming
level: intermediate
related: [function, recursion, debugging]
term: "Call Stack"
pronunciation: "KAWL STAK"
---

## Definition

A call stack is a data structure that tracks the active functions in a program, recording where each function should return control to once it finishes. It operates on a Last-In, First-Out (LIFO) basis, meaning the most recently called function is the first to be completed and removed.

## Where you hear it

- During debugging when analyzing a stack trace.
- When discussing recursion depth or memory limits.
- While explaining how a language runtime manages execution flow.

## Examples

- The program crashed because the call stack exceeded its maximum size due to infinite recursion.
- You can inspect the call stack in your browser's developer tools to see the sequence of function calls.

## Common mistake

Thinking that the call stack stores the actual data or variables of a function; it primarily stores the execution context and return addresses, while the actual data (like objects) is often stored in the heap.

## Don't confuse with

Call stack is often confused with the heap; the call stack manages function execution context and local variables, whereas the heap is used for dynamic memory allocation of objects.

## Say it at work

- I'm looking at the error log, and the call stack shows that the issue originates from the authentication service.
- Please review the attached stack trace to see the call stack leading up to the unexpected termination.
