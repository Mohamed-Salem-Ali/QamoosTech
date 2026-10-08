---
id: git-hook
category: git
level: intermediate
related: [linting, ci-cd, git-ignore]
term: "Git Hook"
pronunciation: "git hook"
keywords: ["script that runs before commit", "run lint before commit", "git pre-push check", "hooks folder in git", "block a commit if tests fail", "سكربت يعمل قبل الالتزام", "فحص قبل الدفع", "مجلد الخطافات في Git", "منع الالتزام عند فشل الاختبارات"]
---

## Definition

A script that Git runs automatically at a point in its workflow, such as before a commit or after a push, to check or prepare the work.

## Where you hear it

In projects that run linters or tests before code is committed, and in team setup guides.

## Examples

- The git hook stops the commit if the linter fails.
- Hooks live in the .git/hooks folder and are not shared by default.

## Common mistake

Relying on a local hook as the only check. Anyone can skip it with --no-verify, so run the same checks in CI.

## Don't confuse with

A git hook runs on one developer's machine. A CI check runs on the server for every change.
