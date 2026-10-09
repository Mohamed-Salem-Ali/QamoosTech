---
id: routing-table
category: devops
subcategory: infrastructure
level: intermediate
related: [subnet, default-gateway, firewall]
aliases: ["route table", "routes"]
term: "Routing Table"
pronunciation: "ROW-ting TAY-bul"
keywords: ["rules for where packets go", "destination to next hop", "route to the internet", "0.0.0.0/0", "attach to a subnet", "vpc routes", "قواعد وجهة الحزم", "من الوجهة إلى القفزة التالية", "مسار إلى الإنترنت", "المسار الافتراضي 0.0.0.0/0", "ربطه بشبكة فرعية", "مسارات VPC"]
---

## Definition

A routing table is a set of rules that tells a network where to send traffic: for each destination range it names the next hop, such as the internet gateway.

## Where you hear it

In AWS VPC and on-premise network setup, and when a server "can't reach the internet".

## Examples

- The public subnet's route table sends `0.0.0.0/0` to the internet gateway.
- No route means no connection.
- The routing table sends traffic for the private subnet through the NAT gateway.

## Common mistake

Forgetting to attach the route table to the subnet. The rule exists but nothing uses it.

## Don't confuse with

A firewall rule, which decides what is allowed. A route decides where traffic goes.

## Say it at work

- Check the route table for that subnet.
- Add a route to the NAT gateway.
