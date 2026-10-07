---
id: dead-letter-queue
category: architecture
subcategory: patterns
level: intermediate
related: [message-queue]
term: "Dead Letter Queue (DLQ)"
pronunciation: "DED LET-er kyoo"
keywords: ["failed message storage","handle unprocessable queue items","where do failed messages go","dlq meaning","message broker error handling","queue for failed tasks","storing rejected messages","debugging failed background jobs","dead letter exchange","retry limit exceeded queue","طابور الرسائل الفاشلة","مكان تخزين الرسائل المتعثرة","معالجة الرسائل التي لم تكتمل","طابور المهام التي فشلت","أين تذهب الرسائل التالفة","طابور الرسائل غير القابلة للمعالجة","طريقة التعامل مع الرسائل المرفوضة","تخزين الرسائل بعد فشل المحاولات","ديد لتر كيو","طابور الأخطاء في المراسلة"]
---

## Definition

A Dead Letter Queue (DLQ) is a holding area in a messaging system for messages that cannot be processed successfully after a set number of attempts.

## Where you hear it

In asynchronous architectures, event-driven systems, and message broker configurations.

## Examples

- The background worker moved the malformed JSON message to the DLQ after three failed retries.
- We set up an alert to notify the engineering team whenever a message lands in the payment service DLQ.

## Common mistake

Thinking a DLQ solves the processing error automatically, when it actually just stores the failed messages for later inspection and manual debugging.

## Don't confuse with

Dead Letter Queue vs. Retry Queue: A retry queue holds messages that are temporarily failing and will be reprocessed automatically, whereas a dead letter queue stores messages that have permanently failed and require manual intervention.

## Say it at work

- I noticed a spike in our DLQ, so we should probably investigate why these messages are failing.
- Please review the messages currently sitting in the DLQ to identify the root cause of the processing errors.
