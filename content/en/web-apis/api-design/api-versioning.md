---
id: api-versioning
category: web-apis
subcategory: api-design
level: intermediate
related: [endpoint, restful-api, request-response]
term: "API Versioning"
pronunciation: "AY-PEE VUR-zhun-ing"
keywords: ["manage api changes safely","handle breaking api updates","url versioning for endpoints","add v1 v2 to api","api versioning strategy","versioning rest apis","api header versioning","support multiple api versions","إدارة التغييرات في واجهة برمجة التطبيقات","تحديث الـ api بدون تعطيل العملاء","إضافة إصدارات للـ api","إصدارات الـ endpoints المختلفة","تغيير إصدار الـ api في الرابط","استراتيجية إصدارات الـ api","دعم عدة إصدارات للـ api","اي بي آي فيرجنينج"]
---

## Definition

API Versioning is the practice of managing changes to an API by assigning unique versions to different iterations. This allows developers to introduce updates or breaking changes without disrupting existing clients.

## Where you hear it

During architectural planning, backend development meetings, and when updating documentation for public or internal APIs.

## Examples

- We need to implement API versioning in the URL, such as `/v1/users` and `/v2/users`.
- The team decided to use a custom HTTP header for API versioning instead of query parameters.

## Common mistake

Assuming that every small change requires a new version, which leads to unnecessary complexity and maintenance overhead for the API team.

## Say it at work

- Let us check how we are handling API versioning for this new endpoint before we merge the code.
- Please update the documentation to reflect the new API versioning strategy we agreed on.
