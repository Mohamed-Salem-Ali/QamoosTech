---
id: end-to-end-test
category: testing
subcategory: test-types
level: intermediate
related: [integration-test, unit-test, smoke-test]
aliases: ["E2E test"]
term: "End-to-End Test"
pronunciation: "end too end test"
keywords: ["test the whole user flow", "browser test of the app", "e2e test", "test from login to checkout", "playwright or cypress test", "اختبار مسار المستخدم كاملاً", "اختبار التطبيق في المتصفح", "اختبار E2E", "اختبار من تسجيل الدخول حتى الدفع"]
---

## Definition

A test that runs the whole application the way a user would, from the interface through the backend to the database, to check that a complete flow works.

## Where you hear it

In release checks for critical flows, such as sign-up, checkout, and password reset.

## Examples

- The end-to-end test signs up, adds an item, and pays.
- End-to-end tests are slow, so keep only the most important flows.

## Common mistake

Writing end-to-end tests for every small detail. They are slow and fragile, so use them for key user journeys and cover the rest with unit tests.

## Don't confuse with

An end-to-end test runs the whole system from the user side. An integration test checks that two parts work together.
