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
