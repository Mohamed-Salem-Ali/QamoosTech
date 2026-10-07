---
id: dry-run
category: testing
subcategory: mocking-and-test-doubles
level: beginner
related: [ci-cd, staging-vs-production]
term: "Dry Run"
pronunciation: "DRAI RUHN"
keywords: ["test script without saving changes","preview deployment changes safely","run migration without modifying database","simulate command execution","test run before production","check script for errors safely","preview command output","dai run","dryran","تنفيذ تجريبي بدون تغييرات","اختبار الأوامر دون حفظ","معاينة التغييرات قبل النشر","تشغيل السكريبت للاختبار فقط","التنفيذ الوهمي للنشر","فحص الترحيل بدون تعديل قاعدة البيانات","دراي ران","تجربة النشر برمجيا"]
---

## Definition

A dry run is the execution of a script, command, or deployment to test how it works without making any permanent changes to the database or production environment.

## Where you hear it

During CI/CD pipeline setups, database migrations, and release planning meetings.

## Examples

- Let's do a dry run of the migration script on the staging database before touching production.
- The deployment tool supports a dry run flag so we can preview the changes.

## Common mistake

Assuming a dry run is completely risk-free; it can still consume resources or cause temporary locks even if it does not write data.

## Don't confuse with

A dry run tests an operation without making permanent changes, while a backup creates a safe copy of existing data before modifications begin.

## Say it at work

- Let us run the deployment command with the dry run flag first to make sure there are no syntax errors.
- Please attach the output logs from the dry run to the pull request description before merging.
