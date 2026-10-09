---
id: retention-policy
category: security
subcategory: data-protection
level: intermediate
related: [gdpr-deletion, audit-logging, pii]
aliases: ["data retention", "lifecycle rule", "log retention"]
term: "Retention Policy"
pronunciation: "rih-TEN-shun POL-ih-see"
keywords: ["how long to keep data", "delete after 90 days", "log expiry", "backups lifecycle", "legal requirement", "storage cost", "مدة الاحتفاظ بالبيانات", "الحذف بعد 90 يوماً", "انتهاء السجلات", "دورة حياة النسخ الاحتياطية", "متطلب قانوني", "تكلفة التخزين"]
---

## Definition

A retention policy defines how long different kinds of data (logs, backups, user records) are kept before being deleted or archived, balancing legal rules, usefulness and storage cost.

## Where you hear it

In S3 and logging settings (lifecycle rules), compliance projects (GDPR, SOC 2) and backup planning.

## Examples

- Application logs are kept for 30 days, then deleted.
- Set a lifecycle rule to expire old backups after a year.
- The retention policy keeps invoices for seven years and deletes the logs after 90 days.

## Common mistake

Keeping everything forever "just in case". It raises cost and legal risk, especially for personal data.

## Don't confuse with

A backup, which is a copy for recovery. Retention decides how long copies and logs are kept.

## Say it at work

- What's our retention period for access logs?
- Archive after 90 days, delete after two years.
