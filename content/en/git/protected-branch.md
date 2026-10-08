---
id: protected-branch
category: git
level: beginner
related: [branch, merge, pull-request, repository]
term: "Protected Branch"
pronunciation: "pro-TEK-ted BRANCH"
keywords: ["prevent direct pushes to main","restrict branch deletion","require code review for merge","lock main branch","git branch security settings","disable force push to branch","enforce pull request approvals","protect production branch","git branch access control","cannot push to master error","منع الدفع المباشر للفرع","حماية الفرع الرئيسي من التعديل","إعدادات أمان فروع الكود","قفل الفرع لمنع الحذف","إجبارية مراجعة الكود للدمج","تقييد صلاحيات الكتابة على الفرع","حماية فرع الإنتاج من التغيير","تفعيل مراجعة طلبات الدمج","منع التعديلات العشوائية على الكود","طريقة قفل فروع المستودع"]
---

## Definition

A repository setting that restricts direct pushes or deletions on specific branches to maintain code quality and stability. It often requires pull request approvals or passing status checks before changes can be merged.

## Where you hear it

In team meetings discussing repository security, during code review process setup, or when a developer is blocked from pushing directly to the main branch.

## Examples

- We set up a protected branch to ensure all code is reviewed before it reaches production.
- You cannot push directly to the main branch because it is a protected branch.
- Force pushes to main are blocked by the protected branch rules.

## Common mistake

Thinking that a protected branch prevents all changes; it actually just enforces a process (like a code review) that must be followed before the change is accepted.

## Don't confuse with

Protected branch is often confused with repository permissions, but protected branches specifically restrict actions on individual branches regardless of a user's general write access to the repository.

## Say it at work

- I can't merge my changes yet because the main branch is a protected branch and I'm still waiting for the required approvals.
- Please ensure that the release branch is configured as a protected branch to prevent accidental commits before the deployment.
