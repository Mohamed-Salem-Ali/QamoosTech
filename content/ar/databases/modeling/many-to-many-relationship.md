---
id: many-to-many-relationship
category: databases
subcategory: modeling
level: intermediate
related: [join-table, foreign-key, one-to-one-relationship]
tags: [sql, django]
aliases: ["many to many", "many-to-many", "manytomanyfield"]
term: "Many-to-Many Relationship"
translation: "علاقة متعدد لمتعدد"
pronunciation: "ماني تو ماني"
keywords: ["متعدد من الطرفين", "الطلاب والمقررات", "الوسوم على المقالات", "جدول الربط", "حقل ManyToManyField", "لكل منهما عدة مقابلات", "many on both sides", "students and courses", "tags on articles", "linking table", "manytomanyfield", "each can have many"]
---

## التعريف

في علاقة متعدد لمتعدد (Many-to-Many) قد يطابق كل صف من أحد الجانبين صفوفاً كثيرة من الجانب الآخر، مثل الطلاب والمقررات. وتُخزَّن في جدول وسيط.

## أين تسمعه؟

في تصميم المخطط، وتوثيق الـ ORM، وأي ميزة تتضمن وسوماً أو عضويات أو تسجيلات.

## أمثلة

- An article can have many tags, and a tag can belong to many articles.
  - للمقال الواحد وسوم كثيرة، وللوسم الواحد مقالات كثيرة.
- The ORM manages the many-to-many link through a hidden table.
  - يدير الـ ORM رابط متعدد لمتعدد عبر جدول مخفي.
- A student takes many courses, and each course has many students.
  - يدرس الطالب دورات كثيرة، ولكل دورة طلاب كثيرون.

## خطأ شائع

محاولة تخزين قائمة معرّفات في عمود واحد. استخدم جدولاً وسيطاً لتستطيع قاعدة البيانات فرض الروابط والاستعلام عنها.

## لا تخلطه مع

علاقة واحد لمتعدد حيث لكل صف تابع أب واحد بالضبط.

## قلها في العمل

- This is many-to-many, so we need a join table.
  - هذه متعدد لمتعدد، لذا نحتاج جدولاً وسيطاً.
- Does a member belong to several circles? Then it's many-to-many.
  - هل ينتمي العضو إلى عدة جمعيات؟ إذن هي متعدد لمتعدد.
