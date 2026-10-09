---
id: registry-pattern
category: architecture
subcategory: patterns
level: intermediate
related: [design-pattern, decoupling, dependency-injection]
tags: [python]
aliases: ["registry", "plugin registry", "dispatch table"]
term: "Registry Pattern"
translation: "نمط السجل"
pronunciation: "ريجستري باترن"
keywords: ["البحث بالاسم", "تسجيل الدوال في قاموس", "جدول الإضافات", "decorator يسجل", "تجنب سلاسل if elif الطويلة", "معالجات الأوامر بالاسم", "lookup by name", "register functions in a dict", "plugin table", "decorator that registers", "avoid long if elif chains", "command handlers by name"]
---

## التعريف

نمط السجل (Registry Pattern) يجمع الدوال أو الأصناف في جدول بحث، غالباً قاموس، ليجد الكود المناسب منها بالاسم بدل سلسلة طويلة من عبارات `if`.

## أين تسمعه؟

في أنظمة الإضافات، ومعالجات أوامر الـ CLI، والـ serializers، وكود بايثون الذي يستخدم decorator مثل `@register`.

## أمثلة

- Each command registers itself, and the CLI looks it up by name.
  - كل أمر يسجّل نفسه والـ CLI يبحث عنه بالاسم.
- Adding a new exporter means adding one function; no `if` chain to edit.
  - إضافة مصدّر جديد تعني إضافة دالة واحدة؛ بلا سلسلة `if` للتعديل.
- The registry maps command names to handlers, so the CLI looks each one up by name.
  - يربط السجل أسماء الأوامر بمعالجاتها، فتبحث واجهة سطر الأوامر عن كل واحد منها بالاسم.

## خطأ شائع

ترك السجل يصبح متغيراً عاماً خفياً تغيّره الاختبارات والاستيرادات. اجعل التسجيل صريحاً واختبره.

## لا تخلطه مع

حقن الاعتماديات (Dependency Injection) حيث تمرر الكائن المطلوب. أما السجل فجدول بحث مشترك يمد إليه الكود يده.

## قلها في العمل

- Use a registry so new handlers plug in without editing the core.
  - استخدم سجلاً لتُضاف المعالجات الجديدة دون تعديل النواة.
- Register the function with the decorator.
  - سجّل الدالة بالـ decorator.
