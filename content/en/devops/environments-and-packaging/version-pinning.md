---
id: version-pinning
category: devops
subcategory: environments-and-packaging
level: intermediate
related: [lock-file, semantic-versioning, package-dependency]
tags: [python]
aliases: ["pin a version", "pinned dependency"]
term: "Version Pinning"
pronunciation: "VER-zhun PIN-ing"
keywords: ["lock a dependency to one version", "requests==2.32.0", "avoid surprise upgrades", "exact version", "compatible version range", "pin the package", "قفل اعتمادية على إصدار واحد", "تثبيت requests على إصدار محدد", "تجنب التحديثات المفاجئة", "إصدار محدد بدقة", "نطاق إصدارات متوافقة", "تثبيت الحزمة"]
---

## Definition

Version pinning means fixing a dependency to one exact version, such as `requests==2.32.0`, so updates never arrive unannounced.

## Where you hear it

In `requirements.txt` files, deployment reviews, and discussions of why a build suddenly broke.

## Examples

- Pin the version in production; update it deliberately.
- Pinning to `>=2.0` isn't pinning; it still allows any newer version.
- The build pins urllib3 to one version, so a new release cannot break it overnight.

## Common mistake

Pinning once and never updating. Old pinned versions miss security fixes; schedule regular updates.

## Don't confuse with

A lock file, which pins every dependency automatically. Pinning is the idea; the lock file is the tool.

## Say it at work

- Pin it to the last known good version.
- Unpinned dependencies are why the build broke.
