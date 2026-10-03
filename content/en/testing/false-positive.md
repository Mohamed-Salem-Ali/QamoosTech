---
id: false-positive
category: testing
level: intermediate
related: [bug, debugging, regression]
term: "False Positive"
pronunciation: "FAWLS POZ-i-tiv"
---

## Definition

A false positive happens when a tool, test, or security scanner reports an error or vulnerability, but the code is actually working correctly.

## Where you hear it

In CI/CD pipelines, security audits, static analysis tools, and automated test suites.

## Examples

- The security scanner flagged a vulnerability, but it was just a false positive.
- We had to update the linter rules to ignore false positives in our test files.

## Common mistake

Treating every alert as a real bug without investigating, which wastes time trying to fix code that is already correct.
