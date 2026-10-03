---
id: multipart-form-data
category: web-apis
level: intermediate
related: [http-header, payload, request-response]
term: "Multipart Form Data"
pronunciation: "MULL-tee-part FORM DAY-ta"
---

## Definition

A content type used in HTTP requests to send files and text data together in a single message. It splits the request body into multiple parts, each with its own headers.

## Where you hear it

When building file upload features or working with HTML forms that contain file inputs.

## Examples

- The browser sets the Content-Type header to multipart/form-data when a user submits a file upload form.
- You must configure your backend server to parse multipart/form-data to handle incoming image uploads.

## Common mistake

Trying to send a file as a standard JSON object; JSON cannot handle binary data, so you must use multipart/form-data instead.
