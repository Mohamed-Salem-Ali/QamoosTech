---
id: pip
category: devops
subcategory: environments-and-packaging
level: beginner
related: [pypi, package-dependency, virtual-environment]
tags: [python]
term: "pip"
pronunciation: "PIP"
keywords: ["install python packages", "pip install", "package installer", "download from pypi", "uninstall a package", "pip freeze", "تثبيت حزم بايثون", "أمر pip install", "مثبّت الحزم", "التنزيل من PyPI", "إزالة حزمة", "أمر pip freeze"]
---

## Definition

pip is Python's package installer. It downloads packages, usually from PyPI, and installs them into the current environment.

## Where you hear it

In every Python setup guide (`pip install ...`), README install sections, and CI scripts.

## Examples

- Run `pip install -r requirements.txt` to get everything.
- Use `python -m pip` so you are sure which Python it belongs to.
- I used pip to install the library into the project's virtual environment.

## Common mistake

Running `pip install` outside a virtual environment, which changes the whole system's Python.

## Don't confuse with

PyPI, which is the website and index that stores the packages. pip is the tool that fetches from it.

## Say it at work

- Upgrade pip first, then install.
- pip says there is a version conflict.
