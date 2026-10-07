---
id: consumer-group
category: architecture
subcategory: patterns
level: intermediate
related: [competing-consumers, message-queue, pub-sub]
aliases: ["kafka consumer group"]
term: "Consumer Group"
pronunciation: "kun-SOO-mer GROOP"
keywords: ["kafka consumers share partitions", "group id", "each partition read by one consumer", "parallel reading", "offset per group", "independent groups", "مستهلكو Kafka يتقاسمون الأقسام", "معرّف المجموعة", "كل قسم يقرؤه مستهلك واحد", "قراءة متوازية", "موضع القراءة لكل مجموعة", "مجموعات مستقلة"]
---

## Definition

A consumer group is a set of consumers that share the work of reading a topic: each partition is read by only one member of the group, and different groups each receive all the messages.

## Where you hear it

In Kafka, Kinesis and Redis Streams, and when scaling event processors.

## Examples

- The billing and analytics services use separate consumer groups.
- More consumers than partitions leaves some idle.

## Common mistake

Giving two different services the same group id. They then split the messages instead of each getting all of them.

## Don't confuse with

Competing consumers, the general pattern. A consumer group is how Kafka names and tracks it.

## Say it at work

- What's the group id for this service?
- Consumer lag is growing in the payments group.
