---
id: model
category: databases
subcategory: orm-and-migrations
level: beginner
related: [orm, queryset, data-model]
tags: [django, python]
aliases: ["django model", "model class", "orm model"]
term: "Model"
translation: "النموذج"
pronunciation: "مودل"
keywords: ["صنف يصف جدولاً", "نموذج Django", "الحقول تصبح أعمدة", "الكائنات هي الصفوف", "صنف الـ ORM", "عرّف بياناتك في بايثون", "class that describes a table", "django model", "fields become columns", "instances are rows", "orm class", "define your data in python"]
---

## التعريف

في الـ ORM، النموذج (Model) صنف يصف جدولاً في قاعدة البيانات: حقوله تصبح أعمدة وكل كائن منه هو صف.

## أين تسمعه؟

في كود Django وSQLAlchemy، وملفات `models.py`، ونقاشات الترحيلات.

## أمثلة

- Add a `due_date` field to the Payment model.
  - أضف حقل `due_date` إلى نموذج Payment.
- Changing a model means creating a migration.
  - تغيير نموذج يعني إنشاء ترحيلة.

## خطأ شائع

استخدامه لأي كائن بيانات. النموذج مرتبط بجدول أما الصنف العادي أو الـ dataclass فلا.

## لا تخلطه مع

نموذج البيانات وهو التصميم العام للبيانات. أما النموذج فصنف واحد داخل ذلك التصميم.

## قلها في العمل

- Which model owns this field?
  - أي نموذج يملك هذا الحقل؟
- Keep the model thin; put rules in services.
  - أبقِ النموذج نحيفاً وضع القواعد في خدمات.
