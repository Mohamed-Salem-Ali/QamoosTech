---
id: distributed-monolith
category: architecture
subcategory: patterns
level: intermediate
related: [monolith-vs-microservices, decoupling, modular-monolith]
term: "Distributed Monolith"
pronunciation: "dis-TRIB-yoo-tid MON-oh-lith"
keywords: ["microservices that must deploy together", "tight coupling over the network", "worst of both worlds", "shared database", "change one break many", "chatty services", "خدمات مصغرة يجب نشرها معاً", "ترابط وثيق عبر الشبكة", "أسوأ ما في الاثنين", "قاعدة بيانات مشتركة", "تغيير واحد يكسر كثيراً", "خدمات كثيرة الحوار"]
---

## Definition

A distributed monolith is a system split into many services that are still so tightly coupled they must be changed and deployed together. It has the cost of microservices without their benefits.

## Where you hear it

In architecture reviews and war stories about failed microservice migrations.

## Examples

- Five services share one database and deploy in lockstep; it's a distributed monolith.
- We got network latency and operational cost but no independence.

## Common mistake

Splitting before the boundaries are understood. Services with unclear boundaries end up calling each other constantly.

## Don't confuse with

A modular monolith, one deployable with clean internal modules. It avoids the network cost while keeping boundaries.

## Say it at work

- Are we building microservices or a distributed monolith?
- If they always deploy together, merge them.
