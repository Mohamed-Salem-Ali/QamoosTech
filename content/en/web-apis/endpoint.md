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

## Don't confuse with

An endpoint is the specific URL path where an API can be accessed, whereas an API is the entire system or set of rules that allows applications to communicate.

## Say it at work

- Can you check which endpoint returns the user profile data?
- Please update this endpoint to support pagination parameters in the query string.
