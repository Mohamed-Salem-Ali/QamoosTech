---
id: rate-limiting
category: web-apis
level: intermediate
related: [status-code, fail-open-vs-fail-closed]
term: "Rate Limiting"
pronunciation: "RAYT LIM-it-ing"
---
## Definition

Limiting how many requests a user or app can send in a period of time, to stop abuse and protect the server.

## Where you hear it

API design, security reviews, and "429 Too Many Requests" errors.

## Examples

- We apply rate limiting of 100 requests per minute per user.
- You hit the rate limit, so wait a minute and retry.

## Common mistake

Limiting only by IP address. Many users share one IP, so also limit by account or API key.
