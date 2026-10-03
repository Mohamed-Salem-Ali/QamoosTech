---
id: decoupling
category: architecture
level: intermediate
related: [separation-of-concerns, monolith-vs-microservices, message-queue]
term: "Decoupling"
pronunciation: "dee-KUP-ling"
---

## Definition

Decoupling is the architectural practice of reducing dependencies between software components. It allows parts of a system to function and evolve independently without needing to know the internal details of other parts.

## Where you hear it

In system design discussions, architectural reviews, and when planning migrations from monolithic systems to microservices.

## Examples

- We are decoupling the payment service from the order processing service using a message queue.
- Decoupling the frontend from the backend allows teams to deploy updates independently.

## Common mistake

Engineers often think decoupling means removing all connections between components, but it actually means managing those connections so they are loose and flexible rather than tightly coupled.
