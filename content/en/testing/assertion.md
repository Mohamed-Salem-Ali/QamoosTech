---
id: assertion
category: testing
level: beginner
related: [unit-test, debugging]
term: "Assertion"
pronunciation: "uh-SUR-shun"
keywords: ["check if condition is true in test","verify test result with statement","unit test check condition","test condition validation","assert statement in tests","make sure test passes or fails","test expectation check","assrt","asserting","verify expected output in test","التحقق من صحة شرط في الاختبار","التأكد من النتيجة المتوقعة في الاختبار","عبارة التحقق في الاختبارات","فحص الشروط في اختبار الوحدة","تأكيد صحة البيانات في الاختبار","أسرشن","فحص النتيجة في الاختبار","التحقق من قيمة المتغير في الاختبار"]
---

## Definition

A statement in a test that checks if a specific condition is true; if the condition is false, the test fails.

## Where you hear it

In unit tests, integration tests, and test-driven development conversations.

## Examples

- The test uses an assertion to verify that the function returns the correct calculated total.
- If the API response status code is not two hundred, the assertion throws an error.

## Common mistake

Putting multiple unrelated checks into a single assertion instead of writing clear, separate checks for each expected outcome.

## Don't confuse with

Assertion checks a condition during execution, while exception handles runtime errors and unexpected situations.

## Say it at work

- Can we add a clear assertion here to check if the user object is null?
- Please update the test assertion to verify the correct error message is returned.
