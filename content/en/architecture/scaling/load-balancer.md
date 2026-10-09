---
id: load-balancer
category: architecture
subcategory: scaling
level: intermediate
related: [scalability, reverse-proxy, single-point-of-failure, round-robin]
term: "Load Balancer"
pronunciation: "LOHD BAL-un-ser"
keywords: ["distribute traffic across servers","prevent server overload","spread incoming requests","balance network traffic","reverse proxy vs load balancer","lod balancer","load balancr","route requests to multiple servers","high availability traffic routing","توزيع الطلبات على الخوادم","موزع الأحمال","منع الضغط على خادم واحد","توزيع حركة المرور","توجيه الطلبات للسيرفرات","لود بالانسر","موازن الأحمال","توزيع الترافيك على السيرفرات"]
---
## Definition

A component that spreads incoming requests across several servers so no single server is overloaded.

## Where you hear it

Cloud setups and high-availability designs.

## Examples

- The load balancer sends traffic only to healthy servers.
- We have two servers behind a load balancer.
- The load balancer routes each new connection to the server with the fewest active requests.

## Common mistake

Keeping user sessions in server memory. The next request may reach a different server and the session is gone.

## Don't confuse with

Load balancer vs. reverse proxy: A load balancer distributes traffic across multiple servers to improve performance, while a reverse proxy acts as an intermediary that handles requests for a single backend server to provide security or caching.

## Say it at work

- We should check the load balancer logs to see if the traffic is being distributed correctly among the nodes.
- Please ensure the new instance is registered with the load balancer before we proceed with the deployment.
