---
id: api-versioning
category: web-apis
level: intermediate
related: [endpoint, restful-api, request-response]
term: "API Versioning"
pronunciation: "AY-PEE VUR-zhun-ing"
---

## Definition

API Versioning is the practice of managing changes to an API by assigning unique versions to different iterations. This allows developers to introduce updates or breaking changes without disrupting existing clients.

## Where you hear it

During architectural planning, backend development meetings, and when updating documentation for public or internal APIs.

## Examples

- We need to implement API versioning in the URL, such as `/v1/users` and `/v2/users`.
- The team decided to use a custom HTTP header for API versioning instead of query parameters.

## Common mistake

Assuming that every small change requires a new version, which leads to unnecessary complexity and maintenance overhead for the API team.
