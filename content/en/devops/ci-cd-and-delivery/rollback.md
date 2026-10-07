---
id: rollback
category: devops
subcategory: ci-cd-and-delivery
level: intermediate
related: [deployment, feature-flag]
term: "Rollback"
pronunciation: "ROHL-bak"
keywords: ["revert to previous version","undo bad software release","go back to stable build","cancel recent deployment","restore previous working state","roll back production changes","revert deployment errors","how to perform rollback","previous version recovery","reverting failed update","العودة للإصدار السابق","التراجع عن التحديث الأخير","إلغاء عملية النشر الحالية","استعادة النسخة المستقرة","طريقة التراجع عن الإصدار","الرجوع لحالة النظام السابقة","إصلاح أخطاء الإصدار الجديد","تراجع عن التغييرات البرمجية","عملية رول باك للنظام","استرجاع النظام بعد العطل"]
---
## Definition

Returning to the previous working version after a bad release.

## Where you hear it

Incidents and release plans.

## Examples

- The release broke login, so we rolled back in two minutes.
- Always have a rollback plan before you deploy.

## Common mistake

Forgetting that a database migration may not be reversible. Plan data changes carefully.

## Don't confuse with

Rollback is often confused with roll-forward; rollback reverts the system to a previous stable state, whereas roll-forward applies a new fix or patch to resolve the issue in the current version.

## Say it at work

- The new feature is causing too many errors, so let's perform a rollback to the previous build immediately.
- I have initiated a rollback of the production environment due to the critical memory leak identified in the latest deployment.
