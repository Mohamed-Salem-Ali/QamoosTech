---
id: thundering-herd
category: architecture
subcategory: reliability
level: intermediate
related: [cache-stampede, retry-logic, backpressure]
aliases: ["retry storm", "reconnect storm"]
term: "Thundering Herd"
pronunciation: "THUN-der-ing HERD"
keywords: ["many clients retry at once", "all wake up together", "reconnect storm", "restart spike", "exponential backoff with jitter", "overload after outage", "عملاء كثيرون يعيدون المحاولة معاً", "الجميع يستيقظ معاً", "عاصفة إعادة الاتصال", "ذروة عند إعادة التشغيل", "التراجع الأسي مع التفاوت", "حمل زائد بعد الانقطاع"]
---

## Definition

A thundering herd happens when many clients or processes react to the same event at the same instant, for example all retrying after an outage, and overload the system again.

## Where you hear it

In outage post-mortems, retry design, cache and scheduler discussions.

## Examples

- When the service came back, all clients reconnected at once and knocked it down again.
- Add random jitter to the retry delay.

## Common mistake

Retrying on a fixed schedule. Everyone retries at the same moments. Use exponential backoff with jitter.

## Don't confuse with

A DDoS attack, which is deliberate. A thundering herd is accidental, caused by your own clients.

## Say it at work

- We need jitter or we'll get a thundering herd.
- Stagger the restarts.
