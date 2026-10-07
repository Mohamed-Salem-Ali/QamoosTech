---
id: nameserver
category: devops
subcategory: infrastructure
level: intermediate
related: [dns, dns-record, domain-registrar]
aliases: ["ns record", "name server", "authoritative dns"]
term: "Nameserver"
pronunciation: "NAYM-sur-ver"
keywords: ["server that answers dns questions", "ns record", "change nameservers at registrar", "cloudflare nameservers", "authoritative dns", "who manages the records", "خادم يجيب عن أسئلة DNS", "سجل NS", "تغيير الخوادم الاسمية عند المسجّل", "الخوادم الاسمية في Cloudflare", "DNS المعتمد", "من يدير السجلات"]
---

## Definition

A nameserver is a server that stores a domain's DNS records and answers questions about them. The domain's nameservers decide where its records are managed.

## Where you hear it

When moving DNS to Cloudflare or AWS Route 53, and when records you added "do nothing".

## Examples

- Point the domain's nameservers to Cloudflare at the registrar.
- Records added at the old provider are ignored after the switch.

## Common mistake

Adding records in a provider that isn't the domain's active nameserver. They have no effect.

## Don't confuse with

A registrar, the company you buy the domain from. It may or may not also run your nameservers.

## Say it at work

- Who hosts our nameservers?
- Update the NS records at the registrar.
