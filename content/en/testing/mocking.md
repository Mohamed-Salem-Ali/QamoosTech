---
id: mocking
category: testing
level: intermediate
related: [unit-test, dependency-injection]
term: "Mocking"
pronunciation: "MOK-ing"
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
