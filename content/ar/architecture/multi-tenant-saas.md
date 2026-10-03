---
id: multi-tenant-saas
category: architecture
level: intermediate
related: [scalability, rbac]
term: "Multi-tenant SaaS"
translation: "برمجيات كخدمة متعددة العملاء"
pronunciation: "مالتي تينانت ساس"
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
