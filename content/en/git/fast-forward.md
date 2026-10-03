---
id: fast-forward
category: git
level: intermediate
related: [merge, branch, commit]
term: "Fast-forward"
pronunciation: "FAST-for-werd"
---

## Definition

A type of Git merge that occurs when there is a linear path from the current branch tip to the target branch tip. Git simply moves the branch pointer forward to the latest commit without creating a new merge commit.

## Where you hear it

During pull request reviews, team discussions about repository history, or when running `git merge` commands.

## Examples

- The branch was merged using a fast-forward strategy to keep the history clean.
- You cannot perform a fast-forward merge because the branches have diverged.

## Common mistake

Assuming that a fast-forward merge always creates a merge commit; in reality, it avoids creating one entirely, which can sometimes make it harder to identify when a specific feature branch was integrated.
