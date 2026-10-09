---
id: retention-policy
category: security
subcategory: data-protection
level: intermediate
related: [gdpr-deletion, audit-logging, pii]
aliases: ["data retention", "lifecycle rule", "log retention"]
term: "Retention Policy"
translation: "سياسة الاحتفاظ بالبيانات"
pronunciation: "ريتنشن بوليسي"
keywords: ["مدة الاحتفاظ بالبيانات", "الحذف بعد 90 يوماً", "انتهاء السجلات", "دورة حياة النسخ الاحتياطية", "متطلب قانوني", "تكلفة التخزين", "how long to keep data", "delete after 90 days", "log expiry", "backups lifecycle", "legal requirement", "storage cost"]
---

## التعريف

سياسة الاحتفاظ (Retention Policy) تحدد المدة التي تُحفظ فيها أنواع البيانات المختلفة (سجلات ونسخ احتياطية وسجلات مستخدمين) قبل حذفها أو أرشفتها، موازنةً بين القواعد القانونية والفائدة وتكلفة التخزين.

## أين تسمعه؟

في إعدادات S3 والسجلات (قواعد دورة الحياة)، ومشاريع الامتثال (GDPR وSOC 2)، وتخطيط النسخ الاحتياطي.

## أمثلة

- Application logs are kept for 30 days, then deleted.
  - تُحفظ سجلات التطبيق 30 يوماً ثم تُحذف.
- Set a lifecycle rule to expire old backups after a year.
  - اضبط قاعدة دورة حياة لانتهاء النسخ القديمة بعد سنة.
- The retention policy keeps invoices for seven years and deletes the logs after 90 days.
  - تحتفظ سياسة الاحتفاظ بالفواتير سبع سنوات، وتحذف السجلات بعد 90 يوماً.

## خطأ شائع

الاحتفاظ بكل شيء للأبد "تحسباً". يرفع التكلفة والمخاطر القانونية خصوصاً للبيانات الشخصية.

## لا تخلطه مع

النسخة الاحتياطية وهي نسخة للاسترداد. أما الاحتفاظ فيقرر كم تُحفظ النسخ والسجلات.

## قلها في العمل

- What's our retention period for access logs?
  - ما مدة الاحتفاظ بسجلات الوصول لدينا؟
- Archive after 90 days, delete after two years.
  - أرشف بعد 90 يوماً واحذف بعد سنتين.
