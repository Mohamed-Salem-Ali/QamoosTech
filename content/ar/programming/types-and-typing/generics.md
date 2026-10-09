---
id: generics
category: programming
subcategory: types-and-typing
level: intermediate
related: [type-hint, union-type, interface]
tags: [typescript, python]
aliases: ["generic", "generic type"]
term: "Generics"
translation: "الأنواع العامة"
pronunciation: "جنريكس"
keywords: ["كود يعمل مع أي نوع", "قائمة من النوع T", "إبقاء النوع متسقاً", "TypeVar", "حاوية مكتوبة الأنواع قابلة لإعادة الاستخدام", "list<string> في Java", "code that works for any type", "list of t", "keep type consistent", "reusable typed container", "list<string> in java"]
---

## التعريف

الأنواع العامة (Generics) تتيح لدالة أو صنف واحد العمل مع أنواع كثيرة مع إبقائها متسقة، مثل قائمة أرقام أو قائمة نصوص.

## أين تسمعه؟

في TypeScript وJava وبايثون ذات الأنواع، وتوثيق المكتبات، ونقاشات تصميم الـ API.

## أمثلة

- A generic list keeps track of what kind of items it holds.
  - القائمة العامة تتتبع نوع العناصر التي تحملها.
- The function is generic: it returns the same type it was given.
  - الدالة عامة: تعيد النوع نفسه الذي أُعطيته.
- A generic cache keeps the type of the values it stores, so callers get the right type back.
  - تحتفظ الذاكرة المؤقتة العامة (generic) بنوع القيم التي تخزّنها، فيحصل المستدعي على النوع الصحيح.

## خطأ شائع

جعل كل شيء عاماً. استخدم الـ generics فقط عندما ينطبق المنطق نفسه فعلاً على أنواع كثيرة.

## لا تخلطه مع

النوع `any` الذي يوقف الفحص. أما الـ generic فيحتفظ بمعلومات النوع.

## قلها في العمل

- Let's make this container generic so it can hold any item type.
  - لنجعل هذه الحاوية عامة لتتمكن من حمل أي نوع عناصر.
- The return type is generic, so the editor knows exactly what comes back.
  - نوع الإرجاع عام، لذا يعرف المحرر بالضبط ما الذي يعود.
