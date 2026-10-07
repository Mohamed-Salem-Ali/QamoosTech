---
id: join-table
category: databases
subcategory: modeling
level: intermediate
related: [many-to-many-relationship, foreign-key, join]
tags: [sql, django]
aliases: ["junction table", "through table", "associative table", "link table"]
term: "Join Table"
translation: "الجدول الوسيط"
pronunciation: "جوين تيبل"
keywords: ["جدول يربط جدولين", "جدول الوصل", "جدول through", "علاقة متعدد لمتعدد في SQL", "الجدول التجميعي", "تسجيل الطلاب في المقررات", "table linking two tables", "junction table", "through table", "many to many in sql", "associative table", "student course enrollment"]
---

## التعريف

الجدول الوسيط (Join Table) جدول تربط صفوفه صفوفاً من جدولين آخرين، عادة بمفتاحين أجنبيين. وهكذا تُخزَّن علاقة متعدد لمتعدد.

## أين تسمعه؟

في تصميم المخطط، وتوثيق الـ ORM لحقول متعدد لمتعدد، ومقابلات قواعد البيانات.

## أمثلة

- The `enrollment` table is a join table between students and courses.
  - جدول `enrollment` جدول وسيط بين الطلاب والمقررات.
- Django creates the join table for a many-to-many field automatically.
  - ينشئ Django الجدول الوسيط لحقل متعدد لمتعدد تلقائياً.

## خطأ شائع

عدم إضافة قيد فرادة على زوج المفتاحين. عندها قد يُخزَّن الرابط نفسه مرتين.

## لا تخلطه مع

‏`JOIN` في SQL وهو استعلام يدمج الجداول. أما الجدول الوسيط فجدول حقيقي يخزّن الروابط.

## قلها في العمل

- Add a join table with the two foreign keys and a unique pair.
  - أضف جدولاً وسيطاً بالمفتاحين الأجنبيين وزوج فريد.
- The join table can also hold extra data, like the date someone joined.
  - يمكن أن يحمل الجدول الوسيط بيانات إضافية مثل تاريخ الانضمام.
