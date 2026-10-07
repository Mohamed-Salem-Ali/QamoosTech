---
id: unix-signal
category: devops
subcategory: command-line
level: intermediate
related: [process, zombie-process, exit-code]
aliases: ["sigterm", "sigkill", "sigint", "kill -9", "graceful shutdown"]
term: "Unix Signal"
pronunciation: "YOO-niks SIG-nul"
keywords: ["sigterm sigkill sigint", "ctrl c", "ask a process to stop", "graceful shutdown", "kill command", "kubernetes stop signal", "الإشارات SIGTERM وSIGKILL وSIGINT", "الاختصار Ctrl C", "طلب إيقاف عملية", "إيقاف سلس", "الأمر kill", "إشارة الإيقاف في Kubernetes"]
---

## Definition

A Unix signal is a short message the operating system sends to a process. `SIGTERM` politely asks it to stop (it can clean up), `SIGINT` is Ctrl+C, and `SIGKILL` ends it immediately and can't be caught.

## Where you hear it

In `kill` commands, Docker and Kubernetes shutdown behaviour (SIGTERM then SIGKILL) and graceful-shutdown code.

## Examples

- Handle SIGTERM so the app finishes in-flight requests before exiting.
- Kubernetes sends SIGTERM, waits 30 seconds, then SIGKILL.

## Common mistake

Using `kill -9` first. It gives the program no chance to save data or release locks; try SIGTERM first.

## Don't confuse with

An exit code, which a process returns after it ends. A signal is sent to a running process.

## Say it at work

- Does the app handle SIGTERM?
- Exit code 137 means it was killed by SIGKILL.
