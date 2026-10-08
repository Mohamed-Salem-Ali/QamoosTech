---
id: file-system
category: devops
subcategory: command-line
level: beginner
related: [hard-link, symbolic-link, persistence]
aliases: ["filesystem", "ext4", "ntfs", "mount"]
term: "File System"
pronunciation: "FYL SIS-tum"
keywords: ["how files are stored and found", "ext4 ntfs apfs", "folders and paths", "mount a disk", "permissions on files", "disk layout", "كيف تُخزَّن الملفات وتُوجد", "‏ext4 وNTFS وAPFS", "المجلدات والمسارات", "ربط قرص", "صلاحيات الملفات", "تنظيم القرص"]
---

## Definition

A file system is the way an operating system organises data on a disk into files and folders, tracks where each file is stored, and enforces names, sizes and permissions.

## Where you hear it

In Linux and Windows administration, Docker volumes, "disk full" incidents and OS courses.

## Examples

- The container's file system is wiped when it is removed.
- Mount the volume at `/data`.
- The uploads are stored on the file system in a folder named by date.

## Common mistake

Storing important data inside a container's own file system. It disappears with the container; use a volume.

## Don't confuse with

A database, which adds queries, indexes and transactions on top of storage. A file system only stores named files.

## Say it at work

- Which file system is this volume using?
- The file system is read-only.
