---
id: toctou
category: security
subcategory: application-security
level: intermediate
related: [race-condition, insecure-direct-object-reference, vulnerability]
aliases: ["time of check time of use", "toctou race"]
term: "TOCTOU"
pronunciation: "TOK-too"
keywords: ["time of check time of use", "file changes between check and open", "check then act race", "symlink swap", "permission check bypass", "atomic open", "وقت الفحص ووقت الاستخدام", "الملف يتغير بين الفحص والفتح", "سباق الفحص ثم التنفيذ", "تبديل الرابط الرمزي", "تجاوز فحص الصلاحيات", "فتح ذري"]
---

## Definition

TOCTOU (time-of-check to time-of-use) is a race-condition bug where something is verified, then changes before it is used, for example a file that is checked as safe and swapped before it is opened.

## Where you hear it

In secure coding guides, file handling code, security audits and CVE write-ups.

## Examples

- `if os.path.exists(f): open(f)` has a TOCTOU gap.
- Open the file once and act on the handle; don't check by path first.
- The check of the file owner happens before the open, which creates a TOCTOU gap.

## Common mistake

Checking permissions or existence first and acting afterwards. Make the check and the action one atomic step.

## Don't confuse with

A general race condition. TOCTOU is the security-relevant case where the gap lets an attacker change the object.

## Say it at work

- That's a TOCTOU bug.
- Use `O_EXCL` so creation and check are one operation.
