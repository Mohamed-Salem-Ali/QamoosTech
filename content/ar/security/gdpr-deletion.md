---
id: gdpr-deletion
category: security
level: intermediate
related: [pii, audit-logging]
term: "GDPR Deletion"
translation: "الحذف وفق GDPR"
pronunciation: "جي دي بي آر ديليشن"
---
## التعريف

إزالة البيانات الشخصية لشخص ما عندما يطلب ذلك، كما يشترط قانون GDPR الأوروبي («الحق في النسيان»).

## أين تسمعه؟

الخصوصية والمراجعات القانونية وميزات حذف الحساب.

## أمثلة

- The user asked us to delete their account under GDPR.
  - طلب المستخدم حذف حسابه بموجب GDPR.
- We must also remove the data from backups and analytics.
  - يجب أن نزيل البيانات أيضًا من النسخ الاحتياطية والتحليلات.

## خطأ شائع

الحذف من قاعدة البيانات الرئيسية فقط ونسيان الـ caches والنسخ الاحتياطية وفهارس البحث والأدوات الخارجية.

## لا تخلطه مع

الحذف وفق GDPR هو إزالة دائمة للبيانات الشخصية امتثالاً لقوانين الخصوصية، بينما إخفاء الهوية يجرد المعرفات لكنه يبقي مجموعة البيانات سليمة للتحليلات.

## قلها في العمل

- Can we double-check that this account closure triggers a complete GDPR deletion across all our microservices?
  - هل يمكننا التحقق مرة أخرى من أن إغلاق الحساب هذا يؤدي إلى حذف كامل وفق GDPR عبر جميع الخدمات المصغرة لدينا؟
- Please ensure that the scheduled worker handles the GDPR deletion request before the thirty-day deadline expires.
  - يرجى التأكد من أن العامل المجدولة يتعامل مع طلب الحذف وفق GDPR قبل انقضاء الموعد النهائي المحدد بثلاثين يوماً.
