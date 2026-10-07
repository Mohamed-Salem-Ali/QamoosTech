---
id: pyproject-toml
category: devops
subcategory: environments-and-packaging
level: intermediate
related: [pip, distribution-package, package-dependency]
tags: [python]
aliases: ["toml", "build backend", "src layout"]
term: "pyproject.toml"
translation: "ملف إعداد مشروع بايثون"
pronunciation: "باي بروجكت تومل"
keywords: ["ملف إعداد مشروع بايثون", "إعدادات نظام البناء", "بيانات المشروع واعتمادياته", "إعدادات أدوات مثل ruff وpytest", "ملف إعداد TOML", "بديل setup.py الحديث", "python project config file", "build system settings", "project metadata and dependencies", "tool settings for ruff pytest", "toml configuration", "modern setup.py replacement"]
---

## التعريف

ملف `pyproject.toml` هو ملف الإعداد القياسي لمشروع بايثون. يحوي اسم المشروع وإصداره واعتمادياته وإعدادات البناء، وإعدادات أدوات مثل Ruff وpytest. وTOML هو صيغته البسيطة `key = value`.

## أين تسمعه؟

عند إنشاء حزمة بايثون أو نشرها، وإعداد أدوات الفحص والاختبار، وقراءة إعداد مستودع.

## أمثلة

- All the tool settings live in `pyproject.toml`.
  - كل إعدادات الأدوات موجودة في `pyproject.toml`.
- Add the dependency to `pyproject.toml` and reinstall.
  - أضف الاعتمادية إلى `pyproject.toml` وأعد التثبيت.

## خطأ شائع

تكرار الإعدادات نفسها في عدة ملفات. يجب أن يكون `pyproject.toml` المصدر الوحيد.

## لا تخلطه مع

ملف `requirements.txt` الذي يسرد الحزم المراد تثبيتها فقط. أما `pyproject.toml` فيصف المشروع كله.

## قلها في العمل

- Where is the Ruff config? In pyproject.toml.
  - أين إعداد Ruff؟ في pyproject.toml.
- The build backend is declared in pyproject.toml.
  - يُعلَن الـ build backend في pyproject.toml.
