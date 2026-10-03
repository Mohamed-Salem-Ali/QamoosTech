---
id: ephemeral-environment
category: devops
level: intermediate
related: [ci-cd, infrastructure-as-code, pull-request]
term: "Ephemeral Environment"
pronunciation: "ih-FEM-er-uhl en-VI-ruhn-muhnt"
---

## Definition

A temporary, fully functional copy of an application's infrastructure that is automatically created for a specific pull request and destroyed when the branch is closed or merged.

## Where you hear it

In CI/CD pipelines, DevOps discussions, and during feature testing or QA reviews.

## Examples

- The CI pipeline automatically spins up an ephemeral environment for every new pull request.
- QA testers can review the new feature safely in a dedicated ephemeral environment before it merges.

## Common mistake

Treating ephemeral environments like persistent staging servers, forgetting that all data and configurations inside them will be wiped out automatically.
