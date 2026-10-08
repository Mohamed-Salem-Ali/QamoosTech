---
id: stash
category: git
level: beginner
related: [branch, commit, repository]
term: "Stash"
pronunciation: "STASH"
keywords: ["save uncommitted changes temporarily","shelve working directory modifications","git stash command","store changes without committing","pause work to switch branch","hide local modifications temporarily","git save work in progress","retrieve stashed changes","git pop stash","حفظ التعديلات بشكل مؤقت","تخزين التعديلات جانبا في جيت","حفظ التعديلات قبل الانتقال للفرع","امر حفظ التعديلات المؤقتة","استرجاع التعديلات المخزنة مؤقتا","ستاش الكود","حفظ العمل الحالي مؤقتا","الاحتفاظ بالتعديلات دون كوميت"]
---

## Definition

Stashing is a Git feature that allows you to temporarily shelve changes in your working directory so you can work on something else without committing them. It saves your uncommitted modifications and reverts your working directory to match the last commit.

## Where you hear it

During code reviews, when switching between branches to fix an urgent bug, or when cleaning up a workspace before pulling new changes.

## Examples

- I need to stash my current work so I can switch to the main branch.
- You can use `git stash pop` to bring back your saved changes later.
- I stashed my half-done changes, pulled the fix, and then popped the stash.

## Common mistake

Thinking that stashing is a permanent way to save your work like a commit; it is intended for temporary storage and can be easily lost if you are not careful with stash management commands.

## Don't confuse with

Stash vs Commit: Stashing is for temporary, uncommitted work that you aren't ready to save to history, while a commit creates a permanent snapshot of your changes in the repository's history.

## Say it at work

- I'll just stash these local changes real quick so I can pull the latest updates from the server.
- Please stash your current progress before switching branches to avoid potential merge conflicts in the working directory.
