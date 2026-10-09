---
id: git-reset
category: git
level: intermediate
related: [commit, rollback]
term: "Git Reset"
pronunciation: "git ree-SET"
keywords: ["undo last commit git","move branch pointer back","git reset soft vs hard","delete uncommitted changes git","clean up local commit history","rollback last commit","git reset head","erase last commit safely","rewind git branch","التراجع عن آخر كوميت","حذف التعديلات الأخيرة في جيت","الرجوع إلى كوميت سابق","أمر التراجع في جيت","إلغاء الالتزام الأخير","تنظيف سجل الكوميتات","جيت ريسيت هارد","العودة لنقطة التزام سابقة","إزالة التغييرات المحلية"]
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
- I used git reset to drop the three commits I made on the wrong branch.

## Common mistake

Using `--hard` without realizing it permanently deletes uncommitted changes and working directory modifications, making them very difficult to recover.

## Don't confuse with

Git Reset moves the branch pointer and alters history, whereas Git Revert creates a new commit that undoes previous changes without rewriting history.

## Say it at work

- Let's run a soft git reset on that branch to clean up the last few commits before we merge.
- Please avoid using git reset --hard on shared branches because it will break other developers' local history.
