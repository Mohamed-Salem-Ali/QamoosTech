---
id: page-fault
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [virtual-memory, system-call, context-switch]
aliases: ["major page fault", "minor page fault", "thrashing"]
term: "Page Fault"
pronunciation: "PAYJ fawlt"
keywords: ["page not in memory", "load from disk on demand", "major and minor page fault", "first touch of memory", "slow memory access", "thrashing", "الصفحة ليست في الذاكرة", "التحميل من القرص عند الطلب", "خطأ صفحة رئيسي وثانوي", "أول لمس للذاكرة", "وصول بطيء للذاكرة", "التخبّط"]
---

## Definition

A page fault happens when a program touches a memory page that isn't currently mapped in RAM. The operating system then loads it, from disk (a major fault) or by just mapping it (a minor fault), and the program continues.

## Where you hear it

In performance profiling, OS courses, and discussions about memory-mapped files and swapping.

## Examples

- Major page faults are slow because they read from disk.
- A burst of page faults means the working set doesn't fit in RAM.

## Common mistake

Treating every page fault as a bug. Minor faults are normal; only a flood of major faults signals trouble.

## Don't confuse with

A segmentation fault, which is a crash from touching memory the program has no right to access.

## Say it at work

- How many major page faults per second?
- The machine is thrashing.
