---
id: process
category: devops
subcategory: command-line
level: beginner
related: [thread, system-call, unix-signal]
aliases: ["pid", "child process", "process id", "subprocess"]
term: "Process"
pronunciation: "PROH-ses"
keywords: ["running program", "pid", "has its own memory", "ps and top", "start and kill", "parent and child", "برنامج قيد التشغيل", "رقم المعرّف PID", "لها ذاكرتها الخاصة", "الأمران ps وtop", "التشغيل والإنهاء", "الأب والابن"]
---

## Definition

A process is a running instance of a program. It has its own memory, an id (PID), and one or more threads.

## Where you hear it

In terminals (`ps`, `top`, `kill`), server administration, Docker discussions and OS courses.

## Examples

- Find the process using port 8000 and kill it.
- The web server runs as several worker processes.

## Common mistake

Saying "program" and "process" as the same thing. One program can run as many processes at once.

## Don't confuse with

A thread, which lives inside a process and shares its memory.

## Say it at work

- What's the PID?
- The process is using 90% CPU.
