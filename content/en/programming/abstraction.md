---
id: abstraction
category: programming
level: intermediate
related: [interface, design-pattern, separation-of-concerns]
term: "Abstraction"
pronunciation: "ab-STRAK-shun"
---

## Definition

Abstraction is the process of hiding complex implementation details and showing only the essential features of an object or system. It allows developers to interact with a simplified interface without needing to understand the underlying logic.

## Where you hear it

In architectural discussions, during code reviews, or when designing software components.

## Examples

- Using a library function to send an email is an abstraction over the complex SMTP protocol.
- An interface provides an abstraction that allows you to swap database implementations without changing your business logic.

## Common mistake

Thinking that abstraction means removing functionality; it actually means hiding how that functionality is achieved to reduce cognitive load.

## Don't confuse with

Abstraction is often confused with encapsulation, but abstraction focuses on hiding the implementation details from the user, while encapsulation focuses on bundling data and methods together to protect the internal state.

## Say it at work

- We need more abstraction in this service layer so we can easily swap out the payment provider later.
- Please improve the abstraction of these database calls to keep the business logic clean and decoupled.
