---
id: observability
category: architecture
subcategory: reliability
level: intermediate
related: [monitoring, logging]
term: "Observability"
pronunciation: "ob-zer-va-BIL-i-tee"
keywords: ["understand why system is failing","debug complex distributed systems","logs metrics and traces collection","measure internal system state","beyond simple uptime monitoring","find root cause of errors","analyze service performance data","how to track system health","observability vs monitoring","system visibility tools","فهم أسباب تعطل النظام","تحليل حالة النظام الداخلية","الفرق بين المراقبة والتشخيص","تتبع أداء الخدمات البرمجية","أدوات تتبع سجلات النظام","معرفة سبب فشل الطلبات","قياس كفاءة النظام البرمجي","تشخيص مشاكل البنية التحتية","مراقبة وتتبع أخطاء النظام","أوبزيرفابيليتي"]
---

## Definition

Observability is the measure of how well you can understand the internal state of a system based solely on the data it produces. It relies on three pillars: logs, metrics, and traces.

## Where you hear it

In discussions about system reliability, incident response, and infrastructure maintenance.

## Examples

- We need to improve our observability to debug these intermittent latency spikes.
- Adding better observability tools helped us identify the root cause of the system failure.

## Common mistake

Thinking that observability is just a synonym for monitoring; monitoring tells you that a system is broken, while observability helps you understand why it is broken.

## Don't confuse with

Observability explains why a system is failing based on its outputs, whereas monitoring only tells you when a system is failing.

## Say it at work

- Let's check our observability dashboard to see what caused the service to slow down during peak hours.
- Please ensure that all new microservices include proper observability configurations before merging this pull request.
