---
id: dark-launch
category: devops
subcategory: ci-cd-and-delivery
level: intermediate
related: [feature-flag, canary-release, ab-test]
term: "Dark Launch"
pronunciation: "dark lonch"
keywords: ["deploy code hidden from users", "test under real traffic without showing it", "copy traffic to new service", "shadow traffic test", "hidden feature in production", "نشر شيفرة مخفية عن المستخدمين", "اختبار بحركة مرور حقيقية دون عرض", "نسخ حركة المرور إلى خدمة جديدة", "ميزة مخفية في الإنتاج"]
---

## Definition

Releasing code to production while the feature stays hidden from users, so the team can test it under real load before it is turned on for anyone.

## Where you hear it

In release planning, and in discussions about testing a new service with real traffic.

## Examples

- The search service runs in a dark launch, so no user sees it yet.
- We copied 10 percent of the traffic to the new service and ignored its responses.

## Common mistake

Calling any hidden feature a dark launch. The point is to exercise the code under real load, not only to hide it.

## Don't confuse with

A dark launch deploys hidden code to test it. A feature flag controls who sees a finished feature.
