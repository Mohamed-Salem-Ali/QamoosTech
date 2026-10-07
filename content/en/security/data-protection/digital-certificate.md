---
id: digital-certificate
category: security
subcategory: data-protection
level: intermediate
related: [certificate-authority, ssl-tls, asymmetric-encryption]
aliases: ["ssl certificate", "tls certificate", "certificate", "self-signed certificate", "wildcard certificate", "chain of trust", "certificate chain"]
term: "Digital Certificate"
pronunciation: "DIJ-ih-tul ser-TIF-ih-kut"
keywords: ["ssl certificate", "proves the site identity", "contains public key", "signed by a ca", "expires and must renew", "https padlock", "شهادة SSL", "تثبت هوية الموقع", "تحتوي المفتاح العام", "موقّعة من جهة إصدار", "تنتهي وتحتاج تجديداً", "قفل HTTPS"]
---

## Definition

A digital certificate is a signed file that ties a public key to an identity, such as a domain name. Browsers use it to confirm they are talking to the real site.

## Where you hear it

In HTTPS setup (Let's Encrypt), expiry alerts, wildcard certificates and certificate errors in browsers.

## Examples

- The certificate expired yesterday, so browsers show a warning.
- A wildcard certificate covers every subdomain.

## Common mistake

Letting it expire. Automate renewal and alert well before the date.

## Don't confuse with

A certificate authority, which is the organisation that issues and signs certificates.

## Say it at work

- Renew the certificate before it expires.
- The certificate chain is incomplete.
