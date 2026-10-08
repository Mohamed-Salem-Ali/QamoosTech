---
id: exit-code
category: devops
subcategory: command-line
level: beginner
related: [cli, standard-streams, ci-cd]
tags: [python]
aliases: ["exit status", "return code"]
term: "Exit Code"
pronunciation: "EG-zit kohd"
keywords: ["number returned to the shell", "0 means success", "non-zero means failure", "sys.exit", "ci fails on exit code", "status of a command", "رقم يعود إلى الطرفية", "الصفر يعني النجاح", "غير الصفر يعني الفشل", "دالة الخروج من البرنامج", "يفشل CI بسبب رمز الخروج", "حالة الأمر"]
---

## Definition

An exit code is the number a program returns to the shell when it finishes. `0` means success and any other number means some kind of failure.

## Where you hear it

In scripts (`&&` chains), CI pipelines that go red, and CLI tools that need to signal errors.

## Examples

- The tests failed, so the command exits with code 1 and CI stops.
- Call `sys.exit(2)` when the arguments are invalid.
- The deploy script exits with code 0 only when every health check passes.

## Common mistake

Printing an error message but still exiting with 0. Scripts and CI will think everything worked.

## Don't confuse with

The output text, which a human reads. The exit code is the machine-readable result.

## Say it at work

- Check the exit code before continuing.
- Why did it exit with 137?
