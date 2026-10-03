---
id: interactive-rebase
category: git
level: intermediate
related: [commit, rebase]
term: "Interactive Rebase"
pronunciation: "IN-ter-AK-tiv RE-bays"
keywords: ["edit git commit history","squash multiple commits together","clean up local branch commits","rewrite git history locally","reorder commits in git","git rebase dash i","modify previous git commits","combine commits before push","git squash commits command","interactive git history editor","تعديل تاريخ الالتزامات","دمج عدة التزامات برمجية","تنظيف سجل غيت المحلي","إعادة ترتيب سجل الالتزامات","أمر دمج الالتزامات المتعددة","تعديل سجل غيت التفاعلي","تجميع الالتزامات في واحدة","تغيير تاريخ الالتزامات برمجيا","إنترأكتيف ريبايز","تحسين سجل العمل في غيت"]
---

## Definition

A Git feature that lets you modify, combine, or reorder commits in your local branch history before sharing them with others.

## Where you hear it

During code cleanup, preparing pull requests, or rewriting git history.

## Examples

- We use interactive rebase to squash multiple tiny bugfix commits into one clean commit.
- Run `git rebase -i HEAD~3` to modify your last three local commits.

## Common mistake

Using interactive rebase on commits that have already been pushed to a shared public branch, which disrupts other team members.

## Don't confuse with

Interactive rebase is often confused with git merge; while merge creates a new commit that joins two histories, interactive rebase rewrites the commit history linearly to keep it clean.

## Say it at work

- I'm going to run an interactive rebase to clean up these messy commits before I push my branch.
- Please perform an interactive rebase to squash your fixup commits into a single logical unit before we merge this PR.
