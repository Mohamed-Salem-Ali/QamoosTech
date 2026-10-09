---
id: tail-call
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [recursion, stack-frame, stack-overflow]
aliases: ["tail call optimization", "tail recursion"]
term: "Tail Call"
pronunciation: "TAYL kawl"
keywords: ["last action of a function", "tail call optimization", "reuse the stack frame", "recursion without growing stack", "python does not optimize", "functional languages", "آخر إجراء في دالة", "تحسين الاستدعاء الذيلي", "إعادة استخدام إطار المكدس", "استدعاء ذاتي دون نمو المكدس", "بايثون لا تحسّنه", "اللغات الوظيفية"]
---

## Definition

A tail call is a function call that is the very last thing a function does. Some languages optimise it to reuse the current stack frame, so deep recursion doesn't overflow the stack.

## Where you hear it

In functional programming (Scheme, Haskell, Erlang), recursion discussions and "why doesn't Python optimise this?" questions.

## Examples

- This recursion is a tail call, so Erlang runs it in constant stack space.
- Python doesn't do tail-call optimisation; use a loop.
- The tail-recursive version reuses one stack frame, so a million steps do not overflow.

## Common mistake

Assuming every language optimises tail calls. Python and most mainstream languages do not.

## Don't confuse with

Plain recursion, where work remains after the call returns (like `n * factorial(n-1)`), so the frame can't be dropped.

## Say it at work

- Is that a real tail call?
- Rewrite it with an accumulator to make it a tail call.
