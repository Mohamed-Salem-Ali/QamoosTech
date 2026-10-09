---
id: duck-typing
category: programming
subcategory: object-oriented
level: intermediate
related: [object, pythonic, structural-typing]
term: "Duck Typing"
pronunciation: "DUHK TY-ping"
keywords: ["duck typing","dynamic type checking by behavior","if it walks like a duck","types based on methods not inheritance","runtime method checking in python","using objects without checking class","dynamic language typing concept","duck typing vs structural typing","دك تايبينج","التحقق من نوع الكائن حسب سلوكه","الأنواع بناء على الدوال لا الوراثة","مفهوم الأنواع في لغات البرمجة الديناميكية","استخدام الكائنات بدون فحص الصنف","التحقق من الدوال أثناء وقت التشغيل","التعامل مع الكائنات حسب قدراتها","برمجة بايثون بدون واجهات صارمة"]
---

## Definition

Duck typing is a concept in dynamic programming languages where the type or class of an object is less important than the methods it defines. If an object behaves like a specific type, it is treated as that type, regardless of its actual class hierarchy.

## Where you hear it

In code reviews, discussions about dynamic language design, or when explaining why an interface is not strictly required in languages like Python.

## Examples

- Since the object has a `draw()` method, we can pass it to the function without checking its class.
- Python uses duck typing to allow different objects to be used interchangeably as long as they support the expected operations.
- Any object with a read() method works here, because the function only calls read().

## Common mistake

Thinking that duck typing means there is no type system at all; it just means the type is checked at runtime based on capabilities rather than explicit inheritance.

## Don't confuse with

Duck typing is often confused with structural typing; while duck typing checks for methods at runtime, structural typing enforces these requirements statically during compilation.

## Say it at work

- We can simplify this function by using duck typing instead of forcing a specific class inheritance.
- The current implementation relies on duck typing, so please ensure the passed object implements the required interface methods.
