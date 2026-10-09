---
id: cherry-pick
category: git
level: intermediate
related: [commit, merge, rebase]
term: "Cherry-pick"
pronunciation: "CHEHR-ee pik"
keywords: ["apply single commit to another branch","copy specific commit to branch","take commit from another branch","grab one commit without merging","git apply specific commit","transfer single commit git","cherry pick","chery pick","git copy commit","نقل التزام واحد بين الفروع","نسخ كوميت معين لفرع آخر","اخذ التزام بدون دمج الفرع","نقل إصلاح من فرع لآخر","تشيري بيك","انتقاء الالتزامات","تطبيق كوميت محدد","جلب التزام معين في جيت"]
---

## Definition

Applying a specific commit from one branch to another without merging the whole branch.

## Where you hear it

In git workflows, when fixing a bug on a release branch and needing to bring that fix into the main development branch.

## Examples

- We need to cherry-pick that bug fix commit into the release branch.
- I used cherry-pick to grab just the latest feature update without the other experimental changes.
- We cherry-picked the security fix onto the release branch.

## Common mistake

Thinking cherry-picking replaces merging entirely, which leads to duplicate commits and complicated history if overused.

## Don't confuse with

Cherry-pick applies a single specific commit to another branch, whereas merge combines all commits from an entire branch.

## Say it at work

- Could you please cherry-pick this urgent patch into the production branch?
- I have cherry-picked the fix into the staging branch to verify it works correctly.
