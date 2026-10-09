---
id: etag
category: web-apis
subcategory: http-and-requests
level: intermediate
related: [http-header, cache, status-code]
term: "ETag"
pronunciation: "ee-tag"
keywords: ["version identifier for a response", "conditional request", "if-none-match header", "304 not modified", "cache validation header", "معرّف نسخة الاستجابة", "طلب مشروط", "ترويسة If-None-Match", "لم يتغير 304"]
---

## Definition

An HTTP header that identifies a version of a resource. A client sends it back in a conditional request, and the server replies 304 Not Modified if nothing has changed, which saves bandwidth.

## Where you hear it

In HTTP caching headers, CDN settings, and debugging responses that are unexpectedly stale.

## Examples

- The server sends an ETag, and the browser sends it back on the next request.
- A 304 response means the cached copy is still valid.
- The second request sent the ETag back and got a 304, so it used the cached copy.

## Common mistake

Generating an ETag that changes on every request, which disables caching and wastes bandwidth.

## Don't confuse with

An ETag identifies a version of a resource. A cache is the place where copies are stored.
