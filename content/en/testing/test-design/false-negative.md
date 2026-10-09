---
id: false-negative
category: testing
subcategory: test-design
level: intermediate
related: [bug, unit-test, integration-test]
term: "False Negative"
pronunciation: "FAWLS NEG-uh-tiv"
keywords: ["missed bug in tests","test failed to catch defect","falsely passing test","test says pass but has bug","undetected error in testing","false negative test result","fals negative","test missed a real bug","test failed to detect issue","hidden bug in test suite","اختبار لم يكتشف الخطأ","فشل الاختبار في رصد المشكلة","نتيجة اختبار سلبية خاطئة","الاختبار نجح رغم وجود خطأ","النظام أغفل خطأ برمجي","فالس نيجيتيف","خطأ لم يتم رصده في الاختبار","اختبار يفوت الأخطاء الموجودة","عدم كشف الثغرة في الاختبار"]
---

## Definition

A false negative occurs when a test or diagnostic tool incorrectly reports that no issue exists, even though a bug or defect is actually present. It is a failure to detect a problem that should have been caught.

## Where you hear it

You hear this during test result analysis, bug triaging, or when discussing the reliability of automated testing suites.

## Examples

- The security scan returned a false negative, missing a critical vulnerability in the code.
- We had a false negative in our unit tests because the assertion was checking the wrong variable.
- The scan reported no secrets in the repository, but a token was there, which is a false negative.

## Common mistake

Engineers often confuse a false negative with a false positive; remember that a false negative means the system "missed" a bug, while a false positive means the system "falsely flagged" a bug that isn't there.

## Don't confuse with

A false positive raises an alarm that is not real, which wastes time. A false negative stays silent about a real problem, which is usually the more dangerous of the two.

## Say it at work

- I suspect our latest smoke test gave us a false negative, so we should manually verify that module again.
- The automated regression suite reported a false negative for this feature; I have attached the logs for further investigation.
