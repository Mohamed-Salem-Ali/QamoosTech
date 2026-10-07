---
id: encapsulation
category: programming
subcategory: object-oriented
level: intermediate
related: [class, object, inheritance, separation-of-concerns]
term: "Encapsulation"
pronunciation: "en-KAP-sue-lay-shun"
keywords: ["hide internal class data","make variables private","restrict access to properties","bundle data and methods","protect object state integrity","oop visibility modifiers","getter and setter usage","prevent direct field access","data hiding principles","encapsulation definition","encapsulation in programming","مبدأ التغليف في البرمجة","إخفاء البيانات داخل الكلاس","تقييد الوصول للمتغيرات","دمج البيانات مع الدوال","حماية الحالة الداخلية للكائن","استخدام محددات الوصول","مفهوم التغليف البرمجي","منع التعديل المباشر للبيانات","الفرق بين التغليف والتجريد","كيفية تطبيق التغليف","مصطلح إنكابسولايشن"]
---

## Definition

Encapsulation is a core concept in object-oriented programming that bundles data and the methods that operate on that data within a single unit, restricting direct access from the outside. It protects the internal state of an object and only exposes a controlled interface through methods.

## Where you hear it

- In code reviews when discussing data hiding and visibility modifiers.
- During system design discussions about keeping internal class details private.
- In software architecture interviews focusing on object-oriented principles.

## Examples

- The bank account class hides the raw balance variable and provides a deposit method to safely update the funds.
- We use private fields in the user service to prevent other modules from modifying state directly.

## Common mistake

Thinking encapsulation is just about data hiding with private variables, when it is actually about combining data and behavior together to protect object invariants.

## Don't confuse with

Encapsulation is often confused with abstraction, but encapsulation is about bundling data and hiding implementation details, while abstraction is about hiding complexity and showing only the essential features.

## Say it at work

- Let's apply better encapsulation here by making these properties private and adding getter methods.
- Please ensure proper encapsulation of the state inside the new service class to prevent external tampering.
