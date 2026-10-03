---
id: duck-typing
category: programming
level: intermediate
related: [object, pythonic]
term: "Duck Typing"
pronunciation: "DUHK TY-ping"
---

## Definition

Duck typing is a concept in dynamic programming languages where the type or class of an object is less important than the methods it defines. If an object behaves like a specific type, it is treated as that type, regardless of its actual class hierarchy.

## Where you hear it

In code reviews, discussions about dynamic language design, or when explaining why an interface is not strictly required in languages like Python.

## Examples

- Since the object has a `draw()` method, we can pass it to the function without checking its class.
- Python uses duck typing to allow different objects to be used interchangeably as long as they support the expected operations.

## Common mistake

Thinking that duck typing means there is no type system at all; it just means the type is checked at runtime based on capabilities rather than explicit inheritance.

## Don't confuse with

Duck typing is often confused with structural typing; while duck typing checks for methods at runtime, structural typing enforces these requirements statically during compilation.

## Say it at work

- We can simplify this function by using duck typing instead of forcing a specific class inheritance.
- The current implementation relies on duck typing, so please ensure the passed object implements the required interface methods.
