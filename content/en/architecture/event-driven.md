---
id: event-driven
category: architecture
level: intermediate
related: [message-queue, immutable]
term: "Event-driven"
pronunciation: "ih-VENT DRIV-en"
---
## Definition

A design where parts of the system react to events ("order created") instead of calling each other directly.

## Where you hear it

Modern backend architecture and cloud systems.

## Examples

- When an order is created, an event triggers the email and invoice services.
- An event-driven design keeps services loosely coupled.

## Common mistake

Calling it event-driven just because you use a queue. The flow must really be driven by events.
