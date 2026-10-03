---
id: logging
category: devops
level: beginner
related: [monitoring, audit-logging]
term: "Logging"
pronunciation: "LOG-ing"
keywords: ["track application events","write messages to console","debug production errors","record system execution flow","save app activity history","see what happened before crash","application log files","print statements for debugging","loggin","trace execution path","monitor app behavior","تسجيل أحداث النظام","تتبع أخطاء التطبيق","كتابة سجلات النشاط","معرفة سبب فشل الطلبات","لوجينج","حفظ مسار تنفيذ البرنامج","مراقبة سلوك التطبيق","استخراج سجلات الأخطاء","طريقة تتبع المشاكل","تسجيل البيانات في ملفات","تتبع سير العمل"]
---
## Definition

Writing messages about what the app is doing, so you can understand errors and behavior later.

## Where you hear it

Debugging production problems.

## Examples

- Check the logs to see why the request failed.
- Add more logging around the payment step.

## Common mistake

Logging passwords, tokens, or personal data. Logs are often widely accessible.

## Don't confuse with

Logging records events about system execution for debugging, while monitoring tracks metrics and health over time to alert on issues.

## Say it at work

- Could we add some extra logging here so we can see what payload the API received?
- Please ensure that no sensitive user data is exposed in the new logging statements before merging this pull request.
