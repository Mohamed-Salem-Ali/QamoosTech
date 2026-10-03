---
id: encapsulation
category: programming
level: intermediate
related: [class, object, inheritance, separation-of-concerns]
term: "Encapsulation"
pronunciation: "en-KAP-sue-lay-shun"
translation: "التغليف"
---

## Definition

Encapsulation is a core concept in object-oriented programming that bundles data and the methods that operate on that data within a single unit, restricting direct access from the outside. It protects the internal state of an object and only exposes a controlled interface through methods.

## Where you hear it

- In code reviews when discussing data hiding and visibility modifiers.
- During system design discussions about keeping internal class details private.
- In software architecture interviews focusing on object-oriented principles.

## Examples

- The bank account class hides the raw balance variable and provides a deposit method to safely update the funds.
- We use private fields in the user service to prevent other modules from modifying state directly.

## Common mistake

Thinking encapsulation is just about data hiding with private variables, when it is actually about combining data and behavior together to protect object invariants.
