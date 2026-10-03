---
id: health-check
category: devops
level: intermediate
related: [monitoring, load-balancer]
term: "Health Check"
pronunciation: "HELTH chek"
---
## Definition

A small endpoint, often `/health`, that tells tools whether the app is running properly.

## Where you hear it

Load balancers, Kubernetes, and monitoring tools.

## Examples

- The load balancer calls `/health` every 10 seconds.
- The health check fails, so the server is removed from rotation.

## Common mistake

A health check that always returns OK. It should also check important dependencies such as the database.
