---
id: pagination
category: web-apis
level: beginner
related: [query-parameter, cursor-pagination]
term: "Pagination"
translation: "ترقيم الصفحات"
pronunciation: "باجينيشن"
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

## خطأ شائع

إعادة كل السجلات «مؤقتًا». يعمل ذلك أثناء التطوير ثم ينهار في بيئة الإنتاج عندما تكبر البيانات.

## لا تخلطه مع

غالبًا ما يتم الخلط بين الـ pagination والتمرير اللانهائي (infinite scrolling)، لكن ترقيم الصفحات يقسم البيانات إلى صفحات منفصلة بأرقام محددة، بينما يحمل التمرير اللانهائي المزيد من العناصر تلقائيًا عندما يصل المستخدم إلى أسفل الصفحة.

## قلها في العمل

- Can we add pagination to this endpoint so we don't load thousands of users at once?
  - هل يمكننا إضافة ترقيم الصفحات إلى هذا الـ endpoint حتى لا نقوم بتحميل آلاف المستخدمين دفعة واحدة؟
- Please ensure that all list endpoints implement pagination before we merge this pull request.
  - يرجى التأكد من أن جميع نقاط النهاية للقوائم تنفذ ترقيم الصفحات قبل أن نقوم بدمج طلب السحب هذا.
