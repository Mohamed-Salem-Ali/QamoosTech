---
id: least-privilege
category: security
subcategory: authentication-and-access
level: intermediate
related: [rbac, authentication-vs-authorization, vulnerability]
term: "Least Privilege"
pronunciation: "LEEST PRIV-ih-lij"
keywords: ["restrict user permissions to minimum","give service account only needed access","principle of least privilege","limit damage from compromised component","minimum required access security","least privilege model","restrict permissions by default","minimal access control","prevent excessive admin rights","مبدأ الحد الأدنى من الصلاحيات","منح أقل صلاحيات ممكنة","تقييد صلاحيات المستخدمين والخدمات","صلاحيات محدودة للخدمات والعمليات","تحديد صلاحيات الوصول بدقة","ليست بريفيليج","تقليل الصلاحيات لتجنب الاختراق","منع إعطاء صلاحيات إدارية كاملة"]
---

## Definition

Least Privilege is a security principle where a user, process, or service is given only the absolute minimum permissions needed to perform its required task. This limits potential damage if a component is compromised.

## Where you hear it

In security reviews, cloud IAM configuration meetings, and architecture discussions about system hardening.

## Examples

- The database service account only has read and write access to the specific database it uses, rather than full admin rights.
- Developers use staging environment credentials that cannot modify production infrastructure.

## Common mistake

Granting broad administrative permissions temporarily for convenience and forgetting to revoke them later.

## Don't confuse with

Least Privilege restricts what a user or service can do, whereas separation of duties divides tasks among multiple people to prevent fraud or errors.

## Say it at work

- We need to apply the principle of least privilege to this microservice so it only accesses the storage bucket it actually requires.
- Please review the IAM roles to ensure that every service account adheres strictly to the least privilege model.
