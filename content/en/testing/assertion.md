---
id: assertion
category: testing
level: beginner
related: [unit-test, debugging]
term: "Assertion"
pronunciation: "uh-SUR-shun"
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
