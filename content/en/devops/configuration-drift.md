---
id: configuration-drift
category: devops
level: intermediate
related: [infrastructure-as-code, source-of-truth, rollback]
term: "Configuration Drift"
pronunciation: "kuhn-fig-yuh-RAY-shun DRIFT"
---

## Definition

Configuration drift happens when the actual settings or state of a server or system slowly change over time and no longer match the original code or defined baseline.

## Where you hear it

During server audits, troubleshooting production issues, or reviewing Infrastructure as Code pipelines.

## Examples

- Configuration drift caused the staging environment to behave differently than production.
- We run automated scans daily to detect any configuration drift on our cloud servers.

## Common mistake

Thinking that manual fixes made directly on a live server will be saved in the version control system automatically.
