---
id: full-text-search
category: databases
subcategory: querying
level: intermediate
related: [database, index, query]
term: "Full-Text Search"
translation: "البحث في كامل النص"
pronunciation: "فول-تيكست سورتش"
keywords: ["البحث في النصوص الطويلة","البحث داخل المستندات","البحث عن الكلمات المفتاحية","بديل معامل لايك في البحث","البحث المتقدم في قاعدة البيانات","فول تيكست سورتش","البحث في كامل النص","تحليل النصوص للبحث عنها","search inside long text","search for words in documents","sql like alternative for search","search with relevance ranking","search documents by keywords","linguistic text search","fultext search","search engine for database"]
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
- A full-text search for running also finds documents that say run and runs.
  - يجد البحث النصي الكامل عن running المستندات التي تذكر run وruns أيضاً.

## خطأ شائع

الاعتقاد بأن استخدام معامل `LIKE` في SQL يؤدي نفس الغرض؛ فمعامل `LIKE` يقوم بمطابقة النصوص حرفياً وهو بطيء جداً وغير فعال عند التعامل مع كميات كبيرة من البيانات النصية.

## لا تخلطه مع

غالباً ما يتم الخلط بين Full-Text Search ومطابقة الكلمات المفتاحية عبر معامل LIKE، ولكن بينما يقوم LIKE بمسح حرفي للنصوص، يستخدم Full-Text Search فهارس متخصصة لتوفير التحليل اللغوي وترتيب النتائج حسب الصلة.

## قلها في العمل

- Let's switch to Full-Text Search for the product catalog so users get better results when they make typos.
  - دعونا ننتقل إلى استخدام Full-Text Search في دليل المنتجات حتى يحصل المستخدمون على نتائج أفضل عند ارتكاب أخطاء إملائية.
- I have updated the query to utilize Full-Text Search, which should resolve the performance issues with the search bar.
  - لقد قمت بتحديث الاستعلام ليستخدم Full-Text Search، مما ينبغي أن يحل مشاكل الأداء في شريط البحث.
