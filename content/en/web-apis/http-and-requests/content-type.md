---
id: content-type
category: web-apis
subcategory: http-and-requests
level: beginner
related: [http-header, request-response, payload]
term: "Content-Type"
pronunciation: "KON-tent TYP"
keywords: ["tell server data format","http header for media type","define request body type","specify json or form data","fix 415 unsupported media error","mime type header","set payload format header","how to define data type","request header for parsing","content type vs accept header","تحديد صيغة بيانات الطلب","ترويسة نوع المحتوى","تعريف نوع البيانات المرسلة","حل خطأ 415 في الـ API","تحديد تنسيق جسم الطلب","إخبار الخادم بنوع البيانات","الفرق بين كونتنت تايب وأكسيبت","ضبط صيغة الـ JSON في الطلب","ترويسة تعريف صيغة الملفات","كيفية تحديد نوع الوسائط"]
---

## Definition

An HTTP header that tells the receiving server or client what format the data in the request or response body is. It ensures the data is parsed correctly, such as JSON, plain text, or form data.

## Where you hear it

- In API documentation under request headers
- When debugging 415 Unsupported Media Type errors
- When configuring fetch requests or Postman to send JSON

## Examples

- Set the `Content-Type` header to `application/json` before sending the request payload.
- The server rejected the upload because the `Content-Type` did not match the expected image format.
- The API returns 415 when the Content-Type is text/plain instead of application/json.

## Common mistake

Assuming the server automatically knows what data format you are sending without explicitly setting the header.

## Don't confuse with

Content-Type is often confused with Accept; Content-Type describes the format of the data being sent, while Accept tells the server which format the client prefers to receive.

## Say it at work

- Hey, make sure you set the Content-Type to application/json in your fetch call, otherwise the API might throw a 415 error.
- I have updated the request headers to include the correct Content-Type, which should resolve the parsing issues we encountered during testing.
