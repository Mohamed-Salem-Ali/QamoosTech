---
id: stack-overflow
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [stack-frame, recursion, call-stack]
aliases: ["recursionerror", "maximum recursion depth", "call stack size exceeded"]
term: "Stack Overflow (Error)"
pronunciation: "STAK OH-ver-floh"
keywords: ["too many nested calls", "infinite recursion crash", "maximum recursion depth exceeded", "stack is full", "recursion without base case", "deep call chain", "استدعاءات متداخلة كثيرة", "انهيار الاستدعاء الذاتي اللانهائي", "تجاوز أقصى عمق للاستدعاء", "المكدس ممتلئ", "استدعاء ذاتي بلا حالة أساس", "سلسلة استدعاءات عميقة"]
---

## Definition

A stack overflow error happens when the call stack runs out of space, almost always because of recursion that never stops or goes too deep.

## Where you hear it

In Python's `RecursionError`, JavaScript's "Maximum call stack size exceeded", and recursion bugs.

## Examples

- The function has no base case, so it ends in a stack overflow.
- Convert the deep recursion to a loop.
- The stack overflow error came from a recursive call that never reached its base case.

## Common mistake

Raising the recursion limit as the fix. The real problem is usually a missing base case or too deep a design.

## Don't confuse with

The website Stack Overflow, where developers ask questions. The error name came first.

## Say it at work

- We hit a stack overflow on large inputs.
- Add a base case and an iterative version.
