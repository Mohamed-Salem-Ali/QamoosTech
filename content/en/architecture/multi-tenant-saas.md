---
id: multi-tenant-saas
category: architecture
level: intermediate
related: [scalability, rbac]
term: "Multi-tenant SaaS"
pronunciation: "MUL-tee TEN-ant SASS"
keywords: ["shared database for multiple customers","isolating tenant data in saas","how to implement multi tenancy","single application multiple clients architecture","shared environment different user data","tenant id filtering logic","multi tenant architecture design","saas data isolation strategies","hosting many clients in one app","multi tenancy vs multi instance","secure data separation for tenants","بنية تطبيق لعدة عملاء","عزل بيانات العملاء في النظام","تطبيق واحد يخدم مستخدمين مختلفين","استراتيجية مشاركة قاعدة البيانات","تعدد المستأجرين في البرمجيات","كيفية فصل بيانات العملاء برمجيا","تصميم نظام متعدد العملاء","منع تداخل بيانات المستخدمين","مفهوم المالتي تينانت","بنية الساس متعددة العملاء"]
---
## Definition

One application serves many customers (tenants). They share the same system, but each one sees only its own data.

## Where you hear it

SaaS product design and security reviews.

## Examples

- Each clinic is a tenant and cannot see another clinic's data.
- Add a `tenant_id` to every table.

## Common mistake

Forgetting the tenant filter in one query. That single bug can leak one customer's data to another.

## Don't confuse with

Multi-tenancy is often confused with multi-instance architecture, where each customer gets their own dedicated server or database instance rather than sharing a single shared environment.

## Say it at work

- We need to ensure that our new reporting module is fully compatible with our multi-tenant SaaS architecture.
- Please verify that the data isolation logic is implemented correctly to support the multi-tenant SaaS requirements for this release.
