---
id: cors
category: web-apis
level: intermediate
related: [http-header, client-vs-server]
term: "CORS"
pronunciation: "KORZ"
---
## Definition

A browser rule that blocks a web page from calling another website's API unless that server allows it with special headers.

## Where you hear it

The most common frontend error: "blocked by CORS policy".

## Examples

- The request is blocked by CORS because the server does not allow our domain.
- Add our frontend URL to the allowed origins on the backend.

## Common mistake

Fixing it by allowing every origin (`*`) in production. That removes a protection you may need.
