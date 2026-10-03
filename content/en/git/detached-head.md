---
id: detached-head
category: git
level: intermediate
related: [branch, commit, rebase]
term: "Detached HEAD"
pronunciation: "di-TACHED hed"
---

## Definition

A Git state where your repository points directly to a specific commit instead of a branch, meaning any new commits you make are not saved to a branch.

## Where you hear it

When checking out an old commit, during an interactive rebase, or when trying to figure out why recent commits disappeared after switching branches.

## Examples

- I accidentally entered a detached HEAD state by checking out a commit hash directly.
- Any changes made in a detached HEAD state will be lost if you switch branches without creating a new one.

## Common mistake

Thinking that working in a detached HEAD state will automatically update your main branch, or panicking and deleting the repository instead of just creating a new branch to save your work.

## Say it at work

- Make sure you create a temporary branch right now so you do not stay in a detached HEAD state.
- Please create a new branch from this commit to preserve your changes and avoid working in a detached HEAD state.
