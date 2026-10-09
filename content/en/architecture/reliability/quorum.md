---
id: quorum
category: architecture
subcategory: reliability
level: intermediate
related: [leader-election, eventual-consistency, failover]
aliases: ["majority quorum"]
term: "Quorum"
pronunciation: "KWOR-um"
keywords: ["majority of nodes must agree", "n/2 plus 1", "split brain protection", "read and write quorum", "odd number of nodes", "consensus", "غالبية العقد يجب أن توافق", "النصف زائد واحد", "الحماية من انقسام الدماغ", "نصاب القراءة والكتابة", "عدد فردي من العقد", "الإجماع"]
---

## Definition

A quorum is the minimum number of nodes, usually a majority, that must agree for an operation or decision to count. It prevents two groups from making conflicting decisions.

## Where you hear it

In clustered databases, Raft and Paxos, Kubernetes etcd, and Cassandra consistency levels.

## Examples

- With 5 nodes, a quorum is 3, so the cluster survives 2 failures.
- A cluster that lost quorum stops accepting writes.
- A write succeeds once two of the three replicas confirm it, which is a quorum.

## Common mistake

Running an even number of nodes. 4 nodes tolerate no more failures than 3, so use odd numbers.

## Don't confuse with

Unanimity, where all nodes must agree. A quorum needs only a majority.

## Say it at work

- Do we still have quorum?
- Three or five nodes, never four.
