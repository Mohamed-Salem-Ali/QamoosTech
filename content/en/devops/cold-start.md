---
id: cold-start
category: devops
level: intermediate
related: [serverless, latency-vs-throughput, spin-up]
term: "Cold Start"
pronunciation: "KOHLD START"
---

## Definition

A delay that occurs when a serverless function or container handles its first request after being idle, because the platform needs to provision resources and load the code.

## Where you hear it

In performance reviews, serverless architecture discussions, and when optimizing API latency.

## Examples

- The first API request took three seconds because of a cold start.
- We use provisioned concurrency to eliminate cold starts for critical endpoints.

## Common mistake

Assuming every request suffers the same delay, when actually subsequent requests run much faster because the container is already warm.
