---
id: single-point-of-failure
category: architecture
level: intermediate
related: [load-balancer, fail-open-vs-fail-closed]
term: "Single Point of Failure"
translation: "نقطة فشل وحيدة"
pronunciation: "سنجل بوينت أوف فيلر"
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
