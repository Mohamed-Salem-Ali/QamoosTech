---
id: livelock
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [deadlock, starvation]
term: "Livelock"
pronunciation: "LIVE-lok"
keywords: ["threads keep reacting but make no progress", "two processes keep backing off from each other", "the program runs but never finishes", "polite retry loop with no progress", "tasks yield to each other forever", "تفاعل متبادل دون تقدم", "عمليتان تتراجعان لبعضهما باستمرار", "البرنامج يعمل ولا يصل إلى نتيجة", "خيوط تتنازل لبعضها إلى ما لا نهاية"]
---

## Definition

A livelock happens when two or more threads or processes keep reacting to each other and changing state, but none of them makes progress. Unlike a deadlock, nothing is blocked; they just keep yielding.

## Where you hear it

In concurrency bugs, when a program is running but nothing happens, and in retry designs where clients back off in step with each other.

## Examples

- Two processes keep backing off and retrying, so neither ever takes the lock.
- The CPU is at 100 percent, yet no request finishes. That looks like a livelock.
- Random jitter in the retry delay helps break a livelock.

## Common mistake

Calling every stuck program a deadlock. If the threads are running and reacting, it is a livelock, and the fix is different: add randomness or a clear tie-breaker.

## Don't confuse with

A deadlock is a standstill: threads wait on each other and none can move. A livelock is motion without progress: threads keep moving but never finish. Starvation means one thread never gets its turn while the others do.

## Say it at work

- It is not a deadlock, because the threads keep retrying each other.
- Can we add a random backoff so they stop colliding?
