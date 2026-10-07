---
id: abstract-class
category: programming
subcategory: object-oriented
level: intermediate
related: [interface, inheritance, polymorphism]
tags: [python]
aliases: ["abstract base class", "abc"]
term: "Abstract Class"
pronunciation: "AB-strakt KLAS"
keywords: ["class you cannot instantiate", "base class with required methods", "abc module", "abstract method", "template for subclasses", "force subclasses to implement", "صنف لا يمكن إنشاء كائن منه", "صنف أساسي بدوال مطلوبة", "وحدة abc", "دالة مجرّدة", "قالب للأصناف الفرعية", "إلزام الأصناف الفرعية بالتنفيذ"]
---

## Definition

An abstract class is a base class that cannot be created directly. It defines methods that every subclass must implement.

## Where you hear it

In object-oriented design, Python's `abc` module, Java, and code reviews about shared behaviour.

## Examples

- The base `PaymentMethod` is abstract; each concrete class implements `charge()`.
- You cannot instantiate an abstract class.

## Common mistake

Creating an abstract base for one subclass. Wait until at least two real cases share behaviour.

## Don't confuse with

An interface, which lists methods only, with no shared code. An abstract class can include working code too.

## Say it at work

- Make the base class abstract so nobody instantiates it by mistake.
- Every subclass must override the abstract method.
