---
id: quality-gate
category: testing
subcategory: tools-and-quality
level: intermediate
related: [test-coverage, ci-cd, linting]
term: "Quality Gate"
pronunciation: "KWOL-ih-tee GAYT"
keywords: ["automated code check rules","block merge on test fail","sonar check before merge","ci cd pass criteria","minimum coverage requirement","code quality threshold check","prevent merge on low coverage","automated pipeline checks","quality gate","kwolity gate","بوابة الجودة","شروط دمج الكود","فحص الكود تلقائيا قبل الدمج","منع دمج الكود سيء الجودة","قواعد الفحص التلقائي في السي آي","الحد الأدنى لتغطية الاختبارات","كوالتي جيت","معايير قبول الكود البرمجي"]
---
## Definition

A set of automatic rules code must pass before it can be merged, such as passing tests, enough coverage, and no serious issues.

## Where you hear it

CI/CD and tools like SonarQube.

## Examples

- The quality gate failed because coverage dropped below 80%.
- No pull request merges unless the quality gate is green.
- The pipeline stops at the quality gate when the coverage drops below the limit.

## Common mistake

Setting the rules too strict at the start. People then write fake tests only to pass. Start reasonable and raise it slowly.

## Don't confuse with

Quality Gate vs. Quality Assurance (QA). A quality gate is a specific automated check in a pipeline, whereas quality assurance is the broad process of ensuring the overall quality of the software development lifecycle.

## Say it at work

- We need to adjust the quality gate settings because the current threshold is blocking valid PRs.
- Please review the failing quality gate report and address the identified issues before requesting a re-review.
