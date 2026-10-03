---
id: single-point-of-failure
category: architecture
level: intermediate
related: [load-balancer, fail-open-vs-fail-closed]
term: "Single Point of Failure"
pronunciation: "SING-gul POYNT uv FAYL-yer"
---
## Definition

One component that, if it stops, takes the whole system down. Good design removes or duplicates it.

## Where you hear it

Reliability reviews and architecture interviews ("SPOF").

## Examples

- One database server is a single point of failure.
- We added a replica to remove the single point of failure.

## Common mistake

Adding a second server but keeping one shared load balancer. The failure point just moved.
