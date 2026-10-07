---
id: false-positive
category: testing
subcategory: test-design
level: intermediate
related: [bug, debugging, regression]
term: "False Positive"
pronunciation: "FAWLS POZ-i-tiv"
keywords: ["incorrect error report","scanner flagged wrong issue","tool reporting bug incorrectly","false alarm in testing","security alert not real","linter showing phantom errors","test failed but code works","wrong vulnerability detection","false positive error","incorrect automated test failure","إنذار كاذب في البرمجة","بلاغ خطأ غير صحيح","أداة الفحص تظهر خطأ وهمي","تنبيه أمني غير حقيقي","نتيجة اختبار خاطئة","رصد ثغرة غير موجودة","فحص الكود يعطي نتائج خاطئة","خطأ في تقرير الفحص","فولس بوزيتيف","تحذير خاطئ من أداة التحليل"]
---

## Definition

A false positive happens when a tool, test, or security scanner reports an error or vulnerability, but the code is actually working correctly.

## Where you hear it

In CI/CD pipelines, security audits, static analysis tools, and automated test suites.

## Examples

- The security scanner flagged a vulnerability, but it was just a false positive.
- We had to update the linter rules to ignore false positives in our test files.

## Common mistake

Treating every alert as a real bug without investigating, which wastes time trying to fix code that is already correct.

## Don't confuse with

False positive is often confused with false negative; a false positive incorrectly flags an issue that does not exist, while a false negative fails to detect an issue that is actually present.

## Say it at work

- I checked the logs and the alert seems to be a false positive, so we can probably ignore it for now.
- Please review the attached report, as some of the flagged vulnerabilities appear to be false positives due to our specific configuration.
