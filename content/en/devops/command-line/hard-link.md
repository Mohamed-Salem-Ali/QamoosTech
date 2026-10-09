---
id: hard-link
category: devops
subcategory: command-line
level: intermediate
related: [symbolic-link, file-system, process]
aliases: ["inode", "link count"]
term: "Hard Link"
pronunciation: "HARD link"
keywords: ["another name for the same file", "same inode", "file stays until all links removed", "ln command", "cannot cross filesystems", "link count", "اسم آخر للملف نفسه", "نفس الـ inode", "الملف يبقى حتى تُحذف كل الروابط", "الأمر ln", "لا يعبر أنظمة الملفات", "عدد الروابط"]
---

## Definition

A hard link is an additional name for the same file data on disk. All the names are equal, and the data is only freed when the last one is deleted.

## Where you hear it

In Linux administration (`ln file link`), backup tools that save space and OS filesystem courses.

## Examples

- Both names point to the same inode; deleting one keeps the data.
- `ls -l` shows the link count.
- Both names of the file are hard links, so deleting one name keeps the data.

## Common mistake

Thinking it is a copy. Edit one name and you edit them all, because there is only one file.

## Don't confuse with

A symbolic link, which is a small file that just stores the path to another file and breaks if the target moves.

## Say it at work

- Use a hard link to avoid duplicating the file.
- The link count is 2.
