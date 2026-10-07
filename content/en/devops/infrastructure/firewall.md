---
id: firewall
category: devops
subcategory: infrastructure
level: beginner
related: [security-group, subnet, least-privilege]
aliases: ["iptables", "ufw", "network acl", "network acls"]
term: "Firewall"
pronunciation: "FYR-wawl"
keywords: ["blocks unwanted traffic", "allow rules for ports", "inbound and outbound", "port closed", "network security", "ufw iptables", "يمنع الحركة غير المرغوبة", "قواعد سماح للمنافذ", "الوارد والصادر", "المنفذ مغلق", "أمن الشبكة", "الأداتان ufw وiptables"]
---

## Definition

A firewall is a security system that allows or blocks network traffic according to rules, such as which ports and addresses may connect.

## Where you hear it

In server setup (`ufw`), cloud security groups, and "connection refused or timed out" troubleshooting.

## Examples

- Open port 443 in the firewall and keep everything else closed.
- The request times out because the firewall drops it.

## Common mistake

Opening a port to the whole internet "just to test" and forgetting it. Allow only the sources that need it.

## Don't confuse with

Authentication, which checks who you are. A firewall checks where traffic comes from and goes to.

## Say it at work

- Is the port blocked by the firewall?
- Allow only our office IP on port 22.
