---
id: interface
category: programming
level: intermediate
related: [class, inheritance]
term: "Interface"
pronunciation: "IN-ter-fays"
---
## Definition

A contract that lists what methods or properties something must provide, without saying how they work.

## Where you hear it

TypeScript, Java, and discussions about writing code that is easy to swap and test.

## Examples

- Both payment providers implement the same `PaymentGateway` interface.
- Code against the interface, not the implementation.

## Common mistake

Confusing it with UI. In programming, "interface" often has nothing to do with screens.

## Don't confuse with

An interface is a contract that defines what methods must exist, while an abstract class can provide actual implementation code and shared state for subclasses.

## Say it at work

- Let us define a clean interface for this service so we can easily swap the database later.
- Please update the repository layer to depend on the new interface rather than the concrete class.
