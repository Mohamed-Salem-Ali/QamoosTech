---
id: eager-loading
category: databases
subcategory: orm-and-migrations
level: intermediate
related: [n-plus-one, orm, join]
tags: [django, sql]
aliases: ["select_related", "prefetch_related", "preloading"]
term: "Eager Loading"
translation: "التحميل المسبق"
pronunciation: "إيجر لودينج"
keywords: ["تحميل الصفوف المرتبطة مسبقاً", "‏select_related و prefetch_related", "تجنب استعلامات إضافية في حلقة", "جلب العلاقات مع الاستعلام الرئيسي", "علاج مشكلة N+1", "تضمين العلاقة في الاستعلام", "load related rows up front", "select_related and prefetch_related", "avoid extra queries in a loop", "fetch relations with the main query", "fix n plus one", "include relation in query"]
---

## التعريف

التحميل المسبق (Eager Loading) يجلب الصفوف المرتبطة مع الاستعلام الرئيسي، بدلاً من جلبها واحداً واحداً لاحقاً عندما يلمسها الكود.

## أين تسمعه؟

في تحسين أداء الـ ORM، ومراجعات الكود التي تصلح صفحات القوائم البطيئة، و`select_related` و`prefetch_related` في Django.

## أمثلة

- Eager loading the member with each payment turned 101 queries into one.
  - التحميل المسبق للعضو مع كل دفعة حوّل 101 استعلاماً إلى واحد.
- Use eager loading before looping over the related objects.
  - استخدم التحميل المسبق قبل المرور على الكائنات المرتبطة.
- With eager loading, the orders page runs one query instead of one per customer.
  - مع التحميل المسبق (eager loading) تنفّذ صفحة الطلبات استعلاماً واحداً بدلاً من واحد لكل عميل.

## خطأ شائع

التحميل المسبق لكل شيء في كل مكان. حمّل العلاقات التي ستستخدمها فعلاً فقط وإلا جلبت بيانات لن تقرأها.

## لا تخلطه مع

التحميل الكسول (Lazy Loading) الذي يجلب العلاقة عند أول وصول إليها فقط. هو مريح لكنه سبب استعلامات N+1 في الحلقات.

## قلها في العمل

- Add select_related here to load the member eagerly.
  - أضف select_related هنا لتحميل العضو مسبقاً.
- This page does one query per row; eager load the relation.
  - تنفّذ هذه الصفحة استعلاماً لكل صف؛ حمّل العلاقة مسبقاً.
