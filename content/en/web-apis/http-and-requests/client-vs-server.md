---
id: client-vs-server
category: web-apis
subcategory: http-and-requests
level: beginner
related: [request-response, endpoint]
term: "Client vs Server"
pronunciation: "KLY-ent versus SER-ver"
keywords: ["difference between client and server","how web requests work","client vs server architecture","browser and backend communication","who handles the request","frontend and backend basics","client side vs server side","understanding web app structure","الفرق بين العميل والخادم","كيف يعمل الويب","الفرق بين كلاينت وسيرفر","من المسؤول عن الطلب","هيكلية الشبكة للويب","العميل والخادم في التطبيقات","الفرق بين الواجهة والخلفية","معمارية الطلب والاستجابة"]
---
## Definition

The *client* asks for something (a browser or mobile app). The *server* receives the request, does the work, and answers.

## Where you hear it

Any explanation of how the web works, API docs, and bug reports ("is it a client or server problem?").

## Examples

- The client sends a request and the server returns JSON.
- The validation runs on the client, but it must also run on the server.
- The phone app is the client, and the payments service on our server does the actual charge.

## Common mistake

Trusting data from the client. The client can be changed by users, so the server must always validate.

## Don't confuse with

Client vs Server is often confused with Frontend vs Backend; while they are related, client/server refers to the network architecture of the request, whereas frontend/backend refers to the separation of concerns between the user interface and the underlying business logic.

## Say it at work

- We need to check if the data is being corrupted on the client side before it even reaches the server.
- Please ensure that the server logs include the client IP address for better debugging of these failed requests.
