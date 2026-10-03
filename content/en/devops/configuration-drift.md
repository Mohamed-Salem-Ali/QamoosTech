---
id: configuration-drift
category: devops
level: intermediate
related: [infrastructure-as-code, source-of-truth, rollback]
term: "Configuration Drift"
pronunciation: "kuhn-fig-yuh-RAY-shun DRIFT"
keywords: ["servers changed over time","production settings do not match code","manual server changes lost","infrastructure state mismatch","servers out of sync","baseline configuration changed","config drift","server state drift","fix server inconsistency","untracked server changes","انحراف الإعدادات","تغير إعدادات الخادم بمرور الوقت","عدم تطابق الإعدادات مع الكود","فقدان التعديلات اليدوية على الخادم","الخوادم غير متطابقة مع البايزلين","كونفيجريشن دريفت","اختلاف إعدادات بيئة الإنتاج","تغير حالة الخوادم تدريجيا"]
---

## Definition

Configuration drift happens when the actual settings or state of a server or system slowly change over time and no longer match the original code or defined baseline.

## Where you hear it

During server audits, troubleshooting production issues, or reviewing Infrastructure as Code pipelines.

## Examples

- Configuration drift caused the staging environment to behave differently than production.
- We run automated scans daily to detect any configuration drift on our cloud servers.

## Common mistake

Thinking that manual fixes made directly on a live server will be saved in the version control system automatically.

## Don't confuse with

Configuration drift is often confused with 'environment inconsistency', but drift specifically refers to changes over time from a known baseline, whereas inconsistency refers to differences between two environments that may never have been identical.

## Say it at work

- I think we have some configuration drift on the web server, so we should re-run the provisioning script to sync it back up.
- Please review the logs, as the recent configuration drift is likely causing the deployment failure we observed this morning.
