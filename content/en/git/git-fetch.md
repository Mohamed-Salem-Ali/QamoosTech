---
id: git-fetch
category: git
level: beginner
related: [repository, merge]
term: "Git Fetch"
pronunciation: "GIT FET-ch"
keywords: ["download remote changes","update local tracking branches","get latest commits only","git fetch vs pull","check for remote updates","sync remote repository metadata","fetch remote branches","git update without merge","retrieve new remote data","git get remote changes","جلب التغييرات من المستودع","تحديث فروع التتبع البعيدة","تحميل تحديثات الخادم فقط","جيت فيتش","الفرق بين فيتش وسحب","استلام التعديلات بدون دمج","تحديث المراجع المحلية","جلب الكوميتات الجديدة","معرفة التحديثات الجديدة","كيفية مزامنة المستودع المحلي"]
---

## Definition

`git fetch` is a command that downloads commits, files, and references from a remote repository into your local repository. It updates your remote-tracking branches without modifying your current working files or merging changes.

## Where you hear it

- During team code reviews.
- When preparing to update your local branch with the latest changes from the server.
- In tutorials explaining the difference between fetching and pulling.

## Examples

- Run `git fetch origin` to see if there are any new updates on the server.
- I need to run `git fetch` before I can see the new branch my teammate pushed.
- Run git fetch to see the branch your teammate pushed, without changing your own work.

## Common mistake

Many beginners think `git fetch` automatically updates their current working files. It only updates the local metadata, so you must perform a `git merge` or `git pull` if you want to apply those changes to your code.

## Don't confuse with

Git fetch vs. git pull: fetch only downloads the latest data from the remote repository without changing your local files, whereas pull performs both a fetch and an immediate merge into your current branch.

## Say it at work

- I'll run a quick git fetch to make sure my local tracking branches are up to date with the remote.
- Please run git fetch to retrieve the latest commits before you start working on the integration branch.
