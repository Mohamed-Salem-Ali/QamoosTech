---
id: integration-test
category: testing
level: intermediate
related: [unit-test, ci-cd]
term: "Integration Test"
pronunciation: "in-tuh-GRAY-shun TEST"
---
## Definition

A test that checks several parts working together, for example an API endpoint with a real test database.

## Where you hear it

Backend projects and CI setups.

## Examples

- The integration test creates an order and checks the database.
- Integration tests are slower, so we run them after unit tests.

## Common mistake

Testing everything with integration tests only. They are slow, so keep most tests as unit tests.

## Don't confuse with

Integration test vs. end-to-end (E2E) test: An integration test verifies the interaction between two or more modules within the system, whereas an end-to-end test simulates a complete user journey through the entire application stack.

## Say it at work

- We need to add an integration test for the new payment service to ensure it communicates correctly with the database.
- I have updated the CI pipeline to include an integration test that validates the API response against the staging environment.
