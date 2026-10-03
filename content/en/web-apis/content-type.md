---
id: content-type
category: web-apis
level: beginner
related: [http-header, request-response, payload]
term: "Content-Type"
pronunciation: "KON-tent TYP"
---

## Definition

An HTTP header that tells the receiving server or client what format the data in the request or response body is. It ensures the data is parsed correctly, such as JSON, plain text, or form data.

## Where you hear it

- In API documentation under request headers
- When debugging 415 Unsupported Media Type errors
- When configuring fetch requests or Postman to send JSON

## Examples

- Set the `Content-Type` header to `application/json` before sending the request payload.
- The server rejected the upload because the `Content-Type` did not match the expected image format.

## Common mistake

Assuming the server automatically knows what data format you are sending without explicitly setting the header.
