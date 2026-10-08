---
id: payload
category: web-apis
subcategory: http-and-requests
level: intermediate
related: [request-response, dto, iso-8601]
term: "Payload"
pronunciation: "PAY-lohd"
keywords: ["actual data in api request","what is inside http body","data sent in webhook","useful business data","api request content","meaning of payload","request body vs payload","data without headers","api response content","inspecting sent data","payload definition","transported data package","البيانات الفعلية داخل الطلب","محتوى جسم الطلب","معنى كلمة بايلود","البيانات المرسلة في الـ api","ماذا يوجد داخل الطلب","الفرق بين الجسم والحمولة","البيانات الأساسية للرسالة","محتوى الـ webhook","تعريف الحمولة البرمجية","البيانات دون الترويسات","البيانات المفيدة في الطلب","معنى payload في البرمجة"]
---
## Definition

The actual data inside a request or response, without the headers and technical details around it.

## Where you hear it

API docs, webhooks, and debugging ("what is in the payload?").

## Examples

- The webhook payload contains the order id and the status.
- The payload is too large, so the request fails.

## Common mistake

Logging the whole payload. It may contain passwords or personal data that must not be stored.

## Don't confuse with

Payload is often confused with request body, but while the body is the transport container in HTTP, the payload refers specifically to the useful business data being delivered.

## Say it at work

- Let's check the network tab to see what payload the frontend is sending to the server.
- Please ensure the payload is validated against the schema before processing the database transaction.
