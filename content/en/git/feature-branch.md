---
id: feature-branch
category: git
level: beginner
related: [trunk-based-development, branch, pull-request, hotfix]
term: "Feature Branch"
pronunciation: "FEE-cher branch"
keywords: ["branch for one feature", "separate branch for a fix", "work on a branch", "create a branch for this ticket", "delete branch after merge", "فرع لميزة واحدة", "فرع منفصل لإصلاح", "العمل على فرع", "أنشئ فرعاً لهذه التذكرة"]
---

## Definition

A branch created for one feature or fix, so the work can be developed and reviewed separately before it is merged into the main line.

## Where you hear it

In everyday Git workflows and in tickets that say "create a branch for this".

## Examples

- I opened a feature branch for the export button.
- Delete the feature branch after the pull request is merged.
- The feature branch for the export button merged cleanly after two reviews.

## Common mistake

Letting a feature branch live for weeks. It drifts away from main, and the merge becomes painful.

## Don't confuse with

A feature branch is short-lived and focused on one change. A long-lived branch, such as develop, stays open for the whole project.
