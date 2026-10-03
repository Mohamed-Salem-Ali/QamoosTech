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
