---
id: security-group
category: devops
subcategory: infrastructure
level: intermediate
related: [firewall, subnet, least-privilege]
aliases: ["security groups"]
term: "Security Group"
pronunciation: "sih-KYOOR-ih-tee GROOP"
keywords: ["aws instance firewall", "inbound outbound rules", "allow from another group", "stateful rules", "per instance rules", "port 5432 from app only", "جدار ناري لنسخة AWS", "قواعد واردة وصادرة", "السماح من مجموعة أخرى", "قواعد ذات حالة", "قواعد لكل نسخة", "المنفذ 5432 من التطبيق فقط"]
---

## Definition

A security group is a cloud firewall attached to an instance or service, with allow rules for inbound and outbound traffic. Anything not allowed is blocked.

## Where you hear it

In AWS, GCP and Azure console setup, Terraform files and "why can't my app reach the database?" debugging.

## Examples

- The database security group only allows port 5432 from the app's group.
- Security groups are stateful, so replies are allowed automatically.
- The security group allows port 443 from anywhere and port 22 only from the office.

## Common mistake

Using `0.0.0.0/0` as the source for admin or database ports. That exposes them to the entire internet.

## Don't confuse with

A network ACL, a stateless rule list that applies to a whole subnet instead of one instance.

## Say it at work

- Which security group is attached?
- Reference the app's group instead of an IP range.
