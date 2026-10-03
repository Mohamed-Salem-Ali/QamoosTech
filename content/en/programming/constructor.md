---
id: constructor
category: programming
level: beginner
related: [class, object]
term: "Constructor"
pronunciation: "kun-STRUK-ter"
---

## Definition

A special method in object-oriented programming that runs automatically when a new class instance is created, usually used to set initial property values.

## Where you hear it

In object-oriented programming discussions, when talking about class initialization, or during code reviews.

## Examples

- The `User` class has a constructor that accepts an email and password.
- Make sure to call the parent constructor using `super()` inside your subclass.

## Common mistake

Thinking a constructor returns a value, whereas its purpose is to initialize the object rather than return it.

## Don't confuse with

Constructor vs. Method: A constructor is specifically called only once during object instantiation to initialize state, whereas a method can be called multiple times throughout the object's lifecycle to perform various operations.

## Say it at work

- I need to update the constructor to accept the new configuration object as a parameter.
- Please ensure that the constructor correctly initializes all required fields to avoid null pointer exceptions.
