---
id: dnssec
category: security
subcategory: application-security
level: intermediate
related: [dns, digital-signature, digital-certificate]
aliases: ["dns security extensions", "dns spoofing", "dns poisoning"]
term: "DNSSEC"
pronunciation: "DEE-EN-ESS-SEK"
keywords: ["sign dns records", "prevent dns spoofing", "chain of trust from root", "ds record", "validate dns answers", "cache poisoning protection", "توقيع سجلات DNS", "منع انتحال DNS", "سلسلة ثقة من الجذر", "سجل DS", "التحقق من إجابات DNS", "الحماية من تسميم الذاكرة المؤقتة"]
---

## Definition

DNSSEC adds digital signatures to DNS records so a resolver can check that the answer really came from the domain's owner and wasn't forged on the way.

## Where you hear it

In domain security settings at registrars, DNS provider dashboards and DNS spoofing discussions.

## Examples

- Turn on DNSSEC and add the DS record at the registrar.
- DNSSEC proves the answer is authentic, but doesn't encrypt it.
- The resolver rejected the answer because its DNSSEC signature did not validate.

## Common mistake

Enabling it then changing DNS providers without updating the DS record. The domain stops resolving.

## Don't confuse with

DNS over HTTPS, which encrypts the lookup for privacy. DNSSEC protects authenticity, not secrecy.

## Say it at work

- Is DNSSEC enabled for this domain?
- Remove the DS record before migrating.
