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

## Don't confuse with

Rate limiting is often confused with throttling; while rate limiting restricts the number of requests over a time window, throttling specifically controls the rate of data flow or processing speed to manage bandwidth.

## Say it at work

- We should implement rate limiting on the public endpoints to prevent our services from being overwhelmed by too many requests.
- I have updated the API configuration to include stricter rate limiting, which should resolve the performance issues we observed during peak hours.
