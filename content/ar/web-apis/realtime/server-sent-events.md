---
id: server-sent-events
category: web-apis
subcategory: realtime
level: intermediate
related: [websockets, long-polling, polling, streaming, reconnection, real-time]
term: "Server-Sent Events (SSE)"
translation: "الأحداث المرسلة من الخادم"
pronunciation: "سيرفر سنت إيفنتس"
keywords: ["الخادم يرسل التحديثات إلى المتصفح", "تحديثات مباشرة في اتجاه واحد", "تدفق أحداث عبر HTTP", "تحديثات مباشرة دون WebSocket", "server pushes updates to browser", "one way live updates", "event stream over http", "live feed without websocket", "eventsource in javascript"]
---

## التعريف

طريقة قياسية يرسل بها الخادم تدفقاً من الأحداث إلى المتصفح عبر اتصال HTTP واحد طويل. وهي في اتجاه واحد من الخادم إلى العميل، ويعيد المتصفح الاتصال تلقائياً.

## أين تسمعه؟

في الإشعارات المباشرة، وأشرطة تقدّم المهام الطويلة، ولوحات المعلومات التي تتحدث فوراً.

## أمثلة

- The dashboard listens to a server-sent events stream for new orders.
  - تستمع لوحة المعلومات إلى تدفق أحداث من الخادم لمعرفة الطلبات الجديدة.
- Use WebSockets instead if the client must send messages too.
  - استخدم WebSockets بدلاً من ذلك إن كان على العميل أن يرسل رسائل أيضاً.

## خطأ شائع

اختيار الأحداث المرسلة من الخادم بينما يحتاج العميل إلى إرسال بيانات كثيراً. عندها تناسب WebSockets أفضل لأنها ثنائية الاتجاه.

## لا تخلطه مع

الأحداث المرسلة من الخادم في اتجاه واحد وتستخدم HTTP العادي، أما WebSockets فثنائية الاتجاه ولها بروتوكولها الخاص.
