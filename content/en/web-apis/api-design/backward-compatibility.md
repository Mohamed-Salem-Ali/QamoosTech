---
id: backward-compatibility
category: web-apis
subcategory: api-design
level: intermediate
related: [api-versioning, breaking-change, deprecation]
term: "Backward Compatibility"
pronunciation: "BAK-werd kum-pat-ih-BIL-ih-tee"
keywords: ["old clients still work", "new version works with old code", "keep old API working", "do not break existing users", "compatible with previous release", "العملاء القدامى ما زالوا يعملون", "النسخة الجديدة تعمل مع الشيفرة القديمة", "إبقاء الواجهة القديمة تعمل", "عدم كسر المستخدمين الحاليين"]
---

## Definition

The quality of a new version that still works with code, data, or clients written for an earlier version, so users do not have to change anything when they upgrade.

## Where you hear it

In API design reviews, library upgrades, and database schema changes.

## Examples

- We added a new field, and the old clients still work.
- Keep the old endpoint for six months to preserve backward compatibility.

## Common mistake

Renaming or removing a field in an API response without a transition period. Old clients fail even though the change looked small.

## Don't confuse with

Backward compatibility means old code keeps working. Forward compatibility means old code can handle data from a newer version.
