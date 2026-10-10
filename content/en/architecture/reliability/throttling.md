---
id: throttling
category: architecture
subcategory: reliability
level: intermediate
related: [rate-limiting, backpressure]
term: "Throttling"
pronunciation: "THROT-ling"
keywords: ["slow down requests to protect a service", "limit how fast a client can call", "delay or queue requests above a rate", "protect a service from traffic spikes", "throttle api calls", "تقييد سرعة الطلبات", "إبطاء الطلبات لحماية الخدمة", "تأخير الطلبات الزائدة أو تأجيلها", "حماية الخدمة من ارتفاع الحمل المفاجئ"]
---

## Definition

Throttling slows down or limits how much work a system accepts, so a burst of requests does not overload it. Excess requests are delayed, queued, or rejected.

## Where you hear it

In API design reviews, cloud billing talks, and incident reports, when a service starts returning 429 errors or slows down under load.

## Examples

- The payment provider throttles us to 100 requests per second.
- When the batch job starts, the queue throttles writes to the database.
- Throttling is better than a crash when traffic spikes.

## Common mistake

Using throttling to mean any limit. Throttling slows or delays the extra work, while a hard quota or rate limit often rejects it. Check which one the system does before you promise anything to a customer.

## Don't confuse with

Rate limiting rejects requests above a limit, usually with an error such as 429. Throttling slows them down or queues them, so they arrive later. Backpressure is the signal a slow consumer sends upstream to ease the load.

## Say it at work

- Are we throttling the sync job, or just retrying it?
- The vendor throttled us again today.
