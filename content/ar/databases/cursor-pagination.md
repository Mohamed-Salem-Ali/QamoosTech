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

## لا تخلطه مع

يعتمد الترقيم بالمؤشر على مؤشر فريد لجلب المجموعة التالية من السجلات، بينما يتجاوز ترقيم الإزاحة عددًا محددًا من الصفوف، مما يجعله أبطأ بكثير مع مجموعات البيانات الكبيرة.

## قلها في العمل

- Let us switch this API to cursor pagination so the infinite scroll does not lag when users reach the bottom.
  - دعنا نحول واجهة البرمجة هذه إلى الترقيم بالمؤشر كي لا يتأخر التمرير اللانهائي عندما يصل المستخدمون إلى القاع.
- Please ensure that all the sorting keys are unique to prevent data loss or duplication when using cursor pagination.
  - يرجى التأكد من أن جميع مفاتيح الترتيب فريدة لمنع فقدان البيانات أو تكرارها عند استخدام الترقيم بالمؤشر.
