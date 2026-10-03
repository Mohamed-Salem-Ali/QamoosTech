---
id: multi-tenant-saas
category: architecture
level: intermediate
related: [scalability, rbac]
term: "Multi-tenant SaaS"
translation: "برمجيات كخدمة متعددة العملاء"
pronunciation: "مالتي تينانت ساس"
keywords: ["بنية تطبيق لعدة عملاء","عزل بيانات العملاء في النظام","تطبيق واحد يخدم مستخدمين مختلفين","استراتيجية مشاركة قاعدة البيانات","تعدد المستأجرين في البرمجيات","كيفية فصل بيانات العملاء برمجيا","تصميم نظام متعدد العملاء","منع تداخل بيانات المستخدمين","مفهوم المالتي تينانت","بنية الساس متعددة العملاء","shared database for multiple customers","isolating tenant data in saas","how to implement multi tenancy","single application multiple clients architecture","shared environment different user data","tenant id filtering logic","multi tenant architecture design","saas data isolation strategies","hosting many clients in one app","multi tenancy vs multi instance","secure data separation for tenants"]
---
## التعريف

تطبيق واحد يخدم عملاء كثيرين (tenants). يتشاركون النظام نفسه، لكن كل عميل لا يرى إلا بياناته.

## أين تسمعه؟

تصميم منتجات SaaS ومراجعات الأمان.

## أمثلة

- Each clinic is a tenant and cannot see another clinic's data.
  - كل عيادة هي tenant ولا تستطيع رؤية بيانات عيادة أخرى.
- Add a `tenant_id` to every table.
  - أضف `tenant_id` إلى كل جدول.

## خطأ شائع

نسيان فلتر الـ tenant في استعلام واحد. هذا الخطأ وحده قد يسرّب بيانات عميل إلى عميل آخر.

## لا تخلطه مع

غالباً ما يتم الخلط بين تعدد العملاء (Multi-tenancy) وبين بنية النسخ المتعددة (Multi-instance)، حيث يحصل كل عميل على خادم أو قاعدة بيانات خاصة به بدلاً من مشاركة بيئة واحدة.

## قلها في العمل

- We need to ensure that our new reporting module is fully compatible with our multi-tenant SaaS architecture.
  - نحتاج للتأكد من أن وحدة التقارير الجديدة لدينا متوافقة تماماً مع بنية الـ multi-tenant SaaS الخاصة بنا.
- Please verify that the data isolation logic is implemented correctly to support the multi-tenant SaaS requirements for this release.
  - يرجى التحقق من أن منطق عزل البيانات قد تم تنفيذه بشكل صحيح لدعم متطلبات الـ multi-tenant SaaS لهذا الإصدار.
