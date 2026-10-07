---
id: high-availability
category: architecture
subcategory: reliability
level: beginner
related: [load-balancer, single-point-of-failure, health-check]
term: "High Availability (HA)"
pronunciation: "HY a-vuh-luh-BIL-i-tee"
keywords: ["ensure system stays online","prevent service downtime","eliminate single point failure","keep servers running constantly","always on system design","server redundancy architecture","fault tolerant system setup","how to avoid outages","ha configuration","continuous uptime design","ضمان استمرار عمل النظام","تقليل وقت توقف الخدمة","منع توقف النظام كليا","تصميم انظمة لا تتوقف","كيفية تجنب اعطال الخوادم","بنية تحتية بدون توقف","مفهوم التوفر العالي","تجاوز اعطال الخوادم تلقائيا","هاي افيلابيليتي","ضمان جاهزية الخدمة دائما"]
---

## Definition

High Availability refers to a system design approach that ensures continuous operation and minimal downtime, typically by eliminating single points of failure. It allows services to remain accessible even if a server or component fails.

## Where you hear it

- In infrastructure planning meetings
- In SLA discussions
- During architecture reviews

## Examples

- We need to configure a load balancer to achieve high availability across our server instances.
- The database cluster is set up for high availability with automated failover.

## Common mistake

Confusing high availability with scalability, assuming that a system that handles more traffic is automatically immune to hardware failures.

## Don't confuse with

High availability differs from disaster recovery in that high availability focuses on keeping the system running during minor failures, while disaster recovery focuses on restoring operations after a catastrophic event.

## Say it at work

- We should check if our current architecture meets the high availability requirements for this new service.
- Please update the documentation to reflect the high availability configuration of the production cluster.
