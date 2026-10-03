---
id: dead-letter-queue
category: architecture
level: intermediate
related: [message-queue]
term: "Dead Letter Queue (DLQ)"
pronunciation: "DED LET-er kyoo"
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
