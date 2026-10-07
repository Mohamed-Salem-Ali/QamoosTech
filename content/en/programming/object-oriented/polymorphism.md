---
id: polymorphism
category: programming
subcategory: object-oriented
level: intermediate
related: [inheritance, interface, duck-typing]
tags: [python, typescript]
aliases: ["method overriding"]
term: "Polymorphism"
pronunciation: "pol-ee-MOR-fiz-um"
keywords: ["same method different behavior", "override a method in subclass", "call method without knowing the class", "objects respond differently to same call", "oop four pillars", "interface implementations", "animals speak example", "avoid if else on type", "الدالة نفسها بسلوك مختلف", "إعادة تعريف دالة في الصنف الفرعي", "استدعاء دالة دون معرفة الصنف", "كائنات تستجيب بشكل مختلف للاستدعاء نفسه", "أعمدة البرمجة كائنية التوجه الأربعة", "تنفيذات الواجهة", "مثال الحيوانات وأصواتها", "تجنب if else على النوع"]
---

## Definition

Polymorphism means different classes can respond to the same method call in their own way, so code can work with them without knowing their exact type.

## Where you hear it

In object-oriented design discussions, interviews about the pillars of OOP, and code reviews that replace long `if` chains.

## Examples

- Each shape implements `area()`, so the report just calls it on every shape.
- Thanks to polymorphism, adding a new payment type needs no change to the checkout code.

## Common mistake

Using type checks like `if isinstance(...)` everywhere instead of letting each class carry its own behaviour.

## Don't confuse with

Inheritance, which is one way to get polymorphism by sharing a parent class. Polymorphism is the behaviour; inheritance is a tool.

## Say it at work

- Let's use polymorphism here instead of a long if-else on the type.
- Each handler overrides `run()`, so the loop doesn't care which one it has.
