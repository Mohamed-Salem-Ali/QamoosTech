---
id: generics
category: programming
subcategory: types-and-typing
level: intermediate
related: [type-hint, union-type, interface]
tags: [typescript, python]
aliases: ["generic", "generic type"]
term: "Generics"
pronunciation: "juh-NAIR-iks"
keywords: ["code that works for any type", "list of t", "keep type consistent", "typevar", "reusable typed container", "list<string> in java", "كود يعمل مع أي نوع", "قائمة من النوع T", "إبقاء النوع متسقاً", "TypeVar", "حاوية مكتوبة الأنواع قابلة لإعادة الاستخدام", "list<string> في Java"]
---

## Definition

Generics let one function or class work with many types while keeping them consistent, for example a list of numbers or a list of strings.

## Where you hear it

In TypeScript, Java and typed Python code, library documentation, and API design discussions.

## Examples

- A generic list keeps track of what kind of items it holds.
- The function is generic: it returns the same type it was given.

## Common mistake

Making everything generic. Use generics only when the same logic truly applies to many types.

## Don't confuse with

The `any` type, which turns checking off. A generic keeps the type information.

## Say it at work

- Let's make this container generic so it can hold any item type.
- The return type is generic, so the editor knows exactly what comes back.
