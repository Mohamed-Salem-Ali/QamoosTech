---
id: squash-and-merge
category: git
level: beginner
related: [merge, pull-request, commit]
term: "Squash and Merge"
pronunciation: "SKWOSH and MURJ"
keywords: ["combine commits into one","clean up git history","merge feature branch as single commit","squash commits on merge","simplify pull request history","git squash commits","squash and merge git","remove intermediate commit noise","make pr one commit","squash merge vs rebase","دمج الالتزامات في التزام واحد","تنظيف سجل الالتزامات في جيت","دمج التعديلات كالتزام واحد","تقليص الالتزامات عند الدمج","اختصار تاريخ الفرع البرمجي","دمج التغييرات في commit واحدة","سكواش آند ميرج","إزالة الالتزامات المؤقتة من السجل","طريقة دمج نظيفة في جيت","تجميع الالتزامات في التزام نهائي"]
---

## Definition

Squash and Merge is a git workflow that combines all individual commits from a feature branch into a single new commit on the target branch. This keeps the project history clean and easy to read by removing intermediate work-in-progress commits.

## Where you hear it

In pull request settings, code review discussions, and repository management guidelines.

## Examples

- We prefer to use Squash and Merge to keep our main branch history clean.
- Please perform a Squash and Merge so that each feature appears as one commit.

## Common mistake

Thinking that squashing deletes your work; it only combines the history of the commits, while the final code state remains exactly the same.

## Don't confuse with

Squash and merge is often confused with rebase; while squash combines multiple commits into one, rebase rewrites the commit history by moving the entire sequence of commits onto a new base.

## Say it at work

- Let's just use squash and merge for this PR so we don't clutter the main branch with all these tiny fix commits.
- Could you please squash and merge this pull request once the final review is approved?
