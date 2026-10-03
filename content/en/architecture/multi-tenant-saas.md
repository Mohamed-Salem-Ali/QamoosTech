---
id: multi-tenant-saas
category: architecture
level: intermediate
related: [scalability, rbac]
term: "Multi-tenant SaaS"
pronunciation: "MUL-tee TEN-ant SASS"
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
