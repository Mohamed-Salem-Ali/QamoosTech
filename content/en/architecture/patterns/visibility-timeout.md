---
id: visibility-timeout
category: architecture
subcategory: patterns
level: intermediate
related: [message-queue, at-least-once-delivery, dead-letter-queue]
aliases: ["sqs visibility timeout"]
term: "Visibility Timeout"
pronunciation: "viz-ih-BIL-ih-tee TYM-owt"
keywords: ["message hidden while processing", "sqs", "reappears if not deleted", "worker crashed", "set longer than processing time", "avoid double processing", "الرسالة مخفية أثناء المعالجة", "خدمة SQS", "تعود إن لم تُحذف", "العامل انهار", "اضبطها أطول من وقت المعالجة", "تجنب المعالجة المزدوجة"]
---

## Definition

In queues such as AWS SQS, the visibility timeout is how long a message stays hidden from other consumers after one worker takes it. If the worker doesn't delete the message in time, it becomes visible again and is retried.

## Where you hear it

In SQS and other queue settings, and incidents where messages are processed twice.

## Examples

- The job takes 90 seconds but the timeout is 30, so it runs twice.
- Extend the visibility timeout for long jobs.
- The queue hid the message for 60 seconds while the worker processed it.

## Common mistake

Setting it shorter than the job. The message reappears while the first worker is still busy.

## Don't confuse with

A dead-letter queue, which collects messages that keep failing after several tries.

## Say it at work

- Raise the visibility timeout above the max job time.
- Delete the message only after success.
