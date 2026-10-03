---
id: long-polling
category: web-apis
level: intermediate
related: [request-response, websockets]
term: "Long Polling"
pronunciation: "LONG POL-ing"
---

## Definition

A technique where the client makes an HTTP request, and the server holds that connection open until new data is available or a timeout occurs.

## Where you hear it

In architecture discussions about real-time features, chat applications, or notification systems when WebSockets are not an option.

## Examples

- The notification service uses long polling to deliver alerts to the browser without opening a permanent socket.
- When the server receives a long polling request, it waits for thirty seconds before returning an empty response if no changes occur.

## Common mistake

Assuming long polling is identical to WebSockets, forgetting that it still relies on standard HTTP request-response cycles and requires a new request after every message.

## Don't confuse with

Long polling keeps the HTTP connection open until data arrives or it times out, while short polling repeatedly sends requests at fixed intervals regardless of whether new data is available.

## Say it at work

- Let us check if long polling can handle these chat notifications before we complicate the setup with WebSockets.
- Please ensure the client automatically triggers a new request as soon as the previous long polling connection times out.
