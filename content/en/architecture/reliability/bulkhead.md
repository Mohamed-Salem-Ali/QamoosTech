---
id: bulkhead
category: architecture
subcategory: reliability
level: intermediate
related: [circuit-breaker, timeout]
term: "Bulkhead"
pronunciation: "BULK-hed"
keywords: ["isolate parts of a system", "separate resource pools per service", "one failing dependency should not sink everything", "limit concurrent calls to a dependency", "watertight compartments in a ship", "حاجز عزل بين أجزاء النظام", "فصل موارد كل خدمة", "فشل مكون لا يُغرق النظام كله", "تحديد الطلبات المتزامنة لخدمة", "حواجز السفينة المانعة للتسرب"]
---

## Definition

A bulkhead isolates parts of a system, so a failure in one part cannot use up the resources of the others. The name comes from the watertight compartments in a ship's hull.

## Where you hear it

In reliability reviews and architecture talks, when one slow dependency has taken down features that have nothing to do with it.

## Examples

- Give the payment calls their own thread pool, as a bulkhead.
- A slow search service should not exhaust the connections that checkout needs.
- Each tenant gets its own bulkhead, so one busy customer cannot slow the rest.

## Common mistake

Sharing one pool for everything. Then one stuck dependency fills the pool, and every feature stops with it.

## Don't confuse with

A circuit breaker stops calls to a failing dependency for a while. A bulkhead limits how many resources one part can use, so the failure stays contained. The two work well together.

## Say it at work

- Can we put the report jobs behind a bulkhead?
- Checkout slowed down because the search service was saturated.
