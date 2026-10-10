---
id: mock-server
category: testing
subcategory: mocking-and-test-doubles
level: intermediate
related: [mocking, test-double]
term: "Mock Server"
pronunciation: "mock SUR-ver"
aliases: ["fake server"]
keywords: ["fake HTTP server", "canned responses for API calls", "stand in for a third-party API", "run tests without the live service", "خادم HTTP مزيف", "ردود جاهزة لطلبات الواجهة البرمجية", "بديل لخدمة خارجية", "تشغيل الاختبارات دون الخدمة الحية"]
---

## Definition

A mock server is a fake HTTP server that answers requests from the code under test with preset responses. Tests can call an API without reaching the real service.

## Where you hear it

In API and integration tests, and in frontend work when the backend is not ready or a third-party service is slow, costly or rate-limited.

## Examples

- Our integration tests call a mock server instead of the real payment API.
- A mock server returns canned responses for every HTTP call the app makes.
- Start the mock server before the tests and stop it when they finish.

## Common mistake

Treating the mock server as the real API. It answers only what you configured, so a test can pass while the real service behaves differently.

## Don't confuse with

A test double replaces an object or function inside the test. A mock server replaces a remote service over the network, so the real HTTP client code still runs and the network call itself is tested.

## Say it at work

- Point the tests at the mock server, not the live API.
- Did we reset the mock server between test runs?
