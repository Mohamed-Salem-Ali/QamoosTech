---
id: pub-sub
category: architecture
level: intermediate
related: [event-driven, message-queue]
term: "Pub/Sub"
pronunciation: "PUB-SUB"
---

## Definition

A messaging pattern where senders (publishers) send messages to a topic without knowing who the receivers (subscribers) are. Subscribers express interest in specific topics and receive messages automatically when they are published.

## Where you hear it

In system architecture discussions, distributed systems design, and when choosing messaging infrastructure for microservices.

## Examples

- We use Pub/Sub to decouple our user service from the email notification system.
- The analytics engine subscribes to the click-stream topic to process user events in real-time.

## Common mistake

Assuming that Pub/Sub guarantees message delivery or order by default, as many implementations are asynchronous and do not track whether a specific subscriber successfully processed the message.

## Don't confuse with

Pub/Sub is often confused with a message queue, but while a queue typically delivers each message to a single consumer, Pub/Sub broadcasts messages to multiple subscribers simultaneously.

## Say it at work

- Can we use Pub/Sub here to broadcast updates to all connected microservices at once?
- Please ensure that the new event publisher is properly registered in the Pub/Sub topic before merging the pull request.
