---
id: pyproject-toml
category: devops
subcategory: environments-and-packaging
level: intermediate
related: [pip, distribution-package, package-dependency]
tags: [python]
aliases: ["toml", "build backend", "src layout"]
term: "pyproject.toml"
pronunciation: "PY-proj-ekt TOM-ul"
keywords: ["python project config file", "build system settings", "project metadata and dependencies", "tool settings for ruff pytest", "toml configuration", "modern setup.py replacement", "ملف إعداد مشروع بايثون", "إعدادات نظام البناء", "بيانات المشروع واعتمادياته", "إعدادات أدوات مثل ruff وpytest", "ملف إعداد TOML", "بديل setup.py الحديث"]
---

## Definition

`pyproject.toml` is the standard configuration file of a Python project. It holds the project's name, version, dependencies and build settings, plus the settings of tools such as Ruff and pytest. TOML is its simple `key = value` format.

## Where you hear it

When creating or publishing a Python package, configuring linters and test tools, and reading a repo's setup.

## Examples

- All the tool settings live in `pyproject.toml`.
- Add the dependency to `pyproject.toml` and reinstall.
- The name, the version and the dependencies are all in pyproject.toml now.

## Common mistake

Keeping the same settings in several files. One `pyproject.toml` should be the single source.

## Don't confuse with

`requirements.txt`, which only lists packages to install. `pyproject.toml` describes the whole project.

## Say it at work

- Where is the Ruff config? In pyproject.toml.
- The build backend is declared in pyproject.toml.
