---
id: api-key
category: security
subcategory: authentication-and-access
level: beginner
related: [authentication-vs-authorization, jwt, oauth]
term: "API Key"
pronunciation: "AY-pee KEE"
keywords: ["unique token for backend access","secret string for api authentication","how to identify my application","service provider access code","api secret token","application identification string","request header authentication token","api access credential","how to authorize api calls","secure key for service connection","رمز سري للوصول للخدمة","مفتاح تفعيل واجهة البرمجة","رمز تعريف التطبيق للخدمة","كيفية ربط التطبيق بالخادم","مفتاح المصادقة على الطلبات","رمز سري لطلبات الاتصال","إي بي كي","مفتاح دخول المطورين","رمز تعريف المشروع للخدمة","طريقة تعريف التطبيق برمجيا"]
---

## Definition

An API key is a unique secret token passed in HTTP requests to identify the calling application or project to a service provider.

## Where you hear it

In backend integration discussions, developer settings dashboards, and security configurations.

## Examples

- Include the API key in the request header to authenticate your weather service calls.
- Never expose your secret API key in frontend client code.
- Store the API key in an environment variable, not in the source code.

## Common mistake

Treating an API key like a user password and hardcoding it directly in public source code repositories.

## Don't confuse with

API Key vs OAuth Token: An API key identifies the calling project, whereas an OAuth token represents a specific user's permission to access their data.

## Say it at work

- Make sure to rotate your API key if you suspect it was accidentally committed to the repository.
- Please provide the API key for the staging environment so we can proceed with the integration tests.
