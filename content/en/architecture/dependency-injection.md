---
id: dependency-injection
category: architecture
level: intermediate
related: [unit-test, mocking, middleware]
term: "Dependency Injection"
pronunciation: "dih-PEN-den-see in-JEK-shun"
keywords: ["pass objects from outside","avoid new keyword inside","make code easier to test","decouple classes and services","di pattern for architecture","injecting services into components","dependency injection pattern","how to mock dependencies","inversion of control pattern","provide dependencies to classes","تمرير الكائنات من الخارج","تجنب استخدام كلمة new","جعل الكود قابلا للاختبار","فصل الخدمات عن الفئات","نمط حقن التبعيات","تزويد المكونات بالخدمات","ديبندنسي إنجكشن","طريقة حقن الخدمات","هيكلة الكود المعتمد","تسهيل عمل اختبارات الوحدة"]
---
## Definition

A class receives the things it needs (database, mailer) from outside instead of creating them itself, so they are easy to replace in tests.

## Where you hear it

NestJS, Spring, Angular, and testing discussions.

## Examples

- Thanks to dependency injection, we replaced the real mailer with a fake in tests.
- Inject the repository instead of creating it with `new`.

## Common mistake

Creating dependencies with `new` inside the class. Then you cannot replace them for testing.

## Don't confuse with

Dependency injection is often confused with the service locator pattern, but while dependency injection passes required objects from the outside, a service locator lets objects pull dependencies themselves.

## Say it at work

- Let's use dependency injection for the payment service so we can mock it easily in our unit tests.
- Please update this component to receive its configuration via dependency injection rather than importing the global config directly.
