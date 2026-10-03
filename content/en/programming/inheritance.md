---
id: inheritance
category: programming
level: intermediate
related: [class, interface]
term: "Inheritance"
pronunciation: "in-HAIR-ih-tans"
---
## Definition

When a class reuses the properties and methods of another class and can add or change some of them.

## Where you hear it

Object-oriented design and interviews ("composition over inheritance").

## Examples

- `AdminUser` inherits from `User`.
- Deep inheritance chains are hard to maintain.

## Common mistake

Using inheritance just to share code. If the relationship is not "is a", prefer composition.

## Don't confuse with

Inheritance defines an "is-a" relationship where a subclass reuses parent behavior, while composition defines a "has-a" relationship by combining independent objects.

## Say it at work

- Let us use inheritance here so that the admin class can reuse the common user methods.
- Please refactor this deeply nested inheritance tree into smaller components to improve maintainability.
