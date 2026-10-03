---
id: interactive-rebase
category: git
level: intermediate
related: [commit, rebase]
term: "Interactive Rebase"
pronunciation: "IN-ter-AK-tiv RE-bays"
---

## Definition

A Git feature that lets you modify, combine, or reorder commits in your local branch history before sharing them with others.

## Where you hear it

During code cleanup, preparing pull requests, or rewriting git history.

## Examples

- We use interactive rebase to squash multiple tiny bugfix commits into one clean commit.
- Run `git rebase -i HEAD~3` to modify your last three local commits.

## Common mistake

Using interactive rebase on commits that have already been pushed to a shared public branch, which disrupts other team members.
