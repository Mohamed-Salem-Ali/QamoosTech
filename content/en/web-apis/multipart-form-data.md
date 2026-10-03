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

## Don't confuse with

Multipart/form-data is often confused with application/x-www-form-urlencoded, but the former is required for binary file uploads while the latter is only suitable for simple text-based key-value pairs.

## Say it at work

- We need to switch the request to multipart/form-data because the current JSON payload doesn't support the image file upload.
- Please ensure the API endpoint is configured to accept multipart/form-data so that users can successfully upload their profile documents.
