---
id: dns
category: devops
subcategory: infrastructure
level: beginner
related: [dns-record, nameserver, ttl, dnssec]
aliases: ["domain name system", "dns lookup", "dns propagation", "name resolution"]
term: "DNS"
pronunciation: "DEE-EN-ESS"
keywords: ["domain name to ip address", "phone book of the internet", "why a domain does not load", "dns propagation", "lookup a hostname", "nslookup dig", "تحويل اسم النطاق إلى عنوان IP", "دليل هاتف الإنترنت", "لماذا لا يفتح النطاق", "انتشار DNS", "البحث عن اسم مضيف", "الأمران nslookup وdig"]
---

## Definition

DNS (Domain Name System) is the internet's phone book: it turns a name like `example.com` into the IP address of the server that hosts it.

## Where you hear it

When connecting a custom domain to a site, when a site "is down for some people", and in networking and cloud courses.

## Examples

- After changing the DNS record it can take hours to propagate.
- Check with `dig example.com` what the name resolves to.
- After we moved the domain, the old IP address still answered until DNS caught up.

## Common mistake

Blaming the server when the problem is DNS. If the name points to the wrong IP, the server never even gets the request.

## Don't confuse with

An IP address, which is the actual numeric location. DNS is the system that finds it from a name.

## Say it at work

- Is it DNS?
- Flush your DNS cache and try again.
