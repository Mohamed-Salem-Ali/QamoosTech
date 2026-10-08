---
id: graphql
category: web-apis
subcategory: api-design
level: intermediate
related: [restful-api, endpoint, over-fetching]
term: "GraphQL"
pronunciation: "GRAF-ik-ew-el"
keywords: ["query specific data fields","alternative to rest api","single endpoint api style","fetch exact data needed","graph query language","api for frontend developers","avoid overfetching api data","schema based data fetching","flexible api request format","grapqhl","grapql tech","جلب البيانات بدقة","بديل لـ rest api","لغة استعلام البيانات","جلب الحقول المطلوبة فقط","واجهة برمجة تطبيقات مرنة","استعلامات الواجهة الأمامية","جراف كيو إل","تقليل البيانات غير الضرورية","نقطة نهاية واحدة للبيانات","تصميم استعلامات api"]
---
## Definition

An API style where the client sends one query that describes exactly which fields it wants, and the server returns only those.

## Where you hear it

Frontend-heavy teams, mobile apps, and "REST vs GraphQL" debates.

## Examples

- With GraphQL the app fetches the user and orders in one request.
- The query asks only for `name` and `email`.

## Common mistake

Thinking GraphQL is always better than REST. It adds complexity such as caching and query cost control.

## Don't confuse with

GraphQL is often mixed up with REST, but while REST uses multiple fixed endpoints for different resources, GraphQL uses a single endpoint where clients request the exact shape of the data they need.

## Say it at work

- Let's migrate this user profile view to GraphQL so we can stop fetching unused fields over the mobile network.
- Please review the new GraphQL schema changes to ensure the query complexity limits are properly configured.
