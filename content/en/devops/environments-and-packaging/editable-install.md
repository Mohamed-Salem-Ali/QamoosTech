---
id: editable-install
category: devops
subcategory: environments-and-packaging
level: intermediate
related: [pip, distribution-package, virtual-environment]
tags: [python]
aliases: ["develop mode", "pip install -e"]
term: "Editable Install"
pronunciation: "ED-ih-tuh-bul IN-stawl"
keywords: ["pip install -e", "changes apply without reinstalling", "develop mode", "link instead of copy", "install your own project locally", "live code changes", "أمر التثبيت بخيار e", "التغييرات تُطبَّق دون إعادة تثبيت", "وضع التطوير", "رابط بدل نسخة", "تثبيت مشروعك محلياً", "تغييرات الكود مباشرة"]
---

## Definition

An editable install installs your project as a link to its source folder, so edits apply immediately without reinstalling. It is done with `pip install -e .`.

## Where you hear it

In developer setup docs for libraries and in projects with a `src` layout.

## Examples

- Install the project in editable mode so tests import your latest code.
- After an editable install the new command is available in the venv.

## Common mistake

Using it in production. It is a development convenience; production should install a real built package.

## Don't confuse with

A normal install, which copies a snapshot of the code. Later edits do not change what is installed.

## Say it at work

- Run `pip install -e .[dev]` to set up.
- It didn't pick up my change because it wasn't an editable install.
