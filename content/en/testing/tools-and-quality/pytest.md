---
id: pytest
category: testing
subcategory: tools-and-quality
level: beginner
related: [test-runner, test-fixture, assertion]
tags: [python]
term: "pytest"
pronunciation: "PY-test"
keywords: ["python testing framework", "run tests with pytest", "assert statements", "fixtures and plugins", "test discovery", "pytest -k", "إطار اختبار بايثون", "تشغيل الاختبارات بـ pytest", "عبارات assert", "الـ fixtures والإضافات", "اكتشاف الاختبارات", "تصفية الاختبارات بالاسم"]
---

## Definition

pytest is the most popular Python testing framework. It finds test functions automatically, uses plain `assert`, and offers fixtures, parametrization and plugins.

## Where you hear it

In Python project READMEs, CI scripts (`pytest -q`), and job descriptions for Python backend roles.

## Examples

- Run `pytest -k payment` to run only the payment tests.
- pytest rewrites assert so failures show both values.

## Common mistake

Naming files or functions so pytest can't find them. By default it looks for `test_*.py` and `test_*` functions.

## Don't confuse with

`unittest`, the framework built into Python. It is more verbose and class-based.

## Say it at work

- Add pytest to the dev dependencies.
- CI runs pytest on every push.
