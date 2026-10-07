---
id: virtual-environment
category: devops
subcategory: environments-and-packaging
level: beginner
related: [package-dependency, pip, package]
tags: [python]
aliases: ["venv", "virtualenv"]
term: "Virtual Environment"
pronunciation: "VER-choo-ul en-VY-run-ment"
keywords: ["private python for one project", "venv folder", "isolate project packages", "activate the environment", "different versions per project", "avoid installing globally", "بايثون خاص بمشروع واحد", "مجلد venv", "عزل حزم المشروع", "تفعيل البيئة", "إصدارات مختلفة لكل مشروع", "تجنب التثبيت العام"]
---

## Definition

A virtual environment is a private folder holding its own Python and installed packages for one project, so projects don't interfere with each other.

## Where you hear it

In setup instructions (`python -m venv .venv`), onboarding docs, and when two projects need different versions of a library.

## Examples

- Create and activate a virtual environment before installing anything.
- It works in my venv but fails on the server because the versions differ.

## Common mistake

Installing packages globally, or forgetting to activate the environment, so the command uses the wrong Python.

## Don't confuse with

A container, which isolates the whole operating system layer. A virtual environment only isolates Python packages.

## Say it at work

- Did you activate the venv?
- Delete the .venv folder and recreate it; it is disposable.
