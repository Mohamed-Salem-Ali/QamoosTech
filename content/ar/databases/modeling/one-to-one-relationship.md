---
id: one-to-one-relationship
category: databases
subcategory: modeling
level: intermediate
related: [foreign-key, many-to-many-relationship, data-model]
tags: [sql, django]
aliases: ["one to one", "one-to-one", "onetoonefield"]
term: "One-to-One Relationship"
translation: "علاقة واحد لواحد"
pronunciation: "وان تو وان"
keywords: ["كل صف له مقابل واحد بالضبط", "المستخدم وملفه الشخصي", "تقسيم جدول كبير", "مفتاح أجنبي فريد", "حقل OneToOneField", "جدول تفاصيل إضافية", "each row has exactly one match", "user and profile", "split a large table", "unique foreign key", "onetoonefield", "extra details table"]
---

## التعريف

في علاقة واحد لواحد (One-to-One) يطابق كل صف في جدول صفاً واحداً على الأكثر في جدول آخر، مثل المستخدم وملفه الشخصي.

## أين تسمعه؟

في تصميم المخطط، عندما تُفصل التفاصيل الاختيارية عن الجدول الرئيسي، وفي حقول الـ ORM مثل `OneToOneField`.

## أمثلة

- Each user has exactly one profile row.
  - لكل مستخدم صف ملف شخصي واحد بالضبط.
- A one-to-one link is just a foreign key with a unique constraint.
  - رابط واحد لواحد هو مفتاح أجنبي مع قيد فرادة.
- Each employee has one badge record, enforced by a unique foreign key.
  - لكل موظف سجل شارة واحد، يفرضه مفتاح أجنبي فريد.

## خطأ شائع

استخدام واحد لواحد حين يمكن جعل البيانات أعمدة في الجدول نفسه. افصل فقط عند وجود سبب حقيقي.

## لا تخلطه مع

علاقة واحد لمتعدد (One-to-Many) حيث قد يطابق صف واحد صفوفاً كثيرة، مثل جمعية واحدة وأعضاء كثر.

## قلها في العمل

- Model the optional details as a one-to-one table.
  - نمذج التفاصيل الاختيارية كجدول بعلاقة واحد لواحد.
- It's one-to-one, so the foreign key must be unique.
  - إنها واحد لواحد، لذا يجب أن يكون المفتاح الأجنبي فريداً.
