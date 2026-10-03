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

إعادة كل السجلات «مؤقتًا». يعمل ذلك أثناء التطوير ثم ينهار في الإنتاج عندما تكبر البيانات.
