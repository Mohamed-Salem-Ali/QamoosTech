---
id: pagination
category: web-apis
subcategory: api-design
level: beginner
related: [query-parameter, cursor-pagination]
term: "Pagination"
translation: "ترقيم الصفحات"
pronunciation: "باجينيشن"
keywords: ["تقسيم نتائج البحث إلى صفحات","عرض النتائج على صفحات متعددة","تقليل حجم استجابة الـ api","تحديد عدد العناصر في الصفحة","عرض البيانات على دفعات","ترقيم الصفحات","باجينيشن","عرض القوائم الكبيرة على صفحات","split long list into pages","load results page by page","limit api response size","page and limit parameters","handle large data lists","cursor pagination alternative","paginaton","pagnation","split api results into chunks","get data in pages"]
---
## التعريف

تقسيم قائمة نتائج طويلة إلى صفحات أصغر، حتى لا يتعامل الخادم والتطبيق مع كل شيء دفعة واحدة.

## أين تسمعه؟

واجهات القوائم، ولوحات الإدارة، ومراجعات الأداء.

## أمثلة

- The endpoint supports pagination with `page` and `limit`.
  - يدعم الـ endpoint ترقيم الصفحات عبر `page` و`limit`.
- Without pagination, the response would contain 50,000 rows.
  - بدون ترقيم الصفحات ستحتوي الاستجابة على 50 ألف سجل.
- The results page shows 20 items, and the next button loads the next 20.
  - تعرض صفحة النتائج 20 عنصراً، ويعرض زر التالي 20 عنصراً آخر.

## خطأ شائع

إعادة كل السجلات «مؤقتًا». يعمل ذلك أثناء التطوير ثم ينهار في بيئة الإنتاج عندما تكبر البيانات.

## لا تخلطه مع

غالبًا ما يتم الخلط بين الـ pagination والتمرير اللانهائي (infinite scrolling)، لكن ترقيم الصفحات يقسم البيانات إلى صفحات منفصلة بأرقام محددة، بينما يحمل التمرير اللانهائي المزيد من العناصر تلقائيًا عندما يصل المستخدم إلى أسفل الصفحة.

## قلها في العمل

- Can we add pagination to this endpoint so we don't load thousands of users at once?
  - هل يمكننا إضافة ترقيم الصفحات إلى هذا الـ endpoint حتى لا نقوم بتحميل آلاف المستخدمين دفعة واحدة؟
- Please ensure that all list endpoints implement pagination before we merge this pull request.
  - يرجى التأكد من أن جميع نقاط النهاية للقوائم تنفذ ترقيم الصفحات قبل أن نقوم بدمج طلب السحب هذا.
