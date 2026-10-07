---
id: strong-consistency
category: architecture
subcategory: data-and-state
level: intermediate
related: [eventual-consistency, acid, isolation-level]
aliases: ["linearizability", "strongly consistent"]
term: "Strong Consistency"
pronunciation: "STRONG kun-SIS-ten-see"
keywords: ["every read sees the latest write", "no stale reads", "linearizable", "single source of truth", "slower but correct", "bank balance", "كل قراءة ترى آخر كتابة", "لا قراءات قديمة", "قابل للتسلسل الخطي", "مصدر وحيد للحقيقة", "أبطأ لكنه صحيح", "رصيد البنك"]
---

## Definition

Strong consistency guarantees that every read sees the result of the latest completed write, no matter which copy you ask.

## Where you hear it

In banking and booking systems, distributed database choices, and CAP theorem discussions.

## Examples

- Account balances need strong consistency.
- Strong consistency across regions adds latency.

## Common mistake

Choosing it everywhere. It costs speed and availability; use it only where stale data causes real harm.

## Don't confuse with

Eventual consistency, which allows short-lived disagreement between copies in exchange for speed and availability.

## Say it at work

- Do we need strong consistency here?
- Read from the primary to get the latest value.
