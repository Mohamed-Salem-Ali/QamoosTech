---
id: stateless-vs-stateful
category: architecture
subcategory: data-and-state
level: intermediate
related: [load-balancer, serverless, restful-api]
term: "Stateless vs Stateful"
pronunciation: "STAYT-les versuhs STAYT-ful"
keywords: ["managing user sessions on server","storing client state between requests","scaling applications horizontally","sticky sessions vs stateless","difference between stateful and stateless","server memory for user sessions","stateless architecture benefits","how to handle session data","stateless vs stateful explained","persistent session data on backend","الفرق بين عديم الحالة وذو الحالة","تخزين بيانات الجلسة على الخادم","إدارة جلسات المستخدمين في النظام","هيكلية النظام عديمة الحالة","ما معنى ستيت ليس وستيت فول","الفرق بين الأنظمة ذات الحالة","هل يحتاج الخادم لحفظ الجلسة","توسيع النظام بدون حفظ الحالة","مفهوم الأنظمة عديمة الحالة","الفرق بين stateless و stateful"]
---

## Definition

Stateless systems do not store client session data between requests, meaning every request must contain all necessary information. Stateful systems, however, remember previous interactions and store client state on the server across multiple requests.

## Where you hear it

During system design discussions, scaling planning, and when choosing how to manage user sessions and API architecture.

## Examples

- We need to design a stateless API so any instance behind the load-balancer can handle the request.
- Shopping carts are often stateful because the server must remember what items the user added across different pages.
- Migrating from a stateful architecture to a stateless one made our application much easier to scale horizontally.

## Common mistake

Assuming stateless means the application never saves data anywhere, when it actually means the server doesn't keep session memory about a specific client between independent HTTP requests.

## Say it at work

- Let us make sure the backend remains stateless so we can scale out easily without managing sticky sessions.
- Please verify if this microservice requires a stateful approach or if we can handle the user session via a distributed cache.
