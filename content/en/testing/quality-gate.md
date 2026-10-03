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

## Don't confuse with

Quality Gate vs. Quality Assurance (QA). A quality gate is a specific automated check in a pipeline, whereas quality assurance is the broad process of ensuring the overall quality of the software development lifecycle.

## Say it at work

- We need to adjust the quality gate settings because the current threshold is blocking valid PRs.
- Please review the failing quality gate report and address the identified issues before requesting a re-review.
