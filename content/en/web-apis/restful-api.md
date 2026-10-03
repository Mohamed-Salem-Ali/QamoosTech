---
id: restful-api
category: web-apis
level: intermediate
related: [endpoint, status-code, graphql]
term: "RESTful API"
pronunciation: "REST-ful AY-pee-eye"
---
## Definition

An API style where each thing (a user, an order) has its own URL and you use standard HTTP methods (GET, POST, PUT, DELETE) to work with it.

## Where you hear it

System design, backend interviews, and API documentation.

## Examples

- The mobile app talks to a RESTful API that returns JSON.
- Use `POST` to create and `DELETE` to remove a resource.

## Common mistake

Calling every HTTP API "REST". Many APIs are just "HTTP APIs" and do not follow REST rules like using the right verbs.
