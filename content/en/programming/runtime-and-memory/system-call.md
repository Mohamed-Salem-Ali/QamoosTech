---
id: system-call
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [process, context-switch, virtual-memory]
aliases: ["syscall", "kernel call"]
term: "System Call"
pronunciation: "SIS-tum KAWL"
keywords: ["ask the operating system", "read write open a file", "kernel does the work", "user space to kernel space", "syscall", "strace", "طلب من نظام التشغيل", "قراءة وكتابة وفتح ملف", "النواة تقوم بالعمل", "من فضاء المستخدم إلى فضاء النواة", "اختصار syscall", "أداة strace"]
---

## Definition

A system call is how a program asks the operating system kernel to do something it can't do itself, such as reading a file, opening a network connection or starting a process.

## Where you hear it

In OS courses, performance tuning (`strace`), container security (seccomp) and low-level debugging.

## Examples

- `open()` in Python ends up as an `open` system call.
- Too many small writes mean too many system calls.

## Common mistake

Forgetting that every system call has a cost. Batching reads and writes is often much faster.

## Don't confuse with

A normal function call, which stays inside your program and is cheap.

## Say it at work

- Trace the syscalls with strace.
- Buffer the output to cut down on system calls.
