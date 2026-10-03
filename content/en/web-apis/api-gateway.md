---
id: api-gateway
category: web-apis
level: intermediate
related: [monolith-vs-microservices, load-balancer, reverse-proxy]
term: "API Gateway"
pronunciation: "AY-PEE GAYT-way"
keywords: ["single entry point for services","microservices traffic router","manage api requests centrally","centralized authentication and rate limiting","api management server","routing requests to microservices","unified api access layer","gateway for backend services","api proxy for microservices","handle cross cutting concerns","نقطة دخول موحدة للخدمات","بوابة إدارة طلبات البرمجيات","توجيه الطلبات للخدمات المصغرة","إدارة مركزية لطلبات الـ api","خادم وسيط للخدمات المصغرة","بوابة الربط البرمجي","إيه بي آي جيت واي","تنظيم الاتصال بين الخدمات","بوابة توجيه الطلبات البرمجية","مركز التحكم في طلبات النظام"]
---

## Definition

An API Gateway is a server that acts as a single entry point for a system, routing incoming requests to the appropriate microservices. It handles cross-cutting concerns like authentication, rate limiting, and logging before forwarding the request.

## Where you hear it

In system architecture meetings, backend infrastructure discussions, and when designing microservices.

## Examples

- We need to configure the API Gateway to route traffic to the new user service.
- The API Gateway handles all authentication checks so our microservices don't have to.

## Common mistake

Confusing an API Gateway with a Load Balancer; while a Load Balancer distributes traffic to identical instances, an API Gateway routes requests to different services based on logic or path.

## Don't confuse with

API Gateway vs Reverse Proxy; while a reverse proxy typically handles load balancing and security for a single backend or group of servers, an API Gateway provides additional features like request transformation, protocol translation, and complex routing for microservices.

## Say it at work

- Let's check if the API Gateway is correctly forwarding the headers to our internal services.
- I have updated the API Gateway configuration to include the new endpoint for the payment service.
