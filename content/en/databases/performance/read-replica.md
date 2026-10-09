---
id: read-replica
category: databases
subcategory: performance
level: intermediate
related: [primary-replica, eventual-consistency, failover]
tags: [sql, postgresql]
aliases: ["replication lag", "read replicas"]
term: "Read Replica"
pronunciation: "REED REP-lih-kuh"
keywords: ["copy used for reads", "scale read traffic", "replication lag", "send reports to the replica", "primary handles writes", "stale reads", "نسخة تُستخدم للقراءة", "توسيع حركة القراءة", "تأخر النسخ", "إرسال التقارير إلى النسخة", "الأساسية تتولى الكتابة", "قراءات قديمة"]
---

## Definition

A read replica is a copy of a database that receives changes from the primary and serves read-only queries, spreading the read load. It may lag slightly behind the primary.

## Where you hear it

In managed databases (RDS, Supabase), scaling talks and bugs where data written a moment ago isn't visible yet.

## Examples

- Heavy reports run against the read replica so the primary stays fast.
- Read your own writes from the primary.
- The dashboard reads from a read replica, which lags a few seconds behind the primary.

## Common mistake

Reading from the replica right after a write. Replication lag can return the old value.

## Don't confuse with

A backup, which is a copy kept for recovery. A replica is live and serves queries.

## Say it at work

- How far behind is the replica?
- Route the analytics queries to the replica.
