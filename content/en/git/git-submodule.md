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
