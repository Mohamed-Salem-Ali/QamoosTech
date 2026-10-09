---
id: grpc
category: web-apis
subcategory: api-design
level: intermediate
related: [protocol-buffers, restful-api, multiplexing]
aliases: ["remote procedure call", "rpc"]
term: "gRPC"
translation: "بروتوكول gRPC"
pronunciation: "جي آر بي سي"
keywords: ["إطار RPC من Google", "رسائل protobuf", "نداءات سريعة بين الخدمات", "بث عبر HTTP/2", "كود عميل مولّد", "تواصل الخدمات المصغرة", "rpc framework by google", "protobuf messages", "fast service to service calls", "http 2 streaming", "generated client code", "microservices communication"]
---

## التعريف

‏gRPC إطار لاستدعاء دوال على خدمة بعيدة كأنها محلية. يستخدم Protocol Buffers لرسائل مضغوطة وHTTP/2 للسرعة والبث.

## أين تسمعه؟

في معماريات الخدمات المصغرة، وأنظمة Go وجافا الخلفية، ونقاشات التصميم "REST أم gRPC؟".

## أمثلة

- Internal services talk over gRPC; the public API stays REST.
  - تتحدث الخدمات الداخلية عبر gRPC وتبقى الـ API العامة REST.
- Generate the client from the `.proto` file.
  - ولّد العميل من ملف `.proto`.
- The billing service calls the invoice service over gRPC with a generated client.
  - تستدعي خدمة الفوترة خدمة الفواتير عبر gRPC باستخدام عميل مُولَّد.

## خطأ شائع

كشف gRPC مباشرة للمتصفحات. تحتاج المتصفحات إلى وسيط مثل gRPC-Web.

## لا تخلطه مع

‏REST عبر JSON وهو مقروء للبشر ويعمل في كل مكان لكنه أكبر وأبطأ.

## قلها في العمل

- Define the service in a proto file first.
  - عرّف الخدمة في ملف proto أولاً.
- Use gRPC streaming for the live feed.
  - استخدم بث gRPC للتغذية الحية.
