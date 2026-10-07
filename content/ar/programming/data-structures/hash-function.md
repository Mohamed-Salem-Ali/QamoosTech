---
id: hash-function
category: programming
subcategory: data-structures
level: intermediate
related: [hashable, hashing, dictionary]
tags: [python]
aliases: ["hash", "hash table", "hash collision", "checksum"]
term: "Hash Function"
translation: "دالة التجزئة"
pronunciation: "هاش فنكشن"
keywords: ["تحوّل البيانات إلى رقم بحجم ثابت", "نفس المدخل نفس المخرج", "البحث في القاموس", "التصادمات", "‏SHA-256 وMD5", "جدول التجزئة", "turns data into a fixed size number", "same input same output", "dictionary lookup", "collisions", "sha256 md5", "hash table"]
---

## التعريف

دالة التجزئة (Hash Function) تحوّل أي مدخل إلى قيمة بحجم ثابت (الهاش). المدخل نفسه يعطي الهاش نفسه دائماً، والدالة الجيدة توزع المدخلات المختلفة على مدى واسع.

## أين تسمعه؟

في القواميس والمجموعات، وقيم التحقق، وتخزين كلمات المرور، والذاكرة المؤقتة، ونقاشات الأمان.

## أمثلة

- A dict uses a hash function to find the slot for each key.
  - يستخدم القاموس دالة تجزئة لإيجاد خانة كل مفتاح.
- Two inputs with the same hash are a collision.
  - مدخلان بالهاش نفسه يسميان تصادماً.

## خطأ شائع

استخدام هاش سريع مثل MD5 لكلمات المرور أو للأمان. اختر دالة مخصصة بطيئة ومملّحة لكلمات المرور.

## لا تخلطه مع

التشفير الذي يمكن عكسه بمفتاح. أما الهاش فباتجاه واحد.

## قلها في العمل

- What hash function does this use?
  - أي دالة تجزئة يستخدم هذا؟
- Compare the file hashes to check integrity.
  - قارن هاشات الملفات للتحقق من السلامة.
