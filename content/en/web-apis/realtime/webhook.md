---
id: webhook
category: web-apis
subcategory: realtime
level: intermediate
related: [payload, idempotency]
term: "Webhook"
pronunciation: "WEB-hook"
keywords: ["notify my server of events","automatic callback url","push data to my endpoint","receive updates from external services","event driven http requests","alternative to api polling","listen for remote events","web hook","webhook url setup","handle incoming server notifications","رابط لاستقبال الإشعارات التلقائية","إرسال تنبيهات عند وقوع حدث","تلقي بيانات من خدمة خارجية","بديل لعملية استطلاع البيانات","ويب هوك","استقبال طلبات من خادم آخر","رابط معالجة الأحداث الخارجية","إخطار الخادم بحدوث تغيير","تفعيل التنبيهات عبر الرابط","تلقي إشعارات الدفع التلقائية"]
---
## Definition

A URL in your app that another service calls automatically when something happens, for example when a payment succeeds.

## Where you hear it

Payment gateways, GitHub, Slack, and any "notify me when…" integration.

## Examples

- The payment provider sends a webhook when the payment succeeds.
- Verify the webhook signature before trusting the payload.

## Common mistake

Not handling duplicates. Services may send the same webhook twice, so your code must be idempotent.

## Don't confuse with

Webhook vs API polling: A webhook pushes data to your server immediately when an event occurs, whereas polling requires your server to repeatedly request updates from the service at set intervals.

## Say it at work

- Could you check if the webhook endpoint is receiving any requests from the external service?
- I have updated the webhook handler to properly validate the incoming payload signature for better security.
