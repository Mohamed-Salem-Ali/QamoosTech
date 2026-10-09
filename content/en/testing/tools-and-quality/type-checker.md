---
id: type-checker
category: testing
subcategory: tools-and-quality
level: intermediate
related: [linting, type-hint, quality-gate]
tags: [python, typescript]
aliases: ["mypy", "pyright", "static type checker", "type checking"]
term: "Type Checker"
pronunciation: "TYPE CHEK-er"
keywords: ["mypy pyright", "find type mistakes without running", "static type checking", "check type hints", "wrong argument type", "typescript compiler checks", "أدوات mypy وpyright", "إيجاد أخطاء الأنواع دون تشغيل", "فحص الأنواع الثابت", "فحص تلميحات الأنواع", "نوع معامل خاطئ", "فحص مترجم TypeScript"]
---

## Definition

A type checker reads your code and its type hints and reports type mistakes, such as passing a string where a number is expected, without running the program.

## Where you hear it

In CI checks, Python projects that use mypy or pyright, and TypeScript builds.

## Examples

- CI runs the type checker and fails on any error.
- The type checker caught that `None` can reach this line.
- The type checker reports that the price may be undefined in the cart total.

## Common mistake

Thinking it enforces types at runtime. In Python the hints are not checked when the program runs.

## Don't confuse with

A linter, which looks for style problems and likely bugs. A type checker specifically verifies types.

## Say it at work

- Fix the type checker errors before merging.
- Run mypy in strict mode on the new module.
