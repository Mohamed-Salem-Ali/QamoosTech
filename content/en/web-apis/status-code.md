---
id: status-code
category: web-apis
level: beginner
related: [request-response, endpoint]
term: "Status Code"
pronunciation: "STAY-tus KOHD"
---
## Definition

A three-digit number in an HTTP response that tells the result: 200 means OK, 404 not found, 500 server error.

## Where you hear it

Debugging APIs, logs, and error reports.

## Examples

- The API returns 401 when the token is missing.
- A 500 means the bug is on the server, not in your request.

## Common mistake

Returning 200 with an error message inside. Use the right code so clients can react correctly.

## Say it at work

- Can you check why this endpoint is returning a 500 status code instead of a 400?
- Please ensure the payment service returns the correct status code when a transaction fails.
