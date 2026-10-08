---
id: restful-api
category: web-apis
subcategory: api-design
level: intermediate
related: [endpoint, status-code, graphql, crud-operations, sdk]
term: "RESTful API"
pronunciation: "REST-ful AY-pee-eye"
keywords: ["rest api design standard","http methods get post put","web api with urls","build standard web api","restful webservice","api using http verbs","resource based api","rest api architecture","تصميم واجهات برمجة التطبيقات","واجهة برمجة تطبيقات تعتمد على ريست","استخدام طرق اتش تي تي بي","بناء واجهة برمجية قياسية","واجهة ريست","خدمات الويب ريستفل","بناء ايه بي آي قياسي","التعامل مع طلبات اتش تي تي بي"]
---
## Definition

An API style where each thing (a user, an order) has its own URL and you use standard HTTP methods (GET, POST, PUT, DELETE) to work with it.

## Where you hear it

System design, backend interviews, and API documentation.

## Examples

- The mobile app talks to a RESTful API that returns JSON.
- Use `POST` to create and `DELETE` to remove a resource.

## Common mistake

Calling every HTTP API "REST". Many APIs are just "HTTP APIs" and do not follow REST rules like using the right verbs.

## Don't confuse with

RESTful API is often confused with GraphQL, but while REST uses multiple endpoints and standard HTTP methods, GraphQL uses a single endpoint and allows clients to request exactly the data they need.

## Say it at work

- Let's make sure our new RESTful API endpoints follow standard naming conventions before we publish the documentation.
- Please update the authentication headers in this RESTful API pull request so the frontend tests can pass successfully.
