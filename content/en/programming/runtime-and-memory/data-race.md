---
id: data-race
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [race-condition, mutex, thread]
aliases: ["data races"]
term: "Data Race"
pronunciation: "DAY-tuh RAYS"
keywords: ["two threads write same variable", "no lock", "unsynchronised access", "undefined behaviour", "race detector", "خيطان يكتبان المتغير نفسه", "بلا قفل", "وصول غير متزامن", "سلوك غير معرّف", "كاشف السباق", "تحديث ضائع"]
---

## Definition

A data race happens when two threads access the same memory at the same time, at least one of them writes, and nothing orders the accesses. The result is unpredictable.

## Where you hear it

In Go (`go test -race`), C++ and Java concurrency discussions, and bugs that vanish when you add a print.

## Examples

- Two goroutines incrementing the same counter without a lock is a data race.
- The race detector flagged line 42.
- The counter lost updates because two goroutines wrote to it without a lock.

## Common mistake

Thinking `counter += 1` is atomic. It reads, adds and writes in separate steps that threads can interleave.

## Don't confuse with

A race condition, the broader bug where timing changes the outcome. A data race is the specific memory-access kind.

## Say it at work

- Run the tests with the race detector on.
- Protect the shared map with a mutex.
