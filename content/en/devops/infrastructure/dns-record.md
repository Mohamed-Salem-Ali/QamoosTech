---
id: dns-record
category: devops
subcategory: infrastructure
level: intermediate
related: [dns, nameserver, ttl]
aliases: ["cname", "cname record", "a record", "aaaa record", "mx record", "txt record", "dns records"]
term: "DNS Record"
pronunciation: "DEE-EN-ESS REK-ord"
keywords: ["a record cname mx txt", "maps name to value", "point domain to server", "email records spf dkim", "aaaa ipv6 record", "add a record in the dashboard", "سجلات A وCNAME وMX وTXT", "يربط الاسم بقيمة", "توجيه النطاق إلى الخادم", "سجلات البريد SPF وDKIM", "سجل AAAA لـ IPv6", "إضافة سجل من لوحة التحكم"]
---

## Definition

A DNS record is one entry in a domain's DNS settings. Common types: `A` (name to IPv4), `AAAA` (name to IPv6), `CNAME` (name to another name), `MX` (mail servers) and `TXT` (free text, e.g. verification).

## Where you hear it

When pointing a domain at Vercel, Render or AWS, verifying a domain, and setting up email.

## Examples

- Add a CNAME for `www` pointing to the hosting provider.
- The root domain needs an A record, not a CNAME.

## Common mistake

Putting a CNAME on the root (apex) domain. Most DNS providers don't allow it; use an A record or ALIAS.

## Don't confuse with

A nameserver, which is the server that holds and answers for your records.

## Say it at work

- Which record type do I need?
- Add the TXT record to verify the domain.
