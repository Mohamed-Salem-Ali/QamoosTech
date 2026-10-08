---
id: endpoint
category: web-apis
subcategory: routing-and-views
level: beginner
related: [restful-api, request-response, api-documentation]
term: "Endpoint"
pronunciation: "END-point"
keywords: ["api url path","url to call api","backend route address","api route url","where to send request","api address","endpoint","indpoint","rest api url path","call backend service url","عنوان url للـ api","مسار الـ api","رابط الاتصال بالخادم","عنوان الطلب","نقطة نهاية","إندبوينت","عنوان الـ url المخصص","مسار طلب البيانات","رابط خدمة الويب"]
---
## Definition

A specific URL of an API that does one job, for example `GET /users/42` to fetch a user.

## Where you hear it

API docs, backend tickets, and client discussions ("which endpoint do I call?").

## Examples

- We added a new endpoint for exporting invoices.
- The endpoint returns 404 for unknown users.
- The mobile app calls the same endpoint as the web app, so both get the same data.

## Common mistake

Naming endpoints with verbs like `/getUsers`. In REST, the HTTP method is the verb, so use `GET /users`.

## Don't confuse with

An endpoint is the specific URL path where an API can be accessed, whereas an API is the entire system or set of rules that allows applications to communicate.

## Say it at work

- Can you check which endpoint returns the user profile data?
- Please update this endpoint to support pagination parameters in the query string.
