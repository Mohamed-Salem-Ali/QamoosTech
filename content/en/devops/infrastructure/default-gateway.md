---
id: default-gateway
category: devops
subcategory: infrastructure
level: intermediate
related: [routing-table, subnet, dns]
aliases: ["gateway", "internet gateway", "nat gateway"]
term: "Default Gateway"
pronunciation: "dih-FAWLT GAYT-way"
keywords: ["router that leads out", "where unknown traffic goes", "exit of the local network", "internet gateway nat gateway", "first hop", "leave the subnet", "الموجّه الذي يقود للخارج", "وجهة الحركة غير المعروفة", "مخرج الشبكة المحلية", "بوابة الإنترنت وبوابة NAT", "القفزة الأولى", "مغادرة الشبكة الفرعية"]
---

## Definition

The default gateway is the router a device sends traffic to when the destination is outside its own network. It is the way out to the rest of the world.

## Where you hear it

In home and office network setup, cloud networking and "can reach local but not internet" troubleshooting.

## Examples

- The laptop can reach the printer but not the internet; check the default gateway.
- In AWS, the internet gateway acts as the way out for public subnets.
- The server's default gateway is misconfigured, so it cannot reach the database subnet.

## Common mistake

Thinking the gateway is the DNS server. The gateway routes packets; DNS turns names into IPs.

## Don't confuse with

A reverse proxy or API gateway, which handle incoming application traffic rather than network exit.

## Say it at work

- What's the default gateway?
- Without a gateway nothing leaves the subnet.
