---
id: cherry-pick
category: git
level: intermediate
related: [commit, merge, rebase]
term: "Cherry-pick"
pronunciation: "CHEHR-ee pik"
---

## Definition

Applying a specific commit from one branch to another without merging the whole branch.

## Where you hear it

In git workflows, when fixing a bug on a release branch and needing to bring that fix into the main development branch.

## Examples

- We need to cherry-pick that bug fix commit into the release branch.
- I used cherry-pick to grab just the latest feature update without the other experimental changes.

## Common mistake

Thinking cherry-picking replaces merging entirely, which leads to duplicate commits and complicated history if overused.
