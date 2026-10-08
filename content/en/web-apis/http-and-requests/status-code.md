---
id: status-code
category: web-apis
subcategory: http-and-requests
level: beginner
related: [request-response, endpoint]
term: "Status Code"
pronunciation: "STAY-tus KOHD"
keywords: ["http response numbers","api success error codes","what does 404 mean","http error digits","check request result code","server response status","api status numbers","http status codes list","meaning of 200 404 500","http return values","أرقام استجابة الخادم","رموز نجاح أو فشل الطلب","معاني أرقام الـ http","ماذا تعني أرقام الخطأ","رموز حالة الطلبات","ستاتس كود","رموز استجابة الـ api","أرقام نتائج الـ http","كيف أعرف حالة الطلب","رموز الخطأ في الخادم"]
---
## Definition

A three-digit number in an HTTP response that tells the result: 200 means OK, 404 not found, 500 server error.

## Where you hear it

Debugging APIs, logs, and error reports.

## Examples

- The API returns 401 when the token is missing.
- A 500 means the bug is on the server, not in your request.
- The API returns 201 after it creates the new order.

## Common mistake

Returning 200 with an error message inside. Use the right code so clients can react correctly.

## Say it at work

- Can you check why this endpoint is returning a 500 status code instead of a 400?
- Please ensure the payment service returns the correct status code when a transaction fails.
