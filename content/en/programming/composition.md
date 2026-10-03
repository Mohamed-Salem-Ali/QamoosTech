---
id: composition
category: programming
level: intermediate
related: [inheritance, design-pattern, separation-of-concerns]
term: "Composition"
pronunciation: "kom-po-ZISH-un"
---

## Definition

A design principle where you build complex types or functions by combining smaller, simpler ones together rather than relying on deep inheritance hierarchies.

## Where you hear it

In code reviews, architecture discussions, and when talking about object-oriented or functional design.

## Examples

- Instead of using a deep class hierarchy, we used composition to add logging and caching to our service.
- React encourages component composition by letting you build large UIs from smaller, reusable parts.

## Common mistake

Thinking that composition only applies to classes or objects, when it works equally well with functions and modules.

## Don't confuse with

Composition vs. Inheritance: Composition builds complex objects by containing other objects, whereas inheritance creates a parent-child relationship where a subclass inherits behavior from a base class.

## Say it at work

- Let's use composition here so we can keep these modules decoupled and easier to test.
- I recommend refactoring this deep inheritance structure into composition to improve the flexibility of our codebase.
