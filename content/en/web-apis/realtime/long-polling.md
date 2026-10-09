---
id: long-polling
category: web-apis
subcategory: realtime
level: intermediate
related: [request-response, websockets, streaming, real-time]
term: "Long Polling"
pronunciation: "LONG POL-ing"
keywords: ["keep connection open until data","server holds request for update","alternative to websockets for chat","real time updates via http","wait for server response technique","long poll vs short poll","holding http request for message","simulate push notifications in browser","persistent http connection for updates","long polling implementation details","تقنية الاستعلام الطويل","إبقاء اتصال الخادم مفتوحاً","بديل لتقنية ويب سوكيت","تحديث البيانات فور وصولها","انتظار الخادم لإرسال البيانات","محاكاة التنبيهات الفورية","إرسال طلبات متكررة بانتظار رد","الاستعلام الطويل للدردشة","طريقة لونج بولينج","تأخير استجابة الخادم للبيانات"]
---

## Definition

A technique where the client makes an HTTP request, and the server holds that connection open until new data is available or a timeout occurs.

## Where you hear it

In architecture discussions about real-time features, chat applications, or notification systems when WebSockets are not an option.

## Examples

- The notification service uses long polling to deliver alerts to the browser without opening a permanent socket.
- When the server receives a long polling request, it waits for thirty seconds before returning an empty response if no changes occur.
- The chat client sends a request that the server answers as soon as a new message arrives.

## Common mistake

Assuming long polling is identical to WebSockets, forgetting that it still relies on standard HTTP request-response cycles and requires a new request after every message.

## Don't confuse with

Long polling keeps the HTTP connection open until data arrives or it times out, while short polling repeatedly sends requests at fixed intervals regardless of whether new data is available.

## Say it at work

- Let us check if long polling can handle these chat notifications before we complicate the setup with WebSockets.
- Please ensure the client automatically triggers a new request as soon as the previous long polling connection times out.
