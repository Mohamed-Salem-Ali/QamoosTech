---
id: cursor-pagination
category: databases
level: intermediate
related: [pagination, index]
term: "Cursor Pagination"
translation: "الترقيم بالمؤشر"
pronunciation: "كيرسور باجينيشن"
---
## التعريف

ترقيم الصفحات بتذكّر آخر عنصر رأيته (المؤشر) بدل أرقام الصفحات. يبقى سريعًا ومستقرًا مع البيانات الكبيرة المتغيرة.

## أين تسمعه؟

التمرير اللانهائي والجداول الكبيرة.

## أمثلة

- We moved to cursor pagination because deep pages were slow.
  - انتقلنا إلى الترقيم بالمؤشر لأن الصفحات البعيدة كانت بطيئة.
- Send the `cursor` from the last response to get the next page.
  - أرسل قيمة `cursor` من الاستجابة الأخيرة للحصول على الصفحة التالية.

## خطأ شائع

استخدام `OFFSET 100000`. تظل قاعدة البيانات تفحص كل الصفوف السابقة وتتجاوزها.
