---
id: backpressure
category: architecture
subcategory: reliability
level: intermediate
related: [message-queue, rate-limiting, graceful-degradation]
aliases: ["flow control", "load shedding"]
term: "Backpressure"
pronunciation: "BAK-presh-er"
keywords: ["slow down the producer", "queue full signal", "consumer cannot keep up", "bounded queue", "reject instead of crash", "flow control", "إبطاء المنتج", "إشارة امتلاء الطابور", "المستهلك لا يلحق", "طابور محدود", "الرفض بدل الانهيار", "التحكم بالتدفق"]
---

## Definition

Backpressure is a signal that tells a fast producer to slow down because the consumer or queue cannot keep up, instead of letting work pile up until something breaks.

## Where you hear it

In streaming and queue systems (Kafka, Node streams, Go channels), API design and overload incidents.

## Examples

- The queue is full, so the API returns 429 to apply backpressure.
- Without backpressure the worker ran out of memory.

## Common mistake

Using an unbounded queue. It hides the problem until memory runs out. Bound it and push back.

## Don't confuse with

Rate limiting, which caps how much each client may send. Backpressure reacts to how loaded the receiver is.

## Say it at work

- We need backpressure between the API and the workers.
- Shed load when the queue is above 80%.
