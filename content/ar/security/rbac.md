---
id: rbac
category: security
level: intermediate
related: [authentication-vs-authorization, multi-tenant-saas]
term: "RBAC (Role-Based Access Control)"
translation: "التحكم في الوصول حسب الأدوار"
pronunciation: "آر باك"
---
## التعريف

منح الصلاحيات للأدوار (مدير، محرر، قارئ) وإسناد المستخدمين إلى أدوار، بدل ضبط الصلاحيات لكل مستخدم على حدة.

## أين تسمعه؟

لوحات الإدارة ومنتجات SaaS ومراجعات الأمان.

## أمثلة

- Only the Admin role can delete invoices.
  - دور المدير وحده يستطيع حذف الفواتير.
- We use RBAC, so we change the role, not every user.
  - نستخدم RBAC، فنغيّر الدور لا كل مستخدم.

## خطأ شائع

كتابة `if user.role == "admin"` في كل مكان. اجعل فحص الصلاحيات في مكان مركزي واحد.
