---
id: mixin
category: programming
subcategory: object-oriented
level: intermediate
related: [multiple-inheritance, composition, inheritance]
tags: [python, django]
aliases: ["mixins"]
term: "Mixin"
translation: "الصنف المُضاف"
pronunciation: "ميكس إن"
keywords: ["صنف صغير يضيف سلوكاً واحداً", "سلوك قابل لإعادة الاستخدام بالوراثة", "مثال JsonMixin", "الدمج مع أصناف أخرى", "إضافة ميزة لأصناف كثيرة", "الفرق بين mixin والصنف الأساسي", "small class that adds one behavior", "reusable behavior via inheritance", "jsonmixin example", "combine with other classes", "add feature to many classes", "mixin vs base class"]
---

## التعريف

الـ Mixin صنف صغير يضيف سلوكاً محدداً إلى أصناف أخرى عبر الوراثة. ولا يُقصد استخدامه وحده.

## أين تسمعه؟

في كود بايثون وDjango، مثل mixins تضيف التسجيل أو إخراج JSON، وفي نقاشات التصميم حول إعادة الاستخدام.

## أمثلة

- `JsonMixin` gives any class a `to_json()` method.
  - `JsonMixin` يعطي أي صنف دالة `to_json()`.
- The view inherits from the login mixin to require authentication.
  - ترث الـ view من mixin تسجيل الدخول لتشترط المصادقة.
- The Timestamps mixin adds created_at and updated_at to any model that inherits it.
  - يضيف الدمج Timestamps الحقلين created_at وupdated_at إلى أي نموذج يرثه.

## خطأ شائع

تكديس mixins كثيرة بسلوك متداخل. يصبح ترتيب البحث مربكاً؛ اجعل كل mixin مركزاً.

## لا تخلطه مع

الصنف الأساسي العادي الذي يمثل ماهية الشيء. أما الـ mixin فيضيف قدرة فقط.

## قلها في العمل

- Put that logging in a mixin and reuse it across the views.
  - ضع هذا التسجيل في mixin وأعد استخدامه في الـ views.
- Keep the mixin small: one behaviour only.
  - اجعل الـ mixin صغيراً: سلوك واحد فقط.
