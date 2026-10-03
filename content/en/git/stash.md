---
id: stash
category: git
level: beginner
related: [branch, commit, repository]
term: "Stash"
pronunciation: "STASH"
---

## Definition

Stashing is a Git feature that allows you to temporarily shelve changes in your working directory so you can work on something else without committing them. It saves your uncommitted modifications and reverts your working directory to match the last commit.

## Where you hear it

During code reviews, when switching between branches to fix an urgent bug, or when cleaning up a workspace before pulling new changes.

## Examples

- I need to stash my current work so I can switch to the main branch.
- You can use `git stash pop` to bring back your saved changes later.

## Common mistake

Thinking that stashing is a permanent way to save your work like a commit; it is intended for temporary storage and can be easily lost if you are not careful with stash management commands.
