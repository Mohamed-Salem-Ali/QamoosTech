---
id: error-budget
category: architecture
subcategory: reliability
level: intermediate
related: [sla, monitoring, high-availability]
aliases: ["slo", "service level objective", "error budgets"]
term: "Error Budget"
pronunciation: "ER-er BUJ-it"
keywords: ["allowed amount of failure", "slo 99.9 percent", "spend it on releases", "freeze deploys when used up", "reliability target", "sre practice", "المقدار المسموح من الفشل", "هدف مستوى الخدمة 99.9%", "أنفقها على الإصدارات", "جمّد النشر عند نفادها", "هدف الموثوقية", "ممارسة SRE"]
---

## Definition

An error budget is the amount of unreliability a service is allowed over a period, for example 0.1% downtime for a 99.9% target. While budget remains, teams can ship; when it is spent, they focus on stability.

## Where you hear it

In SRE and DevOps teams, SLO reviews, release planning and reliability arguments between product and engineering.

## Examples

- We've used 80% of this month's error budget, so we slow down releases.
- A 99.9% target gives about 43 minutes of downtime a month.

## Common mistake

Aiming for 100%. It is impossible, slows every release, and costs far more than users notice.

## Don't confuse with

An SLA, which is a promise to customers, often with penalties. The error budget is the internal margin to the target.

## Say it at work

- How much error budget is left?
- We're out of budget; freeze risky deploys.
