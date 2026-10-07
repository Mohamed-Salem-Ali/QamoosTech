---
id: package-manager
category: devops
subcategory: environments-and-packaging
level: beginner
related: [pip, lock-file, package-dependency]
aliases: ["npm", "pnpm", "yarn", "poetry", "uv"]
term: "Package Manager"
pronunciation: "PAK-ij MAN-ih-jer"
keywords: ["npm yarn pnpm", "pip poetry uv", "install and update libraries", "resolves dependencies", "creates lock file", "run scripts", "‏npm وyarn وpnpm", "‏pip وpoetry وuv", "تثبيت المكتبات وتحديثها", "يحل الاعتماديات", "ينشئ ملف قفل", "تشغيل السكربتات"]
---

## Definition

A package manager is a tool that downloads, installs, updates and removes the libraries a project depends on, resolves version conflicts and usually writes a lock file. Examples: npm, pnpm, pip, Poetry and uv.

## Where you hear it

In setup instructions (`npm install`, `pip install`), CI scripts and "which package manager do we use?" decisions.

## Examples

- Run the package manager to install everything from the lock file.
- Don't mix npm and yarn in the same project.

## Common mistake

Mixing two package managers in one project. They write different lock files and install different versions.

## Don't confuse with

An operating system package manager (apt, brew), which installs programs rather than a project's libraries.

## Say it at work

- Which package manager does this repo use?
- Delete node_modules and reinstall.
