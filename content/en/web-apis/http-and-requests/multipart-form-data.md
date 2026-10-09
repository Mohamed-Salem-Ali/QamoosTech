---
id: multipart-form-data
category: web-apis
subcategory: http-and-requests
level: intermediate
related: [http-header, payload, request-response]
term: "Multipart Form Data"
pronunciation: "MULL-tee-part FORM DAY-ta"
keywords: ["send files via http request","uploading binary data in forms","how to send images to api","content type for file uploads","sending text and files together","multipart form data alternative","handling file input in post","http request body with attachments","multipart content type header","uploading documents via web form","رفع الملفات عبر طلبات الويب","إرسال الصور مع البيانات النصية","طريقة رفع الملفات في الـ API","إرسال البيانات الثنائية في النماذج","تنسيق إرسال الملفات في HTTP","التعامل مع حقول رفع الملفات","بديل إرسال البيانات بصيغة JSON","إرسال مرفقات مع نموذج ويب","ترويسة نوع المحتوى للملفات","رفع المستندات عبر واجهة البرمجة"]
---

## Definition

A content type used in HTTP requests to send files and text data together in a single message. It splits the request body into multiple parts, each with its own headers.

## Where you hear it

When building file upload features or working with HTML forms that contain file inputs.

## Examples

- The browser sets the Content-Type header to multipart/form-data when a user submits a file upload form.
- You must configure your backend server to parse multipart/form-data to handle incoming image uploads.
- The upload form sends the photo and the caption in one multipart request.

## Common mistake

Trying to send a file as a standard JSON object; JSON cannot handle binary data, so you must use multipart/form-data instead.

## Don't confuse with

Multipart/form-data is often confused with application/x-www-form-urlencoded, but the former is required for binary file uploads while the latter is only suitable for simple text-based key-value pairs.

## Say it at work

- We need to switch the request to multipart/form-data because the current JSON payload doesn't support the image file upload.
- Please ensure the API endpoint is configured to accept multipart/form-data so that users can successfully upload their profile documents.
