---
id: git-reset
category: git
level: intermediate
related: [commit, rollback]
term: "Git Reset"
pronunciation: "git ree-SET"
---

## Definition

Git Reset is a command used to move the current branch pointer backward to a specific commit, effectively undoing changes. It can be used to alter the commit history and manage the state of your working directory or staging area.

## Where you hear it

- In code reviews when someone needs to clean up their local commits
- During debugging sessions to undo accidental changes
- When cleaning up messy commit history before pushing to a shared repository

## Examples

- Run `git reset --soft HEAD~1` to undo the last commit while keeping your changes in the staging area.
- Use `git reset --hard HEAD~1` to completely erase the last commit and all your uncommitted work.

## Common mistake

Using `--hard` without realizing it permanently deletes uncommitted changes and working directory modifications, making them very difficult to recover.
