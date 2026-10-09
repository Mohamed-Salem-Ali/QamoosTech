---
id: server-sent-events
category: web-apis
subcategory: realtime
level: intermediate
related: [websockets, long-polling, polling, streaming, reconnection, real-time]
term: "Server-Sent Events (SSE)"
pronunciation: "SUR-ver sent E-vents"
keywords: ["server pushes updates to browser", "one way live updates", "event stream over http", "live feed without websocket", "eventsource in javascript", "الخادم يرسل التحديثات إلى المتصفح", "تحديثات مباشرة في اتجاه واحد", "تدفق أحداث عبر HTTP", "تحديثات مباشرة دون WebSocket"]
---

## Definition

A standard way for a server to push a stream of events to a browser over one long-lived HTTP connection. It is one-way, from server to client, and the browser reconnects automatically.

## Where you hear it

In live notifications, progress bars for long jobs, and dashboards that update in real time.

## Examples

- The dashboard listens to a server-sent events stream for new orders.
- Use WebSockets instead if the client must send messages too.
- The status page receives server-sent events, so it updates when the job finishes.

## Common mistake

Choosing server-sent events when the client needs to send data often. Then WebSockets, which are two-way, fit better.

## Don't confuse with

Server-sent events are one-way and use plain HTTP. WebSockets are two-way and use their own protocol.
