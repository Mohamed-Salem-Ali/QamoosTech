---
id: structural-typing
category: programming
subcategory: types-and-typing
level: intermediate
related: [duck-typing, interface, type-hint]
tags: [python, typescript]
aliases: ["protocol", "structural subtyping"]
term: "Structural Typing"
pronunciation: "STRUK-cher-ul TY-ping"
keywords: ["type by shape not name", "protocol in python", "typed duck typing", "interface without inheritance", "typescript structural types", "has the right methods", "النوع بالشكل لا بالاسم", "Protocol في بايثون", "duck typing مع أنواع", "واجهة دون وراثة", "الأنواع البنيوية في TypeScript", "يملك الدوال المطلوبة"]
---

## Definition

Structural typing decides whether an object fits a type by the methods and fields it has, not by the class it inherits from. In Python this is a `Protocol`.

## Where you hear it

In TypeScript, in Python typing discussions, and when designing code that should accept any object with the right methods.

## Examples

- Any class with a `due()` method satisfies the protocol, even if it never mentions it.
- TypeScript types are structural, so matching shapes are interchangeable.

## Common mistake

Confusing it with inheritance. With structural typing a class does not need to extend anything to qualify.

## Don't confuse with

Nominal typing, where a class must declare that it implements an interface. Java works this way.

## Say it at work

- Define a protocol instead of forcing everyone to inherit from a base class.
- It's structural: anything with these two methods works.
