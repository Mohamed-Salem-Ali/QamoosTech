---
id: interface
category: programming
subcategory: object-oriented
level: intermediate
related: [class, inheritance, abstract-class, abstraction]
term: "Interface"
pronunciation: "IN-ter-fays"
keywords: ["define a contract for methods","abstract method requirements","programming interface definition","how to decouple code components","enforce structure on classes","java interface vs abstract class","typescript interface usage","code against an interface","define required class properties","software design contract pattern","inter face programming term","تحديد عقد للبرمجة","تعريف الدوال المطلوبة","الفرق بين الواجهة والكلاس","كيفية فصل الكود برمجيا","تطبيق مبدأ الواجهات","واجهة برمجية للعقود","إنترفيس في البرمجة","فرض هيكلية على الفئات","تعريف خصائص الكلاس","استخدام الواجهات في تايب سكريبت","واجهة تنفيذ الدوال"]
---
## Definition

A contract that lists what methods or properties something must provide, without saying how they work.

## Where you hear it

TypeScript, Java, and discussions about writing code that is easy to swap and test.

## Examples

- Both payment providers implement the same `PaymentGateway` interface.
- Code against the interface, not the implementation.

## Common mistake

Confusing it with UI. In programming, "interface" often has nothing to do with screens.

## Don't confuse with

An interface is a contract that defines what methods must exist, while an abstract class can provide actual implementation code and shared state for subclasses.

## Say it at work

- Let us define a clean interface for this service so we can easily swap the database later.
- Please update the repository layer to depend on the new interface rather than the concrete class.
