---
id: scalability
category: architecture
level: intermediate
related: [load-balancer, cache, single-point-of-failure]
term: "Scalability"
pronunciation: "skay-luh-BIL-ih-tee"
---
## Definition

How well a system keeps working when users, data, or traffic grow. You can scale up (stronger server) or scale out (more servers).

## Where you hear it

System design, interviews, and CVs.

## Examples

- Can this design scale to 100,000 users?
- We scaled out by adding two more servers behind a load balancer.

## Common mistake

Saying "scalable" without explaining how. Say what scales and how, for example "horizontally with stateless containers".

## Don't confuse with

Scalability is often confused with elasticity; while scalability is the ability to handle increased load by adding resources, elasticity is the ability to automatically add or remove those resources based on real-time demand.

## Say it at work

- We need to ensure our database architecture has enough scalability to handle the projected traffic spike next month.
- The current monolithic structure limits our scalability, so I suggest we migrate to a microservices approach.
