---
id: leader-election
category: architecture
subcategory: reliability
level: intermediate
related: [quorum, heartbeat, failover]
aliases: ["leader", "split brain"]
term: "Leader Election"
pronunciation: "LEE-der ih-LEK-shun"
keywords: ["choose one coordinator", "only one node does the job", "new leader after failure", "raft consensus", "primary selection", "avoid two leaders", "اختيار منسق واحد", "عقدة واحدة فقط تؤدي المهمة", "قائد جديد بعد الفشل", "إجماع Raft", "اختيار الأساسية", "تجنب قائدين"]
---

## Definition

Leader election is how a group of nodes picks exactly one of them to coordinate work, and picks a new one automatically if the leader fails.

## Where you hear it

In etcd, ZooKeeper, Kafka and database clusters, and when a scheduled job must run on only one instance.

## Examples

- The followers elected a new leader after the old one stopped sending heartbeats.
- Only the leader runs the nightly cleanup job.
- The cluster elects a new leader within seconds when the old one crashes.

## Common mistake

Letting two nodes both believe they are the leader (split brain). A quorum rule prevents this.

## Don't confuse with

A load balancer, which spreads requests across many equal nodes. A leader is one node with a special role.

## Say it at work

- Who is the current leader?
- A leader election takes a few seconds.
