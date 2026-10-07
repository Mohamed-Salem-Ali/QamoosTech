---
id: semantic-versioning
category: devops
subcategory: environments-and-packaging
level: intermediate
related: [version-pinning, lock-file, distribution-package]
tags: [python, javascript]
aliases: ["semver"]
term: "Semantic Versioning"
pronunciation: "sih-MAN-tik VER-zhun-ing"
keywords: ["major minor patch", "1.4.2 version numbers", "breaking change means major", "semver", "caret and tilde ranges", "how big is this update", "رئيسي وفرعي وتصحيحي", "أرقام إصدار مثل 1.4.2", "التغيير المكسِّر يعني رئيسي", "الترقيم الدلالي", "نطاقات الإصدارات", "ما حجم هذا التحديث"]
---

## Definition

Semantic versioning numbers releases as MAJOR.MINOR.PATCH. A major bump may break things, a minor adds features compatibly, and a patch only fixes bugs.

## Where you hear it

In release notes, dependency updates, and whenever someone asks "is it safe to upgrade?".

## Examples

- It's 2.3.1 to 2.3.2, just a patch, so it should be safe.
- Going from 3.x to 4.0 is a major version; read the migration guide.

## Common mistake

Trusting it blindly. SemVer is a promise by maintainers, and some projects break it.

## Don't confuse with

Calendar versioning (like 2026.10), which numbers releases by date instead of by change size.

## Say it at work

- Bump the minor version for this new feature.
- Pin to the same major version to avoid breaking changes.
