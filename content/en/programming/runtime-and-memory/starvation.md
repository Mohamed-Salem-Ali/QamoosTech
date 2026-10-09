---
id: starvation
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [deadlock, mutex, context-switch]
aliases: ["priority inversion", "aging"]
term: "Starvation"
pronunciation: "star-VAY-shun"
keywords: ["task never gets its turn", "low priority always waits", "unfair scheduling", "lock never acquired", "priority inversion", "work is ignored forever", "مهمة لا يأتي دورها", "الأقل أولوية تنتظر دائماً", "جدولة غير عادلة", "القفل لا يُحصل عليه", "انعكاس الأولوية", "عمل يُتجاهل للأبد"]
---

## Definition

Starvation happens when a process or thread never gets the resource it needs, such as CPU time or a lock, because others keep getting it first.

## Where you hear it

In OS and concurrency courses, job queue priority designs and incidents where "one job never runs".

## Examples

- Low-priority jobs never run while high-priority ones keep arriving; that's starvation.
- Aging raises a waiting task's priority over time.
- Low-priority emails were starved for hours because high-priority jobs kept arriving.

## Common mistake

Confusing it with deadlock. In starvation others are making progress; only one task is ignored.

## Don't confuse with

A deadlock, where tasks are stuck waiting on each other and nobody progresses.

## Say it at work

- Add priority aging to avoid starvation.
- Why does this job never get picked up?
