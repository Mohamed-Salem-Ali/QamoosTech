---
id: exactly-once-delivery
category: architecture
subcategory: patterns
level: intermediate
related: [at-least-once-delivery, idempotency-key, message-queue]
aliases: ["exactly once", "effectively once", "at-most-once"]
term: "Exactly-Once Delivery"
pronunciation: "ig-ZAKT-lee-WUNS dih-LIV-er-ee"
keywords: ["no loss no duplicates", "hard to guarantee", "dedupe on the consumer", "transactions in kafka", "effectively once", "idempotent processing", "بلا فقد ولا تكرار", "صعب الضمان", "إزالة التكرار عند المستهلك", "معاملات Kafka", "فعلياً مرة واحدة", "معالجة idempotent"]
---

## Definition

Exactly-once delivery means each message is processed one time, never lost and never duplicated. It is very hard across a network, so systems usually approximate it with at-least-once delivery plus idempotent processing.

## Where you hear it

In Kafka and queue design talks, payment and billing pipelines, and vendor claims about delivery guarantees.

## Examples

- The broker says exactly-once, but we still dedupe by message id.
- Aim for effectively-once: at-least-once plus idempotency.
- The payment worker uses an idempotency key, which makes its processing safe to repeat.

## Common mistake

Believing the label blindly. Guarantees often hold only inside one system, not across your database and the outside world.

## Don't confuse with

At-most-once, which may lose messages but never duplicates them.

## Say it at work

- Is that really exactly-once end to end?
- Dedupe on the consumer side to be safe.
