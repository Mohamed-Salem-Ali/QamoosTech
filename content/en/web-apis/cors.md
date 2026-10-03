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

## Don't confuse with

CORS is often confused with CSRF; while CORS is a browser security mechanism that restricts cross-origin resource access, CSRF is an attack that tricks a user into performing unwanted actions on a site where they are authenticated.

## Say it at work

- I'm getting a CORS error when calling the API from my local environment, so we might need to update the allowed origins.
- Could you please verify if the backend configuration allows our staging domain in the CORS policy settings?
