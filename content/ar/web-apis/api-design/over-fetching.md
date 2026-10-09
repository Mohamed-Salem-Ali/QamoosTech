---
id: over-fetching
category: web-apis
subcategory: api-design
level: intermediate
related: [graphql, payload, pagination]
tags: [javascript]
aliases: ["under-fetching", "overfetching", "underfetching"]
term: "Over-Fetching and Under-Fetching"
translation: "الجلب الزائد والجلب الناقص"
pronunciation: "أوفر فيتشينج"
keywords: ["الـ API تعيد بيانات أكثر من اللازم", "حقول زائدة لا تحتاجها", "طلبات متعددة للحصول على الكفاية", "‏GraphQL يحلها", "عدة طلبات لشاشة واحدة", "حمولات أكبر", "api returns too much data", "extra fields you do not need", "multiple requests to get enough", "graphql solves it", "n requests for one screen", "bigger payloads"]
---

## التعريف

الجلب الزائد (Over-Fetching) أن تعيد الـ API بيانات أكثر مما يحتاجه العميل. والجلب الناقص (Under-Fetching) عكسه: نقطة نهاية واحدة لا تعيد ما يكفي فيضطر العميل إلى طلبات إضافية.

## أين تسمعه؟

في مقارنات REST وGraphQL، ومراجعات أداء الجوال، ونقاشات تصميم الـ API.

## أمثلة

- The list endpoint returns full profiles when we only need names; that's over-fetching.
  - تعيد نقطة القائمة ملفات كاملة ونحن نحتاج الأسماء فقط؛ هذا جلب زائد.
- The screen needs three requests to render; that's under-fetching.
  - تحتاج الشاشة ثلاثة طلبات لتُعرض؛ هذا جلب ناقص.
- The mobile app gets full product records but only displays the title and the price.
  - يحصل تطبيق الهاتف على سجلات المنتجات كاملة، لكنه يعرض العنوان والسعر فقط.

## خطأ شائع

إصلاحه بإضافة نقطة نهاية لكل شاشة. اختيار الحقول أو طبقة استعلام جيدة التصميم أفضل توسعاً.

## لا تخلطه مع

مشكلة N+1 وهي عن خادم ينفذ استعلامات قاعدة بيانات كثيرة، لا عن بيانات زائدة عبر الشبكة.

## قلها في العمل

- Let the client pick the fields it needs.
  - دع العميل يختار الحقول التي يحتاجها.
- We're over-fetching on mobile.
  - نحن نجلب أكثر من اللازم على الجوال.
