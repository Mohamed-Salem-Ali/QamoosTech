---
id: class-method-vs-static-method
category: programming
subcategory: object-oriented
level: intermediate
related: [method, class, constructor]
tags: [python]
aliases: ["classmethod", "staticmethod", "class method", "static method"]
term: "Class Method vs Static Method"
pronunciation: "KLAS METH-ud vee-ess STAT-ik METH-ud"
keywords: ["@classmethod and @staticmethod", "alternative constructor", "method without self", "method that receives cls", "utility function inside class", "static method java", "‏@classmethod و @staticmethod", "منشئ بديل", "دالة بلا self", "دالة تستقبل cls", "دالة مساعدة داخل الصنف", "الدالة الساكنة في Java"]
---

## Definition

A class method receives the class itself and is often used as an alternative constructor. A static method receives neither the instance nor the class; it is just a function that lives inside the class.

## Where you hear it

In Python and Java class design, code reviews, and interviews comparing `@classmethod` with `@staticmethod`.

## Examples

- `Money.from_string("12.50 EGP")` is a class method that builds a Money object.
- The validation helper is a static method because it does not use the object.
- The class method reads cls to build the right subclass, while the static method only does a calculation.

## Common mistake

Making a method static when it should be a plain module function. If it needs neither the class nor the instance, ask whether it belongs in the class at all.

## Don't confuse with

An instance method, which receives `self` and works with one specific object.

## Say it at work

- Add a class method for creating it from a dictionary.
- That static method could just be a function in the module.
