---
id: virtual-environment
category: devops
subcategory: environments-and-packaging
level: beginner
related: [package-dependency, pip, package]
tags: [python]
aliases: ["venv", "virtualenv"]
term: "Virtual Environment"
translation: "البيئة الافتراضية"
pronunciation: "فيرتشوال إنفايرونمنت"
keywords: ["بايثون خاص بمشروع واحد", "مجلد venv", "عزل حزم المشروع", "تفعيل البيئة", "إصدارات مختلفة لكل مشروع", "تجنب التثبيت العام", "private python for one project", "venv folder", "isolate project packages", "activate the environment", "different versions per project", "avoid installing globally"]
---

## التعريف

البيئة الافتراضية (Virtual Environment) مجلد خاص يحوي نسخة بايثون وحزماً مثبتة خاصة بمشروع واحد، فلا تتداخل المشاريع مع بعضها.

## أين تسمعه؟

في تعليمات الإعداد (`python -m venv .venv`)، ووثائق الانضمام للفريق، وعندما يحتاج مشروعان إصدارين مختلفين من مكتبة.

## أمثلة

- Create and activate a virtual environment before installing anything.
  - أنشئ بيئة افتراضية وفعّلها قبل تثبيت أي شيء.
- It works in my venv but fails on the server because the versions differ.
  - يعمل في بيئتي الافتراضية لكنه يفشل على الخادم لاختلاف الإصدارات.

## خطأ شائع

تثبيت الحزم بشكل عام، أو نسيان تفعيل البيئة فيستخدم الأمر بايثون الخطأ.

## لا تخلطه مع

الحاوية (Container) التي تعزل طبقة نظام التشغيل كلها. أما البيئة الافتراضية فتعزل حزم بايثون فقط.

## قلها في العمل

- Did you activate the venv?
  - هل فعّلت الـ venv؟
- Delete the .venv folder and recreate it; it is disposable.
  - احذف مجلد .venv وأعد إنشاءه؛ فهو قابل للاستبدال.
