---
id: rbac
category: security
level: intermediate
related: [authentication-vs-authorization, multi-tenant-saas]
term: "RBAC (Role-Based Access Control)"
translation: "التحكم في الوصول حسب الأدوار"
pronunciation: "آر باك"
keywords: ["التحكم في الوصول حسب الأدوار","إدارة صلاحيات المستخدمين بالأدوار","تحديد الصلاحيات بناء على الدور","نظام منح الصلاحيات للمجموعات","إسناد المستخدمين إلى أدوار وظيفية","آر باك للتحكم بالصلاحيات","توزيع المهام والصلاحيات للمستخدمين","منع التعديل الفردي للصلاحيات","إدارة الوصول للمدير والمحرر","نظام الأدوار في لوحة التحكم","manage user permissions by role","assign access levels to groups","role based access control","restrict user actions by role","admin editor viewer permission system","authorization based on user roles","avoid per user permission settings","rbac security model","centralized permission management","ar-bak security","user role management"]
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

## لا تخلطه مع

غالباً ما يُخلط بين RBAC و ABAC (التحكم في الوصول بناءً على السمات). يمنح RBAC الصلاحيات بناءً على أدوار ثابتة تُسند للمستخدم، بينما يتخذ ABAC قرارات الوصول بشكل ديناميكي بناءً على سمات المستخدم وخصائص المورد والظروف البيئية.

## قلها في العمل

- Let's use RBAC for the new dashboard so we don't have to manage user permissions individually.
  - دعنا نستخدم RBAC للوحة التحكم الجديدة حتى لا نضطر إلى إدارة صلاحيات المستخدمين بشكل فردي.
- Please update the RBAC configuration to add a new manager role with approval permissions.
  - يرجى تحديث إعدادات RBAC لإضافة دور مدير جديد مع صلاحيات الموافقة.
