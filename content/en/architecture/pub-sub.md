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
