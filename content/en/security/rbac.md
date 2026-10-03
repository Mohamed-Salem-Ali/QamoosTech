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
