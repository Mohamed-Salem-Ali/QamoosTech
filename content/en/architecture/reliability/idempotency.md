---
id: idempotency
category: architecture
subcategory: reliability
level: intermediate
related: [webhook, message-queue, transaction]
term: "Idempotency"
pronunciation: "eye-dem-POH-ten-see"
keywords: ["prevent double payment on retry","safe to repeat api requests","same result when called multiple times","handle duplicate webhook events safely","idempotency key for payments","make api calls safe to retry","avoid processing duplicate orders","idemoptency","idempotent operations in architecture","منع خصم المبلغ مرتين","تكرار طلبات الـ api بأمان","تجنب معالجة الطلبات المكررة","التعامل مع إعادة المحاولة بأمان","منع دفع العميل مرتين","تنفيذ العملية عدة مرات بنفس النتيجة","إيدمبوتنسي","مفتاح لمنع التكرار في المدفوعات"]
---
## Definition

A property of an operation: doing it many times gives the same result as doing it once. This makes retries safe.

## Where you hear it

Payments, webhooks, retries, and background jobs.

## Examples

- Send an idempotency key so retries cannot charge the customer twice.
- Make the job idempotent because the queue may deliver it twice.

## Common mistake

Building a "charge" endpoint without an idempotency key. If the network drops, the client retries and pays twice.

## Don't confuse with

Idempotency ensures that repeating an operation has no extra effect, whereas a retry simply executes the same action again without guaranteeing safety.

## Say it at work

- Let us add an idempotency key to this API endpoint so we do not process duplicate requests from the mobile app.
- Please ensure that the payment processing handler is fully idempotent before we deploy this release to production.
