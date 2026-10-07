---
id: context-switch
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [thread, process, starvation]
aliases: ["time slice", "preemption", "preemptive scheduling"]
term: "Context Switch"
pronunciation: "KON-tekst SWICH"
keywords: ["cpu switches to another task", "save and restore state", "time slice", "scheduler decides", "overhead of many threads", "preemption", "المعالج ينتقل إلى مهمة أخرى", "حفظ الحالة واستعادتها", "شريحة الوقت", "المجدول يقرر", "كلفة الخيوط الكثيرة", "المقاطعة"]
---

## Definition

A context switch is when the CPU stops running one process or thread and starts another. The operating system saves the first one's state and loads the second's, which takes a little time.

## Where you hear it

In OS courses, performance profiling (high context-switch counts) and discussions on threads versus async.

## Examples

- Thousands of threads cause heavy context switching.
- Each task gets a short time slice before being switched out.

## Common mistake

Creating far more threads than cores. The CPU then spends more time switching than working.

## Don't confuse with

A function call, which just jumps within the same thread and costs almost nothing.

## Say it at work

- The context-switch rate is very high.
- Use a pool sized to the number of cores.
