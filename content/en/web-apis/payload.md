---
id: payload
category: web-apis
level: intermediate
related: [request-response, dto]
term: "Payload"
pronunciation: "PAY-lohd"
---
## Definition

The actual data inside a request or response, without the headers and technical details around it.

## Where you hear it

API docs, webhooks, and debugging ("what is in the payload?").

## Examples

- The webhook payload contains the order id and the status.
- The payload is too large, so the request fails.

## Common mistake

Logging the whole payload. It may contain passwords or personal data that must not be stored.
