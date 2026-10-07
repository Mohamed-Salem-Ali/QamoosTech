---
id: eventual-consistency
category: architecture
subcategory: data-and-state
level: intermediate
related: [strong-consistency, primary-replica, acid]
aliases: ["eventually consistent"]
term: "Eventual Consistency"
pronunciation: "ih-VEN-choo-ul kun-SIS-ten-see"
keywords: ["replicas catch up later", "stale reads for a moment", "converges over time", "distributed databases", "trade accuracy for availability", "write now read later", "النسخ تلحق لاحقاً", "قراءات قديمة للحظة", "يتقارب مع الوقت", "قواعد البيانات الموزعة", "مقايضة الدقة بالتوفر", "اكتب الآن واقرأ لاحقاً"]
---

## Definition

Eventual consistency means that after a write, different copies of the data may briefly disagree, but if no new writes arrive they will all end up with the same value.

## Where you hear it

In distributed databases (DynamoDB, Cassandra), read replicas, DNS propagation and CAP theorem talks.

## Examples

- The profile update shows on the replica a second later; it's eventually consistent.
- Don't read from a replica right after a write if you need the new value.

## Common mistake

Assuming a read right after a write returns the new value. With replicas it might return the old one.

## Don't confuse with

Strong consistency, where every read sees the latest write, at the cost of speed or availability.

## Say it at work

- Is this read eventually consistent?
- Users may see old data for a few seconds.
