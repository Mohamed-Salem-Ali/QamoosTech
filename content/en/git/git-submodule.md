---
id: git-submodule
category: git
level: intermediate
related: [repository, commit]
term: "Git Submodule"
pronunciation: "GIT SUB-mod-yool"
---
## Definition

A way to include one Git repository inside another at a specific commit.

## Where you hear it

Projects that share common code between repos.

## Examples

- Clone with `--recurse-submodules` to get the nested repo.
- The submodule points to an old commit.

## Common mistake

Updating the child repo but forgetting to commit the new pointer in the parent repo.

## Don't confuse with

Git Submodule vs Git Subtree: A submodule keeps the repositories as separate entities linked by a pointer, whereas a subtree merges the contents of the child repository directly into the parent's history.

## Say it at work

- I'm having trouble pulling the latest changes; did you remember to update the Git submodule pointer?
- Please ensure the Git submodule is initialized correctly in the CI pipeline to avoid build failures.
