---
id: latency-vs-throughput
category: architecture
subcategory: scaling
level: intermediate
related: [cache, scalability, connection-pool]
aliases: ["latency", "throughput"]
term: "Latency vs Throughput"
pronunciation: "LAY-ten-see versus THROO-put"
keywords: ["difference between latency and throughput","speed versus capacity in systems","how to measure system performance","request time vs total volume","latency vs throughput explained","processing speed vs concurrent requests","is latency the same as throughput","system throughput calculation","understanding response time vs capacity","performance metrics for backend systems","الفرق بين زمن الاستجابة والإنتاجية","الفرق بين latency و throughput","قياس أداء النظام والسرعة","ما هو الفرق بين ليتنسي وثرووبوت","الفرق بين سرعة الطلب وعدد الطلبات","مفاهيم قياس كفاءة الخادم","الفرق بين وقت الاستجابة والقدرة الاستيعابية","شرح الفرق بين زمن المعالجة والإنتاجية","كيفية قياس سرعة استجابة النظام","معايير قياس الأداء في الأنظمة"]
---
## Definition

*Latency* is how long one request takes. *Throughput* is how many requests the system handles per second.

## Where you hear it

Performance testing and system design interviews.

## Examples

- The latency is only 80 ms, but throughput drops under heavy load.
- Adding servers improves throughput, not latency.
- Batching the writes raised throughput, but each single write now waits longer.

## Common mistake

Mixing them up. A system can have low latency and low throughput, or the opposite.

## Don't confuse with

Latency is often confused with response time; while they are related, latency refers specifically to the time taken for a request to travel, whereas response time includes the processing time on the server.

## Say it at work

- We need to optimize our database queries because the current latency is hurting the user experience, even though our total throughput is fine.
- Please investigate why the system throughput decreases significantly when we increase the number of concurrent users during peak hours.
