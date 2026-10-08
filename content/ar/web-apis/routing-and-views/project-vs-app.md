---
id: project-vs-app
category: web-apis
subcategory: routing-and-views
level: beginner
related: [web-framework, view, url-routing]
tags: [django, python]
aliases: ["django app", "django project"]
term: "Project vs App"
translation: "المشروع مقابل التطبيق"
pronunciation: "بروجكت فيرسس آب"
keywords: ["مشروع Django وتطبيقاته", "الموقع كله مقابل ميزة واحدة", "أمر startapp", "مجلد ميزة قابلة لإعادة الاستخدام", "الإعدادات والروابط على مستوى المشروع", "تطبيقات داخل المشروع", "django project and apps", "whole site versus one feature", "startapp", "reusable feature folder", "settings and urls at project level", "apps inside the project"]
---

## التعريف

في Django، المشروع (Project) هو الموقع كله مع إعداداته، أما التطبيق (App) فميزة مستقلة داخله، مثل `payments` أو `members`، لها نماذجها وviews واختباراتها.

## أين تسمعه؟

في دروس Django (`startproject` و`startapp`)، ومراجعات الكود حول كيفية تقسيم الميزات، ونقاشات بنية المشروع.

## أمثلة

- Create a new app for payments and add it to `INSTALLED_APPS`.
  - أنشئ تطبيقاً جديداً للدفعات وأضفه إلى `INSTALLED_APPS`.
- One project can hold many apps.
  - يمكن لمشروع واحد أن يضم تطبيقات كثيرة.
- The shop project has three apps: catalog, cart and accounts.
  - يضم مشروع المتجر ثلاثة تطبيقات (apps): الكتالوج والسلة والحسابات.

## خطأ شائع

وضع كل شيء في تطبيق عملاق واحد، أو إنشاء تطبيق لكل نموذج صغير. اهدف إلى تطبيق لكل مجال ميزة واضح.

## لا تخلطه مع

التطبيق (app) في الكلام اليومي ويعني المنتج كله. أما في Django فالتطبيق جزء من المشروع فقط.

## قلها في العمل

- Which app owns this model?
  - أي تطبيق يملك هذا النموذج؟
- Settings live in the project, not in any app.
  - الإعدادات في المشروع وليست في أي تطبيق.
