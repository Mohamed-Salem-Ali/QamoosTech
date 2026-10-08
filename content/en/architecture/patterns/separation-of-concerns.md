---
id: separation-of-concerns
category: architecture
subcategory: patterns
level: intermediate
related: [design-pattern, component, mtv, under-the-hood]
term: "Separation of Concerns"
pronunciation: "sep-uh-RAY-shun uv kun-SERNZ"
keywords: ["organize code into distinct parts","keep business logic separate","avoid mixing ui and data","modularize software architecture","decouple code components","clean code structure principles","stop mixing concerns in modules","divide system into layers","soc software design","improve code maintainability","تنظيم الكود في طبقات","فصل منطق العمل عن العرض","تقسيم المهام في النظام","منع تداخل وظائف الكود","هيكلة البرمجيات بشكل نظيف","مبدأ فصل الاهتمامات","تحسين صيانة الشيفرة البرمجية","تقسيم الكود إلى وحدات","سيباريشن أوف كونسيرنز","توزيع المسؤوليات في النظام"]
---
## Definition

Organizing code so each part has one clear job, for example data access, business rules, and display are kept apart.

## Where you hear it

Code reviews and architecture discussions.

## Examples

- This controller also sends emails. Let's separate the concerns.
- Good separation of concerns makes testing easier.

## Common mistake

Splitting code into so many tiny layers that nobody can follow it. Separate only what really changes for different reasons.

## Don't confuse with

Separation of Concerns is often mixed up with Single Responsibility Principle, but while SoC is a general architectural design principle for dividing a system into distinct features, SRP is a specific object-oriented principle stating that a class should have only one reason to change.

## Say it at work

- We need better separation of concerns here so that business logic isn't mixed directly with the UI components.
- Please refactor this module to ensure proper separation of concerns before we merge the pull request.
