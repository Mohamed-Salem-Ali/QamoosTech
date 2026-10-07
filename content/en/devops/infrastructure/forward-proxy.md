---
id: forward-proxy
category: devops
subcategory: infrastructure
level: intermediate
related: [reverse-proxy, firewall, cdn]
aliases: ["proxy server", "corporate proxy"]
term: "Forward Proxy"
pronunciation: "FOR-werd PROK-see"
keywords: ["sits in front of clients", "hides client ip", "corporate proxy", "filter outgoing traffic", "vpn like", "squid", "يقف أمام العملاء", "يخفي IP العميل", "وكيل الشركة", "تصفية الحركة الصادرة", "شبيه بـ VPN", "أداة Squid"]
---

## Definition

A forward proxy sits in front of clients and makes requests to the internet on their behalf. It can hide their addresses, cache responses and filter what they can visit.

## Where you hear it

In corporate networks, web scraping setups, security reviews and "proxy settings" in tools and package managers.

## Examples

- All outgoing traffic goes through the company's forward proxy.
- pip fails because the corporate proxy isn't configured.

## Common mistake

Mixing it up with a reverse proxy. A forward proxy serves the clients; a reverse proxy serves the servers.

## Don't confuse with

A reverse proxy, which sits in front of servers and hides them from clients.

## Say it at work

- Set the `HTTPS_PROXY` variable.
- Is this going through the proxy?
