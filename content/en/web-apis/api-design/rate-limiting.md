---
id: rate-limiting
category: web-apis
subcategory: api-design
level: intermediate
featured: 4
related: [status-code, fail-open-vs-fail-closed]
term: "Rate Limiting"
pronunciation: "RAYT LIM-it-ing"
keywords: ["stop users spamming my api","too many requests error","limit api requests per user","prevent api abuse","request throttling","api quota limits","block excessive requests","rate limiter","too many requests","protect server from overload","منع المستخدمين من إرسال طلبات كثيرة","خطأ عدد الطلبات الكثيرة","تحديد عدد طلبات الـ api","حماية الخادم من الضغط","تحديد معدل الاستخدام","الحد الأقصى للطلبات","منع إساءة استخدام الـ api","ريت ليميتينج","تقنين الطلبات"]
---
## Definition

Limiting how many requests a user or app can send in a period of time, to stop abuse and protect the server.

## Where you hear it

API design, security reviews, and "429 Too Many Requests" errors.

## Examples

- We apply rate limiting of 100 requests per minute per user.
- You hit the rate limit, so wait a minute and retry.

## Common mistake

Limiting only by IP address. Many users share one IP, so also limit by account or API key.

## Don't confuse with

Rate limiting is often confused with throttling; while rate limiting restricts the number of requests over a time window, throttling specifically controls the rate of data flow or processing speed to manage bandwidth.

## Say it at work

- We should implement rate limiting on the public endpoints to prevent our services from being overwhelmed by too many requests.
- I have updated the API configuration to include stricter rate limiting, which should resolve the performance issues we observed during peak hours.
