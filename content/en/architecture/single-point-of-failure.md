---
id: single-point-of-failure
category: architecture
level: intermediate
related: [load-balancer, fail-open-vs-fail-closed]
term: "Single Point of Failure"
pronunciation: "SING-gul POYNT uv FAYL-yer"
keywords: ["spof","component that crashes the system","single point of failure","weak link in architecture","system fails if one part breaks","critical failure component","avoiding system downtime","server outage risk","single point of failure abbreviation","نقطة فشل وحيدة","مكون يعطل النظام كاملاً","مكون يؤدي لسقوط النظام","نقطة الضعف في النظام","مكان تعطل النظام بالكامل","خطر تعطل الخادم الوحيد","سنجل بوينت أوف فيلر","إزالة نقطة الفشل"]
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

## Don't confuse with

Single point of failure is often confused with a bottleneck; while a SPOF causes a total system outage if it fails, a bottleneck merely limits the system's performance or throughput without necessarily crashing it.

## Say it at work

- We need to address this database instance because it's currently a major single point of failure for our entire service.
- I have identified a single point of failure in the authentication module and recommend implementing a redundant service to improve our availability.
