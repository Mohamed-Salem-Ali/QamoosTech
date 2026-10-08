---
id: jitter
category: architecture
subcategory: reliability
level: intermediate
related: [exponential-backoff, thundering-herd, retry-logic, reconnection]
term: "Jitter"
pronunciation: "JIT-er"
keywords: ["random delay added to retries", "spread out requests", "avoid retry storm", "randomize expiry time", "jitter in backoff", "تأخير عشوائي يضاف إلى المحاولات", "توزيع الطلبات", "تجنب عاصفة المحاولات", "عشوائية وقت الانتهاء"]
---

## Definition

A small random variation added to a delay or a timeout, so that many clients do not act at exactly the same moment. Jitter spreads the load over time.

## Where you hear it

In retry logic, cache expiry settings, and scheduled jobs that many servers run.

## Examples

- Add jitter to the retry delay so the clients spread their requests.
- Each cache key gets a small random jitter on its expiry time.

## Common mistake

Using a large jitter that makes the delay unpredictable, or adding no jitter at all, so every client still retries together.

## Don't confuse with

Jitter adds randomness to a delay. Exponential backoff makes the delay grow over time.
