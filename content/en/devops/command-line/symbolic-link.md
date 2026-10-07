---
id: symbolic-link
category: devops
subcategory: command-line
level: beginner
related: [hard-link, file-system, path-converter]
aliases: ["symlink", "soft link", "shortcut"]
term: "Symbolic Link"
pronunciation: "sim-BOL-ik LINK"
keywords: ["symlink", "shortcut to a file or folder", "ln -s", "points to a path", "broken link when target is gone", "current release folder", "اختصار لملف أو مجلد", "الأمر ln -s", "يشير إلى مسار", "رابط مكسور عند غياب الهدف", "مجلد الإصدار الحالي", "اسم مختصر"]
---

## Definition

A symbolic link (symlink) is a special file that points to another file or folder by its path, like a shortcut. If the target is deleted or moved, the link breaks.

## Where you hear it

In Linux and macOS terminals (`ln -s`), deployment setups (`current` pointing to the latest release) and node_modules or dotfiles.

## Examples

- `current` is a symlink to the newest release folder.
- The symlink is broken because the target moved.

## Common mistake

Using a relative target that only works from one folder. Prefer an absolute path or test it from elsewhere.

## Don't confuse with

A hard link, which is another name for the same data and stays valid even if the first name is removed.

## Say it at work

- Switch the symlink to roll back.
- `ls -l` shows where the symlink points.
