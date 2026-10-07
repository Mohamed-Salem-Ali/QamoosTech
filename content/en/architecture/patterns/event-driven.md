---
id: event-driven
category: architecture
subcategory: patterns
level: intermediate
related: [message-queue, immutable]
term: "Event-driven"
pronunciation: "ih-VENT DRIV-en"
keywords: ["systems that react to events","loosely coupled microservices design","architecture based on triggers","asynchronous state change pattern","event driven architecture","eda pattern","reactive system design","services reacting to actions","decoupled backend architecture","تصميم مبني على الأحداث","معمارية مدفوعة بالأحداث","الأنظمة المتفاعلة مع الأحداث","ربط الخدمات عبر الأحداث","إيفنت دريفن","تصميم الخدمات غير المترابطة","معمارية الميكروسيرفس المتفاعلة","التصميم غير المتزامن للأحداث"]
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

## Don't confuse with

Event-driven architecture reacts to state changes asynchronously, while a message-driven architecture focuses on routing specific messages to specific recipients.

## Say it at work

- Let's make sure our new microservice is event-driven so it doesn't block the checkout flow.
- We should adopt an event-driven approach for this workflow to improve service decoupling.
