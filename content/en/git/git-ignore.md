---
id: git-ignore
category: git
level: beginner
related: [repository, commit]
term: "Git Ignore"
pronunciation: "GIT ig-NOR"
keywords: ["exclude files from git","stop tracking files in git","ignore unwanted files in repo","hide config files from git","git ignore file","dont track build folder git","gitignore configuration","exclude sensitive files git","ignore logs in git","استبعاد ملفات من جيت","منع تتبع الملفات في جيت","تجاهل ملفات معينة في المستودع","اخفاء ملفات الاعدادات عن جيت","ملف التجاهل في جيت","عدم تتبع مجلد البناء","تخطي الملفات غير المرغوبة","حجب كلمات المرور من الرفع"]
---

## Definition

Git Ignore is a mechanism used to tell Git which files or directories in a project should be ignored and not tracked by version control. It is defined by a special file named `.gitignore` placed in the repository.

## Where you hear it

During project setup, when cleaning up a repository, or when trying to hide sensitive configuration files.

## Examples

- We added the build folder to the `.gitignore` file to keep the repository clean.
- Make sure to add your local environment variables file to `.gitignore` so you do not commit secrets.
- The node_modules folder belongs in .gitignore, so it never reaches the repository.

## Common mistake

Thinking that adding a file to `.gitignore` will remove it from the repository if it is already being tracked; you must delete it from the Git index first using `git rm --cached`.

## Say it at work

- Can someone check my git ignore rules because these log files keep showing up in the status?
- Please update the git ignore file to exclude the new IDE configuration directory before merging this pull request.
