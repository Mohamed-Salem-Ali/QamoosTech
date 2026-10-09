---
id: gossip-protocol
category: architecture
subcategory: patterns
level: intermediate
related: [heartbeat, eventual-consistency, quorum]
aliases: ["epidemic protocol"]
term: "Gossip Protocol"
pronunciation: "GOS-ip PROH-tuh-kol"
keywords: ["nodes tell random neighbours", "spread information like rumours", "cluster membership", "cassandra consul", "no central coordinator", "converges quickly", "العقد تخبر جيراناً عشوائيين", "نشر المعلومات كالإشاعات", "عضوية العنقود", "‏Cassandra وConsul", "بلا منسق مركزي", "يتقارب بسرعة"]
---

## Definition

A gossip protocol spreads information through a cluster the way rumours spread: each node regularly tells a few random peers what it knows, and soon every node knows.

## Where you hear it

In Cassandra, Consul, and other peer-to-peer or decentralised cluster systems.

## Examples

- Nodes use gossip to learn which peers are alive.
- Gossip scales well because no node talks to everyone.
- A new node joined the cluster and learned the others' addresses within seconds.

## Common mistake

Expecting instant, exact agreement. Gossip is eventually consistent; news takes a few rounds to reach everyone.

## Don't confuse with

A central registry, where one service holds the truth. Gossip has no single owner of the information.

## Say it at work

- Membership spreads by gossip.
- How often do nodes gossip?
