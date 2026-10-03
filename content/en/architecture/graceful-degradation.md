---
id: graceful-degradation
category: architecture
level: intermediate
related: [single-point-of-failure, health-check, rollback]
term: "Graceful Degradation"
pronunciation: "GRAYSFUL deg-ruh-DAY-shun"
---

## Definition

Graceful Degradation is a system design approach that allows a software application to maintain core functionality when a component or external service fails, instead of crashing entirely.

## Where you hear it

- In architecture reviews
- When discussing reliability and fault tolerance
- During outage post-mortems

## Examples

- If the recommendation service is down, the e-commerce app displays standard items instead of crashing.
- The web app hides advanced animations when the browser's performance drops.

## Common mistake

Confusing it with fail-open, which specifically describes security or access control behavior rather than general system functionality and user experience.

## Don't confuse with

Graceful degradation is often confused with progressive enhancement; while graceful degradation starts with full features and scales down for older systems, progressive enhancement starts with basic functionality and adds advanced features for capable browsers.

## Say it at work

- We should implement graceful degradation here so the user can still browse products even if the search index is temporarily unavailable.
- Please ensure the UI supports graceful degradation by displaying cached data if the real-time API call fails.
