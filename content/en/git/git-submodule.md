---
id: git-submodule
category: git
level: intermediate
related: [repository, commit]
term: "Git Submodule"
pronunciation: "GIT SUB-mod-yool"
keywords: ["include repo inside another","git nested repository","manage shared code dependencies","git submodule vs subtree","link external repository pointer","git submodule recursive clone","git sub module","tracking external git project","git submodule update pointer","embedded git repository","تضمين مستودع داخل مستودع","مستودع جيت فرعي","ربط مشاريع جيت ببعضها","إدارة المستودعات المتداخلة","استخدام مستودع داخل مستودع آخر","تحديث مؤشر المستودع الفرعي","الفرق بين سب مودول وسب تري","جيت سب مودول","استنساخ مستودع مع الملحقات","مستودع خارجي داخل مشروع"]
---
## Definition

A Git repository stored inside another repository and pinned to one specific commit. It lets a project include another project's code, while the parent repository records which version it uses.

## Where you hear it

Projects that share common code between repos.

## Examples

- Clone with `--recurse-submodules` to get the nested repo.
- The submodule points to an old commit.

## Common mistake

Updating the child repo but forgetting to commit the new pointer in the parent repo.

## Don't confuse with

Git Submodule vs Git Subtree: A submodule keeps the repositories as separate entities linked by a pointer, whereas a subtree merges the contents of the child repository directly into the parent's history.

## Say it at work

- I'm having trouble pulling the latest changes; did you remember to update the Git submodule pointer?
- Please ensure the Git submodule is initialized correctly in the CI pipeline to avoid build failures.
