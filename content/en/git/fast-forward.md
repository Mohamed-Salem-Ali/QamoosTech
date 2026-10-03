---
id: fast-forward
category: git
level: intermediate
related: [merge, branch, commit]
term: "Fast-forward"
pronunciation: "FAST-for-werd"
keywords: ["merge without commit","git fast forward merge","move branch pointer forward","fast forward strategy","clean git history merge","linear git merge","update branch without merge commit","fast-forward merge","دمج بدون انشاء كيمت جديد","تحريك مؤشر الفرع في جت","استراتيجية الدمج السريع","دمج فروع جت بشكل خطي","تحديث الفرع بدون كيمت دمج","الدمج السريع في جيت","تاريخ جيت نظيف بدون كيمت","فاست فورورد ميرج"]
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

## Don't confuse with

Fast-forward merge moves the branch pointer directly without a new commit, while a three-way merge combines divergent branches and creates a distinct merge commit.

## Say it at work

- Let's do a fast-forward merge for this PR since nobody else pushed to the main branch.
- Please ensure your branch is up to date with main so we can perform a clean fast-forward merge.
