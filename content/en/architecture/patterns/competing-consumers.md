---
id: competing-consumers
category: architecture
subcategory: patterns
level: intermediate
related: [message-queue, consumer-group, horizontal-scaling]
aliases: ["worker pool", "work queue"]
term: "Competing Consumers"
pronunciation: "kum-PEE-ting kun-SOO-merz"
keywords: ["many workers one queue", "each message handled once", "scale workers up", "parallel processing of jobs", "work queue", "share the load", "عمال كثيرون وطابور واحد", "كل رسالة تُعالج مرة", "زيادة العمال", "معالجة المهام بالتوازي", "طابور العمل", "تقاسم الحمل"]
---

## Definition

Competing consumers means several workers read from the same queue, and each message goes to only one of them, so the work is processed in parallel and the system scales by adding workers.

## Where you hear it

In job queues (Celery, SQS, RabbitMQ), background processing and scaling discussions.

## Examples

- Start five workers; they compete for emails in the queue.
- The queue is growing, so add more consumers.
- Three workers compete for the same queue, so each email is sent only once.

## Common mistake

Expecting message order to be kept. With many consumers, messages finish in any order.

## Don't confuse with

Pub/sub, where every subscriber gets its own copy of each message. Here each message goes to one consumer.

## Say it at work

- Scale the competing consumers on queue depth.
- Make the handler idempotent; messages may repeat.
