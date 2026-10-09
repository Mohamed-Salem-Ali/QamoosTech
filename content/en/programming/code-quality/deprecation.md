---
id: deprecation
category: programming
subcategory: code-quality
level: intermediate
related: [breaking-change, backward-compatibility, refactoring]
term: "Deprecation"
pronunciation: "dep-ruh-kay-SHUN"
keywords: ["marked as deprecated", "function will be removed", "deprecation warning", "stop using old function", "old API still works for now", "معلَم بأنه مهمل", "الدالة ستُزال لاحقاً", "تحذير الإهمال", "توقف عن استخدام الدالة القديمة"]
---

## Definition

Marking a feature, function, or API as outdated, so users are warned to move away from it. It still works for now, but it will be removed in a later version.

## Where you hear it

In library source code, in warning messages during a run, and in upgrade guides.

## Examples

- The old helper is deprecated, so use the new function instead.
- The warning says this parameter is deprecated since version 2.
- The function still works, but the warning says it is deprecated and will be removed in v4.

## Common mistake

Deprecating a feature without telling anyone how to replace it, or removing it before the warning period ends.

## Don't confuse with

A deprecated feature still works but will be removed. A breaking change stops working when it is released.
