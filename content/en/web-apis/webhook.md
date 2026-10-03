---
id: webhook
category: web-apis
level: intermediate
related: [payload, idempotency]
term: "Webhook"
pronunciation: "WEB-hook"
---
## Definition

A URL in your app that another service calls automatically when something happens, for example when a payment succeeds.

## Where you hear it

Payment gateways, GitHub, Slack, and any "notify me when…" integration.

## Examples

- The payment provider sends a webhook when the payment succeeds.
- Verify the webhook signature before trusting the payload.

## Common mistake

Not handling duplicates. Services may send the same webhook twice, so your code must be idempotent.
