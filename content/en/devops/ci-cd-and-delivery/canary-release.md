---
id: canary-release
category: devops
subcategory: ci-cd-and-delivery
level: intermediate
related: [ci-cd, deployment, rollback]
term: "Canary Release"
pronunciation: "KAN-uh-ree ri-LEES"
keywords: ["roll out new version to few users","test update on subset of users","deploy to small percentage of traffic","gradual traffic shifting deployment","canary deployment strategy","monitor new release before full rollout","test new features safely in production","canary deployment","canary update","نشر التحديث لمجموعة صغيرة من المستخدمين","إطلاق التحديث تدريجيا للمستخدمين","فحص النسخة الجديدة على نسبة قليلة","نشر التحديثات بحذر للتاكد من الاستقرار","تحويل جزء من حركة المرور للتجربة","استراتيجية النشر التدريجي","اصدار الكناري","كاناري ريليس"]
---

## Definition

A deployment strategy where a new version of an application is rolled out to a small subset of users before being deployed to the entire infrastructure. This allows engineers to monitor the new version for issues without impacting all users.

## Where you hear it

During release planning meetings, CI/CD pipeline discussions, and incident post-mortems.

## Examples

- We will perform a canary release to 5% of our traffic to ensure the new database schema is stable.
- The team decided to use a canary release to test the new payment gateway integration.

## Common mistake

Confusing a canary release with a blue-green deployment; while both are deployment strategies, a canary release focuses on incremental traffic shifting, whereas blue-green focuses on switching between two identical production environments.

## Don't confuse with

Canary release is often confused with A/B testing; while both involve splitting traffic, a canary release is a deployment strategy focused on system stability, whereas A/B testing is a marketing strategy focused on user behavior and feature performance.

## Say it at work

- Let's start with a canary release for the new dashboard to see if it handles the load correctly.
- I recommend a canary release for this update to minimize potential downtime for our production users.
