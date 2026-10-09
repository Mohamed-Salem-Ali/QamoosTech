---
id: logical-clock
category: architecture
subcategory: data-and-state
level: intermediate
related: [eventual-consistency, race-condition, heartbeat]
aliases: ["lamport clock", "vector clock", "happened-before", "happens-before"]
term: "Logical Clock"
pronunciation: "LOJ-ih-kul KLOK"
keywords: ["order events without real time", "lamport clock", "vector clock", "happened before", "clocks drift between machines", "causal ordering", "ترتيب الأحداث دون الوقت الحقيقي", "ساعة لامبورت", "الساعة المتجهة", "حدث قبل", "ساعات الأجهزة تنحرف", "الترتيب السببي"]
---

## Definition

A logical clock is a counter used to order events in a distributed system without trusting real clocks, which drift apart. A vector clock extends it to detect which events happened before others.

## Where you hear it

In distributed systems courses, database internals (Dynamo, Cassandra) and conflict resolution talks.

## Examples

- Each message carries a Lamport timestamp so the receiver can order events.
- Two vector clocks that can't be ordered mean a concurrent update, so a conflict.
- Lamport timestamps show that the update on node B happened after the write on node A.

## Common mistake

Comparing wall-clock timestamps across servers. A few seconds of drift can reorder events.

## Don't confuse with

A wall clock (system time), which can jump or drift and is not safe for ordering across machines.

## Say it at work

- We can't trust timestamps here; use a logical clock.
- Did A happen before B, or were they concurrent?
