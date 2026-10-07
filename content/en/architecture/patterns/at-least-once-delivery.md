---
id: at-least-once-delivery
category: architecture
subcategory: patterns
level: intermediate
related: [exactly-once-delivery, idempotency-key, retry-logic]
aliases: ["at least once"]
term: "At-Least-Once Delivery"
pronunciation: "at-LEEST-WUNS dih-LIV-er-ee"
keywords: ["never lost but maybe duplicated", "retry until acknowledged", "consumer must be idempotent", "default for most brokers", "ack after processing", "duplicate messages", "لا تضيع لكن قد تتكرر", "إعادة المحاولة حتى التأكيد", "يجب أن يكون المستهلك idempotent", "الافتراضي في أغلب الوسطاء", "التأكيد بعد المعالجة", "رسائل مكررة"]
---

## Definition

At-least-once delivery guarantees a message is delivered one or more times: it is never lost, but it may be delivered again if an acknowledgement is missed, so consumers must cope with duplicates.

## Where you hear it

In SQS, RabbitMQ and Kafka documentation, webhook delivery and retry designs.

## Examples

- SQS standard queues deliver at least once, so the handler must be idempotent.
- The consumer crashed before acking, so the message came again.

## Common mistake

Writing handlers that charge or email on every delivery. A repeat then charges or emails twice.

## Don't confuse with

Exactly-once, which promises no duplicates but is hard to achieve in practice.

## Say it at work

- Assume at-least-once and dedupe.
- Store processed message ids.
