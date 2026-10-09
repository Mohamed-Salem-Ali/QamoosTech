---
id: detached-head
category: git
level: intermediate
related: [branch, commit, rebase]
term: "Detached HEAD"
pronunciation: "di-TACHED hed"
keywords: ["git points to commit not branch","commits disappearing after switching branches","git checked out commit directly","lost commits after checkout","git head not on a branch","detached head state","fix git detached head","git working on commit hash","جت لا يشير إلى فرع","العمل على كَمِت مباشرة في جت","ضياع التعديلات بعد الانتقال بين الفروع","حالة الهيد المنفصل في جت","جت يشير إلى كَمِت قديم","ديتاتشد هيد في جت","كيف أخرج من حالة الهيد المنفصل","مستودع جت غير مربوط بفرع"]
---

## Definition

A Git state where your repository points directly to a specific commit instead of a branch, meaning any new commits you make are not saved to a branch.

## Where you hear it

When checking out an old commit, during an interactive rebase, or when trying to figure out why recent commits disappeared after switching branches.

## Examples

- I accidentally entered a detached HEAD state by checking out a commit hash directly.
- Any changes made in a detached HEAD state will be lost if you switch branches without creating a new one.
- After checking out a tag, my commits were in a detached HEAD and needed a branch.

## Common mistake

Thinking that working in a detached HEAD state will automatically update your main branch, or panicking and deleting the repository instead of just creating a new branch to save your work.

## Say it at work

- Make sure you create a temporary branch right now so you do not stay in a detached HEAD state.
- Please create a new branch from this commit to preserve your changes and avoid working in a detached HEAD state.
