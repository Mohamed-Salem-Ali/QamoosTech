---
id: exponential-backoff
category: architecture
subcategory: reliability
level: intermediate
related: [retry-logic, jitter, thundering-herd, reconnection]
term: "Exponential Backoff"
pronunciation: "ek-spuh-NEN-shul BAK-awf"
keywords: ["wait longer after each retry", "retry delay doubles", "backoff strategy", "avoid hammering a failing service", "retry with increasing wait", "الانتظار أطول بعد كل محاولة", "مضاعفة مدة الانتظار", "استراتيجية التراجع", "عدم إغراق خدمة متعطلة بالطلبات"]
---

## Definition

A retry strategy where the wait between attempts grows exponentially, for example 1, 2, 4, and 8 seconds, so a struggling service gets time to recover.

## Where you hear it

In API client libraries, message queue consumers, and cloud SDK retry settings.

## Examples

- The client waits 1, 2, then 4 seconds before it retries the payment.
- Add exponential backoff so all clients do not retry at the same moment.

## Common mistake

Retrying immediately and often, which makes an overloaded service even more overloaded.

## Don't confuse with

Exponential backoff sets how long to wait between retries. Retry logic decides whether and how many times to retry.
