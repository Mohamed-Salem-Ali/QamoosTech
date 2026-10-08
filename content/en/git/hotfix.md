---
id: hotfix
category: git
level: intermediate
related: [feature-branch, rollback, ci-cd]
term: "Hotfix"
pronunciation: "HOT-fiks"
keywords: ["urgent fix in production", "production bug fix", "fix branch from main", "emergency patch", "fix without waiting for release", "إصلاح عاجل في الإنتاج", "إصلاح خطأ في الإنتاج", "تصحيح طارئ", "إصلاح دون انتظار الإصدار"]
---

## Definition

An urgent fix applied directly to the production branch, outside the normal release cycle, to repair a serious problem quickly.

## Where you hear it

In incident channels and release notes, when production is broken and cannot wait for the next release.

## Examples

- We pushed a hotfix for the login error at midnight.
- After the hotfix, merge it back into the development branch.

## Common mistake

Forgetting to merge the hotfix back into development. The bug then returns in the next release.

## Don't confuse with

A hotfix is a small urgent fix. A rollback returns the release to an earlier version.
