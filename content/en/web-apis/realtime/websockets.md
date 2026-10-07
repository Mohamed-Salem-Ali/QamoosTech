---
id: websockets
category: web-apis
subcategory: realtime
level: intermediate
related: [request-response]
term: "WebSockets"
pronunciation: "WEB-sok-its"
keywords: ["persistent connection between client and server","real time bidirectional communication protocol","keep connection open for messages","chat app live messaging protocol","websocket connection","websokets","websocket vs polling","two way browser communication","streaming data to browser","اتصال مستمر بين الخادم والعميل","بروتوكول الدردشة الفورية","فتح اتصال دائم مع السيرفر","اتصال ثنائي الاتجاه بالويب","تحديث لوحة التحكم لحظيا","ويب سوكتس","تقنية الاتصال المباشر بالمتصفح","ارسال رسائل فورية بدون طلبات جديدة"]
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
