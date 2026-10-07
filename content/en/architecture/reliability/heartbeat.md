---
id: heartbeat
category: architecture
subcategory: reliability
level: beginner
related: [health-check, failover, leader-election]
aliases: ["keepalive", "liveness signal"]
term: "Heartbeat"
pronunciation: "HART-beet"
keywords: ["i am alive signal", "periodic ping", "detect dead nodes", "missed heartbeats", "keepalive message", "cluster membership", "إشارة أنا حي", "نبضة دورية", "اكتشاف العقد الميتة", "نبضات فائتة", "رسالة إبقاء الاتصال", "عضوية العنقود"]
---

## Definition

A heartbeat is a small signal a service sends at regular intervals to say "I am alive". If the heartbeats stop, others assume it has failed.

## Where you hear it

In clusters, Kubernetes and database replication, job workers, and monitoring alerts about missing heartbeats.

## Examples

- A node that misses three heartbeats is marked down.
- The worker sends a heartbeat every 10 seconds so the job isn't reassigned.

## Common mistake

Setting the timeout too short. A brief network hiccup then looks like a dead node and triggers a needless failover.

## Don't confuse with

A health check, where something outside asks the service if it is healthy. A heartbeat is sent by the service itself.

## Say it at work

- We're missing heartbeats from worker 3.
- Heartbeat interval 5 seconds, timeout 15.
