---
id: http-methods
category: web-apis
level: beginner
related: [request-response, restful-api, status-code]
term: "HTTP Methods"
pronunciation: "AY-TCH TEE-PEE METH-uhds"
---

## Definition

HTTP Methods are standard verbs like `GET`, `POST`, `PUT`, and `DELETE` that tell a server what action to perform on a resource. They form the foundation of how clients and servers communicate in web applications and APIs.

## Where you hear it

- In API documentation
- During backend development
- When debugging network requests in the browser

## Examples

- Use a `GET` request to retrieve user profile data from the server.
- Submit a `POST` request with the form data to create a new account.
- Send a `DELETE` request to remove an item from the shopping cart.

## Common mistake

Using a `GET` request to send sensitive data or modify server state, which is insecure and violates HTTP standards because `GET` requests should be safe and idempotent.
