---
id: upstream
category: git
level: intermediate
related: [branch, fork, repository]
term: "Upstream"
pronunciation: "أب-ستريم"
translation: "المستودع الرئيسي / المصدر"
---

## التعريف

يشير مصطلح Upstream إلى المستودع الأصلي الذي قمت بنسخه (fork)، أو الفرع البعيد الافتراضي الذي يتابعه فرعك المحلي لجلب التغييرات وإرسالها.

## أين تسمعه؟

عند جلب أحدث التغييرات من المشروع الأساسي أو عند إعداد ربط المستودعات في جيت.

## أمثلة

- Run `git remote add upstream` to link your fork to the original repository.
  - قم بتشغيل `git remote add upstream` لربط نسختك بالمستودع الأصلي.
- Always fetch from the upstream repository before starting a new feature.
  - احرص دائماً على جلب التغييرات من المستودع الرئيسي قبل البدء في تطوير ميزة جديدة.

## خطأ شائع

الخلط بين upstream و origin، حيث أن origin هو المستودع البعيد الخاص بك بينما upstream هو المشروع الأساسي الأصلي.
