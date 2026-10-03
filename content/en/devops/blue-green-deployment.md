---
id: blue-green-deployment
category: devops
level: intermediate
related: [ci-cd, deployment, rollback]
term: "Blue-Green Deployment"
pronunciation: "BLOO-GREEN dee-PLOY-ment"
---

## Definition

A deployment strategy that uses two identical production environments, where one is live while the other is updated, allowing for instant switching and easy rollbacks.

## Where you hear it

In discussions about release management, CI/CD pipelines, and high-availability infrastructure.

## Examples

- We use Blue-Green Deployment to ensure zero downtime during our releases.
- If the new version has a bug, we can quickly switch traffic back to the old environment.

## Common mistake

Thinking that Blue-Green Deployment is the same as a staging environment; it is specifically about having two production-ready environments to facilitate seamless traffic switching.
