---
id: circuit-breaker
category: architecture
subcategory: reliability
level: intermediate
related: [design-pattern, monolith-vs-microservices, single-point-of-failure]
term: "Circuit Breaker"
pronunciation: "SER-kit BRAY-ker"
keywords: ["prevent cascading failures in microservices","stop calling failing external api","handle api timeouts and errors","resilience design pattern for services","circuit breaker pattern","serkit breyker","fallback when service is down","prevent system overload from errors","automatic retry after service failure","منع انتشار الأعطال في النظام","إيقاف الطلبات للخدمة المعطلة مؤقتا","نمط تصميم لتحمل الأعطال","قاطع الدائرة","سيركيت بريكر","التعامل مع تعطل الخدمات الخارجية","منع انهيار النظام بسبب الأخطاء","إعادة المحاولة بعد فشل الخدمة"]
---

## Definition

A design pattern used in distributed systems to detect failures and temporarily stop sending requests to a failing service, preventing cascading failures.

## Where you hear it

In microservices architecture discussions, resilience planning, and system reliability meetings.

## Examples

- The circuit breaker opened after the payment service threw too many errors, falling back to a cached response.
- We configured the circuit breaker to automatically retry the remote API after a thirty-second cooling period.

## Common mistake

Confusing it with a simple timeout, whereas a circuit breaker tracks failure rates over time and stops calling the service entirely until it recovers.

## Don't confuse with

Circuit breaker vs. Load balancer: A load balancer distributes incoming traffic across multiple instances to improve performance, whereas a circuit breaker stops traffic to a failing service to prevent system overload.

## Say it at work

- I think we should implement a circuit breaker here so that the entire system doesn't hang if the external API goes down.
- Please review the pull request where I added a circuit breaker to handle potential timeouts from the authentication service.
