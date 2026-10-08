---
id: project-vs-app
category: web-apis
subcategory: routing-and-views
level: beginner
related: [web-framework, view, url-routing]
tags: [django, python]
aliases: ["django app", "django project"]
term: "Project vs App"
pronunciation: "PROJ-ekt vee-ES AP"
keywords: ["django project and apps", "whole site versus one feature", "startapp", "reusable feature folder", "settings and urls at project level", "apps inside the project", "مشروع Django وتطبيقاته", "الموقع كله مقابل ميزة واحدة", "أمر startapp", "مجلد ميزة قابلة لإعادة الاستخدام", "الإعدادات والروابط على مستوى المشروع", "تطبيقات داخل المشروع"]
---

## Definition

In Django, a project is the whole site and its settings, while an app is one self-contained feature inside it, such as `payments` or `members`, with its own models, views and tests.

## Where you hear it

In Django tutorials (`startproject`, `startapp`), code reviews on how to split features, and project structure debates.

## Examples

- Create a new app for payments and add it to `INSTALLED_APPS`.
- One project can hold many apps.
- The shop project has three apps: catalog, cart and accounts.

## Common mistake

Putting everything into one giant app, or making an app for every tiny model. Aim for one app per clear feature area.

## Don't confuse with

A mobile or web app in everyday speech, meaning the whole product. In Django, an app is only a piece of the project.

## Say it at work

- Which app owns this model?
- Settings live in the project, not in any app.
