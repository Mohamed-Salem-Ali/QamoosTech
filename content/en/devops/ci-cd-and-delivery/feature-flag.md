---
id: feature-flag
category: devops
subcategory: ci-cd-and-delivery
level: intermediate
related: [rollback, deployment]
term: "Feature Flag"
pronunciation: "FEE-cher FLAG"
keywords: ["toggle features without deployment","enable code for specific users","turn off broken features instantly","gradual rollout control switch","dynamic feature toggling","conditional code execution switch","beta testing release control","feature toggle pattern","remote configuration switch","kill switch for features","تفعيل الميزة بدون نشر جديد","مفتاح تشغيل الميزات برمجيا","التحكم في ظهور الميزات","إصدار الميزات بشكل تدريجي","إيقاف الميزات عند حدوث أعطال","تفعيل الميزة لمستخدمين محددين","مفتاح تبديل الوظائف البرمجية","فيتشر فلاج","التحكم في الميزات عن بعد","مفاتيح تفعيل الخصائص"]
---
## Definition

A switch in the code that turns a feature on or off without a new deployment, often for a small group of users first.

## Where you hear it

Gradual releases and A/B testing.

## Examples

- The new checkout is behind a feature flag for 10% of users.
- If something breaks, just switch the flag off.

## Common mistake

Never removing old flags. They pile up and make the code confusing.

## Don't confuse with

A feature flag controls functionality dynamically without a deployment, while a branch is a separate line of development in version control that requires a merge and deployment to reach production.

## Say it at work

- Let us wrap this new UI component behind a feature flag before we merge it.
- Please ensure the feature flag is enabled for all beta testers in the upcoming release.
