---
id: event-driven
category: architecture
level: intermediate
related: [message-queue, immutable]
term: "Event-driven"
translation: "مبني على الأحداث"
pronunciation: "إيفنت دريفن"
---
## التعريف

تصميم تتفاعل فيه أجزاء النظام مع الأحداث («تم إنشاء طلب») بدل أن يستدعي بعضها بعضًا مباشرة.

## أين تسمعه؟

معمارية الـ backend الحديثة والأنظمة السحابية.

## أمثلة

- When an order is created, an event triggers the email and invoice services.
  - عند إنشاء طلب، يشغّل حدث خدمتي البريد والفواتير.
- An event-driven design keeps services loosely coupled.
  - التصميم المبني على الأحداث يبقي الخدمات غير مترابطة بإحكام.

## خطأ شائع

وصف النظام بأنه event-driven لمجرد استخدام queue. يجب أن يكون سير العمل مدفوعًا بالأحداث فعلًا.
