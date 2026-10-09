---
id: backward-compatibility
category: web-apis
subcategory: api-design
level: intermediate
related: [api-versioning, breaking-change, deprecation]
term: "Backward Compatibility"
translation: "التوافق مع الإصدارات السابقة"
pronunciation: "باكوارد كومباتيبيليتي"
keywords: ["العملاء القدامى ما زالوا يعملون", "النسخة الجديدة تعمل مع الشيفرة القديمة", "إبقاء الواجهة القديمة تعمل", "عدم كسر المستخدمين الحاليين", "old clients still work", "new version works with old code", "keep old API working", "do not break existing users", "compatible with previous release"]
---

## التعريف

صفة النسخة الجديدة التي تبقى تعمل مع شيفرة أو بيانات أو عملاء كُتبوا لنسخة سابقة، فلا يحتاج المستخدمون إلى تغيير أي شيء عند الترقية.

## أين تسمعه؟

في مراجعات تصميم الواجهات البرمجية، وترقيات المكتبات، وتغييرات مخطط قاعدة البيانات.

## أمثلة

- We added a new field, and the old clients still work.
  - أضفنا حقلاً جديداً، والعملاء القدامى ما زالوا يعملون.
- Keep the old endpoint for six months to preserve backward compatibility.
  - أبقِ النقطة القديمة ستة أشهر للحفاظ على التوافق مع الإصدارات السابقة.
- The new API still accepts the old date format, so mobile apps need no update.
  - ما زالت الواجهة الجديدة تقبل صيغة التاريخ القديمة، فلا تحتاج تطبيقات الهاتف إلى تحديث.

## خطأ شائع

إعادة تسمية حقل أو حذفه من استجابة الواجهة دون فترة انتقال. تفشل العملاء القدامى رغم أن التغيير بدا صغيراً.

## لا تخلطه مع

التوافق مع الإصدارات السابقة يعني أن الشيفرة القديمة تستمر في العمل، أما التوافق مع الإصدارات اللاحقة فيعني أن الشيفرة القديمة تتعامل مع بيانات من نسخة أحدث.
