---
id: pep-8
category: programming
subcategory: code-quality
level: beginner
related: [linting, pythonic, refactoring]
tags: [python]
aliases: ["pep8", "python style guide"]
term: "PEP 8"
pronunciation: "PEP AYT"
keywords: ["python style guide", "code formatting rules", "snake_case naming", "4 spaces indentation", "line length limit", "ruff black flake8", "دليل أسلوب بايثون", "قواعد تنسيق الكود", "تسمية snake_case", "إزاحة 4 مسافات", "حد طول السطر", "‏ruff و black و flake8"]
---

## Definition

PEP 8 is Python's official style guide. It describes how to name things, indent and format code so Python programs look consistent.

## Where you hear it

In Python code reviews, linter and formatter settings, and onboarding documents for new developers.

## Examples

- Please follow PEP 8: four spaces and `snake_case` names.
- The linter reports a PEP 8 violation on that line.

## Common mistake

Arguing about style by hand in reviews. Let a formatter such as Ruff or Black enforce it automatically.

## Don't confuse with

A linter, which finds likely bugs. PEP 8 is only the style agreement the tools check.

## Say it at work

- Run the formatter so we don't discuss PEP 8 in the review.
- The CI fails on style, so fix the PEP 8 warnings first.
