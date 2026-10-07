---
id: stack-frame
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [call-stack, recursion, stack-overflow]
aliases: ["activation record", "call frame"]
term: "Stack Frame"
pronunciation: "STAK fraym"
keywords: ["one function call record", "local variables of a call", "return address", "created on call removed on return", "frames on the call stack", "debugger shows frames", "سجل استدعاء دالة واحد", "المتغيرات المحلية للاستدعاء", "عنوان العودة", "يُنشأ عند الاستدعاء ويُزال عند العودة", "إطارات في مكدس الاستدعاءات", "المصحح يعرض الإطارات"]
---

## Definition

A stack frame is the block of memory created on the call stack for one function call. It holds that call's arguments, local variables and the place to return to.

## Where you hear it

In debuggers and tracebacks (each line is a frame), recursion discussions and explanations of how functions run.

## Examples

- Each recursive call adds a new stack frame.
- In the debugger, select the frame to see its local variables.

## Common mistake

Thinking local variables are shared between calls. Each call gets its own frame and its own copies.

## Don't confuse with

The call stack, which is the whole pile of frames. A stack frame is one entry in it.

## Say it at work

- Which frame is this variable in?
- Walk up one frame to see the caller.
