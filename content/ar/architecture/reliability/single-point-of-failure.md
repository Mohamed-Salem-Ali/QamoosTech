---
id: single-point-of-failure
category: architecture
subcategory: reliability
level: intermediate
related: [load-balancer, fail-open-vs-fail-closed, ddos-attack]
term: "Single Point of Failure"
translation: "نقطة فشل وحيدة"
pronunciation: "سنجل بوينت أوف فيلر"
keywords: ["نقطة فشل وحيدة","مكون يعطل النظام كاملاً","مكون يؤدي لسقوط النظام","نقطة الضعف في النظام","مكان تعطل النظام بالكامل","خطر تعطل الخادم الوحيد","سنجل بوينت أوف فيلر","إزالة نقطة الفشل","spof","component that crashes the system","single point of failure","weak link in architecture","system fails if one part breaks","critical failure component","avoiding system downtime","server outage risk","single point of failure abbreviation"]
---
## التعريف

مكوّن واحد إذا توقف أسقط النظام كله. التصميم الجيد يزيله أو يكرّره.

## أين تسمعه؟

مراجعات الاعتمادية ومقابلات المعمارية («SPOF»).

## أمثلة

- One database server is a single point of failure.
  - خادم قاعدة بيانات واحد هو نقطة فشل وحيدة.
- We added a replica to remove the single point of failure.
  - أضفنا نسخة احتياطية (replica) لإزالة نقطة الفشل الوحيدة.

## خطأ شائع

إضافة خادم ثانٍ مع بقاء load balancer واحد مشترك. فقط انتقلت نقطة الفشل.

## لا تخلطه مع

غالباً ما يتم الخلط بين نقطة الفشل الوحيدة (SPOF) وعنق الزجاجة (bottleneck)؛ فبينما تؤدي نقطة الفشل إلى توقف النظام بالكامل عند تعطلها، فإن عنق الزجاجة يحد فقط من أداء النظام أو سرعته دون أن يتسبب بالضرورة في انهياره.

## قلها في العمل

- We need to address this database instance because it's currently a major single point of failure for our entire service.
  - نحتاج لمعالجة مثيل قاعدة البيانات هذا لأنه يمثل حالياً نقطة فشل وحيدة رئيسية لخدمتنا بالكامل.
- I have identified a single point of failure in the authentication module and recommend implementing a redundant service to improve our availability.
  - لقد حددت نقطة فشل وحيدة في وحدة المصادقة، وأوصي بتنفيذ خدمة إضافية لتعزيز توافر النظام.
