---
id: rbac
category: security
level: intermediate
related: [authentication-vs-authorization, multi-tenant-saas]
term: "RBAC (Role-Based Access Control)"
pronunciation: "AR-bak"
---
## Definition

Giving permissions to roles (Admin, Editor, Viewer) and assigning users to roles, instead of setting permissions user by user.

## Where you hear it

Admin panels, SaaS products, and security reviews.

## Examples

- Only the Admin role can delete invoices.
- We use RBAC, so we change the role, not every user.

## Common mistake

Writing `if user.role == "admin"` everywhere. Keep permission checks in one central place.

## Don't confuse with

RBAC is often mixed up with ABAC (Attribute-Based Access Control). RBAC grants permissions based on static roles assigned to a user, while ABAC makes access decisions dynamically based on user attributes, resource properties, and environmental conditions.

## Say it at work

- Let's use RBAC for the new dashboard so we don't have to manage user permissions individually.
- Please update the RBAC configuration to add a new manager role with approval permissions.
