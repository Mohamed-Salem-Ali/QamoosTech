---
id: message-queue
category: architecture
level: intermediate
related: [event-driven, idempotency]
term: "Message Queue"
pronunciation: "MES-ij KYOO"
---
## Definition

A system that stores tasks or messages so another part of the app can process them later, one by one, outside the user's request.

## Where you hear it

Background jobs, emails, report generation, and RabbitMQ or SQS.

## Examples

- We send the report to a queue instead of generating it during the request.
- The queue has 5,000 waiting messages.

## Common mistake

Assuming each message is delivered exactly once. Messages can arrive twice, so handlers must be idempotent.

## Don't confuse with

A message queue distributes tasks to workers for processing, while a pub/sub system broadcasts every message to all active subscribers simultaneously.

## Say it at work

- Let's push these notifications to the message queue so they don't block the main API response.
- Please ensure the consumer handling this message queue can gracefully recover if the database goes down.
