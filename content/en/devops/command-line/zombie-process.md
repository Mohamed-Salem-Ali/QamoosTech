---
id: zombie-process
category: devops
subcategory: command-line
level: intermediate
related: [process, unix-signal, container-orchestration]
aliases: ["defunct process", "zombie", "defunct"]
term: "Zombie Process"
pronunciation: "ZOM-bee PROH-ses"
keywords: ["finished but still listed", "parent did not wait", "defunct", "pid stays in table", "docker init problem", "reap children", "انتهت لكنها ما تزال مدرجة", "الأب لم ينتظر", "عملية ميتة", "المعرّف يبقى في الجدول", "مشكلة init في Docker", "حصاد الأبناء"]
---

## Definition

A zombie process is a child process that has finished but still appears in the process table because its parent hasn't read its exit status yet. It uses almost no resources, but it still holds a PID.

## Where you hear it

In `ps` output marked `Z` or `<defunct>`, container PID 1 problems, and server hygiene.

## Examples

- Thousands of zombie processes filled the process table.
- Use a tiny init such as `tini` in the container to reap zombies.

## Common mistake

Trying to `kill` a zombie. It is already dead; fix or restart the parent so it reaps its children.

## Don't confuse with

A hung or runaway process, which is still alive and running. A zombie has already finished.

## Say it at work

- There are zombies in the process list.
- Who is the parent of this defunct process?
