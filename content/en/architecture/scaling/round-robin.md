---
id: round-robin
category: architecture
subcategory: scaling
level: beginner
related: [load-balancer, sticky-sessions, horizontal-scaling]
aliases: ["weighted round robin", "least connections"]
term: "Round Robin"
pronunciation: "ROWND ROB-in"
keywords: ["take turns", "rotate through servers", "simplest balancing method", "equal share of requests", "weighted round robin", "dns round robin", "التناوب بالدور", "التدوير على الخوادم", "أبسط طريقة توزيع", "حصة متساوية من الطلبات", "التوزيع الدوري الموزون", "التوزيع الدوري في DNS"]
---

## Definition

Round robin is a way to share work by taking turns: request 1 goes to server A, 2 to B, 3 to C, then back to A.

## Where you hear it

In load balancer and DNS settings, scheduling discussions and OS process scheduling.

## Examples

- The balancer uses round robin across the three servers.
- Round robin ignores how busy each server is.
- Round robin sends the first request to server A and the second one to server B.

## Common mistake

Assuming it balances load. Equal numbers of requests can still mean unequal work; consider least connections.

## Don't confuse with

Least connections, which sends the next request to the least busy server.

## Say it at work

- Start with round robin; switch if load is uneven.
- Round robin with weights for the bigger server.
