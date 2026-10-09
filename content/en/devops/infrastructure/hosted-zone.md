---
id: hosted-zone
category: devops
subcategory: infrastructure
level: intermediate
related: [dns-record, nameserver, dns]
aliases: ["dns zone", "zone file", "route 53 zone"]
term: "Hosted Zone"
pronunciation: "HOH-stid ZOHN"
keywords: ["container for dns records", "route 53 zone", "one zone per domain", "public and private zone", "zone file", "delegate a subdomain", "حاوية لسجلات DNS", "منطقة Route 53", "منطقة لكل نطاق", "منطقة عامة وخاصة", "ملف المنطقة", "تفويض نطاق فرعي"]
---

## Definition

A hosted zone is a container for all the DNS records of one domain (or subdomain) in a DNS service such as AWS Route 53 or Cloudflare.

## Where you hear it

In AWS Route 53 consoles, Terraform DNS definitions and domain migrations.

## Examples

- Create a hosted zone for `example.com`, then copy its nameservers to the registrar.
- A private hosted zone resolves names only inside the VPC.
- The hosted zone for the domain lists the mail server and the website records.

## Common mistake

Creating two zones for the same domain and editing the wrong one. Only the zone the registrar points to is live.

## Don't confuse with

A DNS record, which is one entry. The zone holds all the entries.

## Say it at work

- Which hosted zone has the live records?
- Add it to the zone, not the registrar.
