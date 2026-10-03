---
id: full-text-search
category: databases
level: intermediate
related: [database, index, query]
term: "Full-Text Search"
translation: "البحث في كامل النص"
pronunciation: "فول-تيكست سورتش"
---

## التعريف

تقنية تتيح البحث داخل المستندات أو الأعمدة النصية الطويلة من خلال تحليل المحتوى اللغوي بدلاً من مطابقة النصوص حرفياً. توفر هذه التقنية ميزات متقدمة مثل البحث عن مشتقات الكلمات، المرادفات، وترتيب النتائج حسب صلتها بكلمات البحث.

## أين تسمعه؟

عند مناقشة أداء قواعد البيانات، أو عند تصميم ميزة البحث في تطبيق ما، أو عند اختيار محرك بحث مناسب.

## أمثلة

- We need to implement Full-Text Search to allow users to find articles by keywords.
  - نحتاج إلى تطبيق Full-Text Search للسماح للمستخدمين بالعثور على المقالات باستخدام الكلمات المفتاحية.
- The database index for Full-Text Search is significantly larger than a standard B-tree index.
  - فهرس قاعدة البيانات الخاص بـ Full-Text Search أكبر بكثير من الفهرس العادي من نوع B-tree.

## خطأ شائع

الاعتقاد بأن استخدام معامل `LIKE` في SQL يؤدي نفس الغرض؛ فمعامل `LIKE` يقوم بمطابقة النصوص حرفياً وهو بطيء جداً وغير فعال عند التعامل مع كميات كبيرة من البيانات النصية.
