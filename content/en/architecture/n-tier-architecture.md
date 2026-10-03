---
id: n-tier-architecture
category: architecture
level: beginner
related: [separation-of-concerns, monolith-vs-microservices]
term: "N-tier Architecture"
pronunciation: "en-tyer AR-ki-tek-chur"
---

## Definition

N-tier architecture is a software design pattern that divides an application into logical layers, such as presentation, business logic, and data storage, with each layer running on separate infrastructure or managed independently.

## Where you hear it

- In system design interviews
- During backend architecture discussions
- When scaling enterprise applications

## Examples

- The team uses an N-tier architecture to separate the user interface from the core business logic and database.
- In our N-tier setup, each layer communicates only with the layer immediately below it.

## Common mistake

Confusing tiers with layers, where "layers" refer to logical code separation, while "tiers" mean the physical separation of those layers across different servers or machines.

## Don't confuse with

N-tier architecture is often confused with microservices; while both involve separation, N-tier focuses on organizing an application into distinct functional layers, whereas microservices involve breaking the entire system into small, independently deployable services.

## Say it at work

- We should consider moving to an N-tier architecture if we want to scale our database layer independently from the application server.
- The proposed N-tier architecture ensures that the presentation layer remains decoupled from the data access logic.
