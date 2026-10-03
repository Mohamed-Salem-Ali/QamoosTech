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

## Don't confuse with

Mocking creates objects with pre-programmed behavior and expectations, whereas stubbing only provides canned answers to calls made during the test.

## Say it at work

- Let us mock the database call here so we can run these unit tests quickly.
- Please add a mock for the external notification service to prevent sending real emails during the CI pipeline.
