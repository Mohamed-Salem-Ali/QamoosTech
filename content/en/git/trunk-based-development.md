---
id: trunk-based-development
category: git
level: intermediate
related: [feature-branch, feature-flag, merge-conflict]
term: "Trunk-Based Development"
pronunciation: "trunk BAYST-ed dih-VEL-up-ment"
keywords: ["merge to main every day", "small frequent merges", "avoid long-lived branches", "hide unfinished work", "continuous integration practice", "الدمج في الفرع الرئيسي يومياً", "دمجات صغيرة متكررة", "تجنب الفروع طويلة العمر", "إخفاء العمل غير المكتمل"]
---

## Definition

A workflow where developers merge small changes into the main branch often, usually every day, and hide unfinished work behind feature flags instead of keeping long-lived branches.

## Where you hear it

In teams that deploy many times a day, and in discussions about avoiding merge conflicts.

## Examples

- We merge to main every day with trunk-based development.
- The unfinished screen is hidden behind a feature flag.

## Common mistake

Calling a team trunk-based while everyone keeps branches that live for a week. The practice is small, frequent merges.

## Don't confuse with

Feature branches are short-lived copies of the main line. Trunk-based development keeps almost all the work on one main line.
