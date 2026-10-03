---
id: flaky-test
category: testing
level: intermediate
related: [unit-test, integration-test, debugging]
term: "Flaky Test"
pronunciation: "FLAY-kee TEST"
---

## Definition

A flaky test is a test that produces inconsistent results, such as passing or failing, even when the underlying code has not changed. This is typically caused by non-deterministic factors like network latency, race conditions, or improper test isolation.

## Where you hear it

In CI/CD pipeline reports, during code reviews, or when discussing test suite reliability in a sprint.

## Examples

- We need to quarantine this flaky test because it is causing random build failures.
- The team spent all day debugging a flaky test that only fails on the CI server.

## Common mistake

Assuming that a flaky test is a sign of a bug in the application code; often, the issue lies within the test infrastructure or the way the test is written rather than the feature itself.

## Say it at work

- Can someone look at this flaky test, because it failed twice on the main branch without any code changes?
- We are temporarily disabling the flaky test in the pipeline to unblock the current deployments.
