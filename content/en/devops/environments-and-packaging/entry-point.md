---
id: entry-point
category: devops
subcategory: environments-and-packaging
level: intermediate
related: [pyproject-toml, cli, distribution-package]
tags: [python]
aliases: ["console script", "console scripts"]
term: "Entry Point"
pronunciation: "EN-tree poynt"
keywords: ["command created by installing", "console script", "main function as a command", "scripts section", "run my tool by name", "start of the program", "أمر يُنشأ عند التثبيت", "سكريبت الطرفية", "الدالة الرئيسية كأمر", "قسم scripts", "تشغيل أداتي باسمها", "بداية البرنامج"]
---

## Definition

An entry point is where a program starts. In packaging, a console-script entry point makes installing a package create a command that calls a function you chose.

## Where you hear it

In `pyproject.toml` under `[project.scripts]`, in CLI tutorials, and in framework docs about where execution begins.

## Examples

- Declare `tracker = "tracker.cli:main"` as the entry point.
- After installing, the tracker command exists thanks to the entry point.

## Common mistake

Pointing it at a module-level script that runs on import. Point it at a function that does its work only when called.

## Don't confuse with

A CLI, which is the kind of program an entry point often starts. The entry point is the hook that links the command to the code.

## Say it at work

- What's the entry point of this service?
- Rename the function and update the entry point.
