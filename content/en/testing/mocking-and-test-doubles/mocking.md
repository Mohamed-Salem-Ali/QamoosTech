---
id: mocking
category: testing
subcategory: mocking-and-test-doubles
level: intermediate
related: [unit-test, dependency-injection, dummy-object]
term: "Mocking"
pronunciation: "MOK-ing"
keywords: ["fake external service in tests","replace dependency with dummy object","simulate api responses for testing","avoid calling real payment gateway","mocking vs stubbing","create test doubles","unit test isolation techniques","how to mock database calls","testing code without real dependencies","prevent real email during tests","إنشاء كائنات وهمية للاختبار","استبدال التبعيات في الاختبارات","محاكاة استدعاءات قاعدة البيانات","تجنب الاتصال بخدمات حقيقية","عمل موك للخدمات الخارجية","كيفية عمل محاكاة برمجية","استخدام كائنات وهمية في الاختبار","بدائل الخدمات الحقيقية أثناء الاختبار","موكينج للبرمجيات","محاكاة استجابة الـ api"]
---
## Definition

Replacing a real dependency, such as an email service or a payment API, with a fake one in tests.

## Where you hear it

Unit testing and test setup discussions.

## Examples

- We mock the payment gateway so tests never charge real cards.
- Too many mocks make the test fragile.

## Common mistake

Mocking everything. If the test only checks your mocks, it proves nothing about the real code.

## Don't confuse with

Mocking creates objects with pre-programmed behavior and expectations, whereas stubbing only provides canned answers to calls made during the test.

## Say it at work

- Let us mock the database call here so we can run these unit tests quickly.
- Please add a mock for the external notification service to prevent sending real emails during the CI pipeline.
