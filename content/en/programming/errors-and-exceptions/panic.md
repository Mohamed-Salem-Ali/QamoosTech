---
id: panic
category: programming
subcategory: errors-and-exceptions
level: intermediate
related: [exception, traceback, fail-fast]
aliases: ["runtime panic", "unrecoverable error"]
term: "Panic"
pronunciation: "PAN-ik"
keywords: ["program crashes on a bug", "unrecoverable error in go", "rust panic macro", "stop the program right away", "index out of range crash", "panic vs returning an error", "الانهيار الفوري في البرنامج", "توقف فوري بسبب خطأ برمجي", "انهيار لا يمكن استرداده", "الفرق بين panic والخطأ المُعاد", "خطأ يوقف المهمة الحالية", "إيقاف البرنامج فوراً"]
---

## Definition

A signal that the program has reached a state it cannot safely continue from. In Go and Rust, a panic stops the current task and unwinds it. Panics are for bugs and impossible states, not for expected failures such as a missing file.

## Where you hear it

In Go and Rust code, in crash logs that start with "panic:", and in reviews about when to return an error instead.

## Examples

- The program panics because the code indexed past the end of the slice.
- Return an error for a missing file; keep panic for real bugs in our own code.
- In Go, a panic in any goroutine crashes the whole program unless something recovers it.

## Common mistake

Using panic for ordinary failures such as bad user input. The caller cannot handle it cleanly, and one bad request can bring the service down.

## Don't confuse with

An exception in Python or Java is an expected error that callers are meant to catch. A panic signals a bug or a state the program cannot safely recover from, so normal code should not depend on catching it.

## Say it at work

- Bad input should return an error, not panic. Only a real bug should panic.
- Which goroutine recovers this panic, if any?
