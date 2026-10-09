---
id: transactional-outbox
category: architecture
subcategory: patterns
level: intermediate
related: [message-queue, event-driven, transaction]
aliases: ["outbox pattern", "outbox table", "dual write"]
term: "Transactional Outbox"
pronunciation: "tran-ZAK-shun-ul OWT-box"
keywords: ["save event in same transaction", "reliable event publishing", "outbox table", "relay publishes events", "avoid dual write", "never lose a message", "حفظ الحدث في المعاملة نفسها", "نشر موثوق للأحداث", "جدول صندوق الإرسال", "ناقل ينشر الأحداث", "تجنب الكتابة المزدوجة", "لا تفقد رسالة أبداً"]
---

## Definition

The transactional outbox pattern saves an event in an "outbox" table in the same database transaction as the business change, and a separate process later publishes it to the message broker. It avoids writing to two systems at once.

## Where you hear it

In microservice and event-driven designs, Kafka or RabbitMQ publishing, and "the DB saved but the event was lost" bugs.

## Examples

- We insert the order and its OrderCreated event in one transaction.
- A relay reads the outbox table and publishes each row.
- The order and its event are written in one transaction, so no event is lost.

## Common mistake

Saving to the database and then publishing to the queue as two steps. A crash between them loses the event.

## Don't confuse with

A dead-letter queue, which holds messages that failed to process. The outbox is about reliably sending them in the first place.

## Say it at work

- Use the outbox pattern; never dual-write.
- Consumers must handle duplicates because delivery is at-least-once.
