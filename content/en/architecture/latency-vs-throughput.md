---
id: latency-vs-throughput
category: architecture
level: intermediate
related: [cache, scalability]
term: "Latency vs Throughput"
pronunciation: "LAY-ten-see versus THROO-put"
---
## Definition

*Latency* is how long one request takes. *Throughput* is how many requests the system handles per second.

## Where you hear it

Performance testing and system design interviews.

## Examples

- The latency is only 80 ms, but throughput drops under heavy load.
- Adding servers improves throughput, not latency.

## Common mistake

Mixing them up. A system can have low latency and low throughput, or the opposite.

## Don't confuse with

Latency is often confused with response time; while they are related, latency refers specifically to the time taken for a request to travel, whereas response time includes the processing time on the server.

## Say it at work

- We need to optimize our database queries because the current latency is hurting the user experience, even though our total throughput is fine.
- Please investigate why the system throughput decreases significantly when we increase the number of concurrent users during peak hours.
