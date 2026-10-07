---
id: trust-boundary
category: security
subcategory: application-security
level: intermediate
related: [input-validation, least-privilege, api-gateway]
aliases: ["threat model", "threat modeling", "attack surface"]
term: "Trust Boundary"
pronunciation: "TRUST BOWN-duh-ree"
keywords: ["where trust level changes", "validate data crossing it", "internet to server", "service to service", "untrusted side", "threat model diagram", "حيث يتغير مستوى الثقة", "تحقق من البيانات العابرة له", "من الإنترنت إلى الخادم", "من خدمة إلى خدمة", "الجانب غير الموثوق", "مخطط نموذج التهديد"]
---

## Definition

A trust boundary is a line in a system where data passes from a less trusted part to a more trusted one, such as from the internet to your server. Data crossing it must be checked.

## Where you hear it

In threat modelling sessions, architecture diagrams and security reviews of where to validate input.

## Examples

- Everything coming from the browser crosses a trust boundary.
- Don't assume internal services are safe; mark that as a boundary too.

## Common mistake

Treating the inside of the network as trusted. A single compromised service then walks through everything.

## Don't confuse with

A firewall, which enforces some rules at one boundary. The boundary is the concept; controls are placed on it.

## Say it at work

- Draw the trust boundaries on the diagram.
- Validate at every boundary.
