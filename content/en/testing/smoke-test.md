---
id: smoke-test
category: testing
level: beginner
related: [ci-cd, regression, unit-test]
term: "Smoke Test"
pronunciation: "SMOHK TEST"
---

## Definition

A smoke test is a preliminary set of tests performed to ensure that the most critical functions of a software application work as expected. It is designed to identify major failures quickly before proceeding to more rigorous testing.

## Where you hear it

During the CI/CD pipeline, at the start of a QA cycle, or after a new deployment to a staging environment.

## Examples

- We run a smoke test after every deployment to ensure the login page loads correctly.
- If the smoke test fails, we stop the release process immediately.

## Common mistake

Confusing a smoke test with a comprehensive test suite; a smoke test is meant to be fast and shallow, not to cover every possible edge case or functional requirement.

## Don't confuse with

A smoke test checks only the most critical functions to ensure basic stability, whereas a sanity test is a quick, focused verification of a specific recently changed feature.

## Say it at work

- Let's run a quick smoke test on the staging environment to make sure the build is stable.
- Please ensure the automated smoke test passes successfully before merging this pull request.
