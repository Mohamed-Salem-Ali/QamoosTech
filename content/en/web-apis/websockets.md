---
id: websockets
category: web-apis
level: intermediate
related: [request-response]
term: "WebSockets"
pronunciation: "WEB-sok-its"
---
## Definition

A connection that stays open so the client and server can send messages to each other at any time, without new requests.

## Where you hear it

Chat apps, live notifications, dashboards, and multiplayer features.

## Examples

- We use WebSockets to show new messages instantly.
- Polling every second is wasteful. Let's switch to WebSockets.

## Common mistake

Using WebSockets for everything. If updates are rare, simple polling or Server-Sent Events is easier.

## Don't confuse with

WebSockets are often confused with Server-Sent Events (SSE); while WebSockets allow full-duplex communication in both directions, SSE is strictly for one-way communication from the server to the client.

## Say it at work

- We should implement WebSockets for this feature so the dashboard updates in real-time without needing a page refresh.
- I have reviewed the connection handling logic and it seems that the WebSockets are not closing properly when the user logs out.
