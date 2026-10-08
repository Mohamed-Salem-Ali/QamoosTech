---
id: failover
category: architecture
subcategory: reliability
level: intermediate
related: [high-availability, primary-replica, single-point-of-failure, read-replica]
aliases: ["failback", "automatic failover"]
term: "Failover"
pronunciation: "FAYL-oh-ver"
keywords: ["switch to backup automatically", "standby takes over", "primary goes down", "promote a replica", "automatic recovery", "failback", "التحويل إلى النسخة الاحتياطية تلقائياً", "الاحتياطي يتولى العمل", "سقوط الأساسي", "ترقية نسخة", "تعافٍ تلقائي", "العودة للأساسي"]
---

## Definition

Failover is the automatic switch to a standby component when the main one fails, so the service keeps running with little or no interruption.

## Where you hear it

In database replication, load balancers, cloud multi-zone setups and incident reviews.

## Examples

- The replica was promoted automatically; failover took 20 seconds.
- We test failover every quarter.

## Common mistake

Never testing it. A failover that has never been exercised often fails when it is needed.

## Don't confuse with

Backup, which is a copy of data to restore from later. Failover keeps the service running now.

## Say it at work

- What triggers the failover?
- After failover, point the app at the new primary.
