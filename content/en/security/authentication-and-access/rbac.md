---
id: rbac
category: security
subcategory: authentication-and-access
level: intermediate
related: [authentication-vs-authorization, multi-tenant-saas, access-control-list]
term: "RBAC (Role-Based Access Control)"
pronunciation: "AR-bak"
keywords: ["manage user permissions by role","assign access levels to groups","role based access control","restrict user actions by role","admin editor viewer permission system","authorization based on user roles","avoid per user permission settings","rbac security model","centralized permission management","ar-bak security","user role management","التحكم في الوصول حسب الأدوار","إدارة صلاحيات المستخدمين بالأدوار","تحديد الصلاحيات بناء على الدور","نظام منح الصلاحيات للمجموعات","إسناد المستخدمين إلى أدوار وظيفية","آر باك للتحكم بالصلاحيات","توزيع المهام والصلاحيات للمستخدمين","منع التعديل الفردي للصلاحيات","إدارة الوصول للمدير والمحرر","نظام الأدوار في لوحة التحكم"]
---
## Definition

Giving permissions to roles (Admin, Editor, Viewer) and assigning users to roles, instead of setting permissions user by user.

## Where you hear it

Admin panels, SaaS products, and security reviews.

## Examples

- Only the Admin role can delete invoices.
- We use RBAC, so we change the role, not every user.
- The Viewer role can see the reports but cannot change any settings.

## Common mistake

Writing `if user.role == "admin"` everywhere. Keep permission checks in one central place.

## Don't confuse with

RBAC is often mixed up with ABAC (Attribute-Based Access Control). RBAC grants permissions based on static roles assigned to a user, while ABAC makes access decisions dynamically based on user attributes, resource properties, and environmental conditions.

## Say it at work

- Let's use RBAC for the new dashboard so we don't have to manage user permissions individually.
- Please update the RBAC configuration to add a new manager role with approval permissions.
