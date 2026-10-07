---
id: subnet
category: devops
subcategory: infrastructure
level: intermediate
related: [routing-table, default-gateway, security-group]
aliases: ["subnet mask", "cidr", "subnets", "vpc"]
term: "Subnet"
pronunciation: "SUB-net"
keywords: ["part of a network", "cidr 10.0.1.0/24", "public and private subnets", "subnet mask", "vpc subdivision", "range of ip addresses", "جزء من شبكة", "الترميز CIDR مثل 10.0.1.0/24", "شبكات فرعية عامة وخاصة", "قناع الشبكة", "تقسيم الـ VPC", "نطاق عناوين IP"]
---

## Definition

A subnet is a smaller section of a larger network with its own range of IP addresses, written in CIDR form such as `10.0.1.0/24`. The subnet mask says how much of an address identifies the network.

## Where you hear it

In AWS VPC setup, Kubernetes and Docker networking, and firewall rules based on IP ranges.

## Examples

- Put the database in a private subnet with no internet route.
- A /24 subnet has 256 addresses.

## Common mistake

Choosing ranges that overlap with another network you'll connect later. Then routing between them breaks.

## Don't confuse with

A VPC, the whole private network. Subnets are the slices inside it.

## Say it at work

- Which subnet is this instance in?
- Allow the whole `10.0.0.0/16` range.
