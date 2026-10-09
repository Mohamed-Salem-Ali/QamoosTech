---
id: refactoring
category: programming
subcategory: code-quality
level: intermediate
related: [tech-debt, unit-test, code-smell, tdd]
term: "Refactoring"
pronunciation: "ree-FAK-ter-ing"
keywords: ["improve code structure","clean up messy code","make code easier to read","restructuring code without changing behavior","code cleanup process","refactor code","improving software design","reorganizing existing code","refactoring techniques","optimize code readability","تحسين بنية الكود","تنظيف الشيفرة البرمجية","إعادة تنظيم الكود","تحسين قراءة الكود","ريفاكتورينج","تعديل هيكلية البرنامج","تطوير الكود دون تغيير الوظيفة","إعادة صياغة الشيفرة","تحسين جودة الكود المصدري","تنظيم الدوال المعقدة"]
---
## Definition

Improving the structure of code without changing what it does, so it is easier to read and change.

## Where you hear it

Code reviews, sprint planning, and technical-debt discussions.

## Examples

- Let's refactor this module before adding new features.
- The tests passed before and after the refactoring.
- We refactored the billing module into smaller functions, and no behaviour changed.

## Common mistake

Refactoring without tests. If you cannot prove the behavior is unchanged, you are just rewriting.

## Don't confuse with

Refactoring changes the internal structure without altering external behavior, while rewriting discards the existing code to build it again from scratch.

## Say it at work

- I will spend the afternoon refactoring this messy function to make it easier to read.
- Please ensure that all unit tests pass after completing the refactoring for this module.
