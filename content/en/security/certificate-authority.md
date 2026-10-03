---
id: certificate-authority
category: security
level: intermediate
related: [authentication-vs-authorization, encryption]
term: "Certificate Authority (CA)"
pronunciation: "ser-TIF-i-kit aw-THOR-i-tee"
---

## Definition

A trusted third-party organization that verifies the identity of entities and issues digital certificates to enable secure HTTPS connections. It acts as a root of trust for validating that a public key belongs to a specific domain or server.

## Where you hear it

During server configuration, SSL/TLS implementation, or when troubleshooting browser security warnings.

## Examples

- The server requires a valid certificate signed by a trusted Certificate Authority to enable HTTPS.
- We need to renew our domain certificate before the Certificate Authority expires it.

## Common mistake

Confusing a self-signed certificate with one issued by a trusted CA; self-signed certificates are not verified by a third party and will trigger security warnings in browsers.
