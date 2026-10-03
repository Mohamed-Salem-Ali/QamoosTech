---
id: git-fetch
category: git
level: beginner
related: [repository, merge]
term: "Git Fetch"
pronunciation: "GIT FET-ch"
---

## Definition

`git fetch` is a command that downloads commits, files, and references from a remote repository into your local repository. It updates your remote-tracking branches without modifying your current working files or merging changes.

## Where you hear it

- During team code reviews.
- When preparing to update your local branch with the latest changes from the server.
- In tutorials explaining the difference between fetching and pulling.

## Examples

- Run `git fetch origin` to see if there are any new updates on the server.
- I need to run `git fetch` before I can see the new branch my teammate pushed.

## Common mistake

Many beginners think `git fetch` automatically updates their current working files. It only updates the local metadata, so you must perform a `git merge` or `git pull` if you want to apply those changes to your code.
