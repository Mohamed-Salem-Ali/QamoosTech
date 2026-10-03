---
id: fail-open-vs-fail-closed
category: architecture
level: intermediate
related: [rate-limiting, single-point-of-failure]
term: "Fail Open vs Fail Closed"
pronunciation: "FAYL OH-pen versus FAYL KLOHZD"
---
## Definition

What a system does when a part breaks. *Fail open* keeps working without that part. *Fail closed* blocks everything until it is fixed.

## Where you hear it

Resilience, security design, and rate limiting.

## Examples

- If Redis is down, the rate limiter fails open and lets users in.
- Login must fail closed: if the auth service is down, nobody gets in.

## Common mistake

Always choosing fail open. For security and payments you usually want fail closed.

## Say it at work

- Let's make sure the gateway is configured to fail open for this non-critical widget.
- We decided that the payment service should fail closed to prevent any unauthorized transactions during an outage.
