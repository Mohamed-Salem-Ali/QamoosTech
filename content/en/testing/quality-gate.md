---
id: quality-gate
category: testing
level: intermediate
related: [test-coverage, ci-cd, linting]
term: "Quality Gate"
pronunciation: "KWOL-ih-tee GAYT"
---
## Definition

A set of automatic rules code must pass before it can be merged, such as passing tests, enough coverage, and no serious issues.

## Where you hear it

CI/CD and tools like SonarQube.

## Examples

- The quality gate failed because coverage dropped below 80%.
- No pull request merges unless the quality gate is green.

## Common mistake

Setting the rules too strict at the start. People then write fake tests only to pass. Start reasonable and raise it slowly.
