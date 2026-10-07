---
id: auto-escaping
category: security
subcategory: application-security
level: intermediate
related: [xss, input-validation, content-security-policy]
tags: [django, python]
aliases: ["autoescape", "html escaping", "output escaping"]
term: "Auto-Escaping"
translation: "الهروب التلقائي للرموز"
pronunciation: "أوتو إسكيبينج"
keywords: ["القالب يهرّب الـ HTML تلقائياً", "تعطيل رموز الأقواس الزاوية", "منع XSS في القوالب", "خطورة الفلتر safe", "المتغيرات تُهرَّب", "مخاطر mark_safe", "template escapes html automatically", "neutralise angle brackets", "prevent xss in templates", "safe filter danger", "variables are escaped", "mark_safe risk"]
---

## التعريف

الهروب التلقائي (Auto-Escaping) ميزة في القوالب تحوّل تلقائياً الرموز الخاصة مثل `<` و`>` في المتغيرات إلى نص غير ضار، فلا يستطيع إدخال المستخدم حقن HTML أو سكربتات.

## أين تسمعه؟

في قوالب Django وJinja، وأدلة منع XSS، ومراجعات الأمان لـ `|safe` و`mark_safe`.

## أمثلة

- Django escapes variables automatically, so a `<script>` tag shows as plain text.
  - يهرّب Django المتغيرات تلقائياً فيظهر وسم `<script>` كنص عادي.
- Don't turn auto-escaping off for user content.
  - لا تعطّل الهروب التلقائي لمحتوى المستخدم.

## خطأ شائع

وسم نص المستخدم على أنه آمن لـ"إصلاح" مشكلة عرض. هذا يزيل الحماية ويفتح ثغرة XSS.

## لا تخلطه مع

التحقق من المدخلات الذي يفحص البيانات عند دخولها. أما الهروب فيحمي المخرجات عند عرضها.

## قلها في العمل

- Is auto-escaping on in this template?
  - هل الهروب التلقائي مفعّل في هذا القالب؟
- Why is there a `|safe` on user input?
  - لماذا يوجد `|safe` على مدخلات المستخدم؟
