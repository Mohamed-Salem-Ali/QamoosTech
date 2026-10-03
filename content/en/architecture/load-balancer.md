---
id: load-balancer
category: architecture
level: intermediate
related: [scalability, reverse-proxy, single-point-of-failure]
term: "Load Balancer"
pronunciation: "LOHD BAL-un-ser"
---
## Definition

A component that spreads incoming requests across several servers so no single server is overloaded.

## Where you hear it

Cloud setups and high-availability designs.

## Examples

- The load balancer sends traffic only to healthy servers.
- We have two servers behind a load balancer.

## Common mistake

Keeping user sessions in server memory. The next request may reach a different server and the session is gone.
