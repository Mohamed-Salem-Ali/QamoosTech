---
id: rebase
category: git
level: intermediate
related: [merge, merge-conflict]
term: "Rebase"
pronunciation: "ree-BAYS"
---
## Definition

Moving your branch's commits on top of the latest commits of another branch, to keep a clean, straight history.

## Where you hear it

Git workflows and interviews.

## Examples

- Rebase your branch on `main` before opening the PR.
- Never rebase a branch that others already use.

## Common mistake

Rebasing shared branches. It rewrites history and breaks your teammates' copies.

## Don't confuse with

Rebase rewrites the commit history to create a linear path, while merge preserves the exact history by combining branches with a new commit.

## Say it at work

- Let's quickly rebase our feature branches to pick up the latest bug fixes from main.
- Please rebase your branch on top of the latest development branch and resolve any conflicts before requesting a review.
