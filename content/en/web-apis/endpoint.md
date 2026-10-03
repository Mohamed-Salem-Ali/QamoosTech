---
id: endpoint
category: web-apis
level: beginner
related: [restful-api, request-response]
term: "Endpoint"
pronunciation: "END-point"
---
## Definition

A specific URL of an API that does one job, for example `GET /users/42` to fetch a user.

## Where you hear it

API docs, backend tickets, and client discussions ("which endpoint do I call?").

## Examples

- We added a new endpoint for exporting invoices.
- The endpoint returns 404 for unknown users.

## Common mistake

Naming endpoints with verbs like `/getUsers`. In REST, the HTTP method is the verb, so use `GET /users`.
