---
id: audit-logging
category: security
level: intermediate
related: [logging, immutable, gdpr-deletion]
term: "Audit Logging"
translation: "سجل التدقيق"
pronunciation: "أوديت لوجينج"
---
## التعريف

تسجيل من فعل ماذا ومتى داخل النظام، لتحقق في المشكلات وتثبت الامتثال.

## أين تسمعه؟

الرعاية الصحية والتمويل ومراجعات الأمان.

## أمثلة

- The audit log shows who changed the patient record.
  - يُظهر سجل التدقيق من غيّر سجل المريض.
- Audit logs must be append-only.
  - يجب أن تكون سجلات التدقيق للإضافة فقط.

## خطأ شائع

السماح بتعديل سجلات التدقيق أو حذفها. عندها لا يستطيع أحد الوثوق بها.

## لا تخلطه مع

يسجل سجل التدقيق الأحداث الأمنية والتجارية لضمان الامتثال، بينما يركز سجل التطبيق القياسي على تصحيح المشكلات التقنية وأخطاء النظام.

## قلها في العمل

- Make sure we have audit logging enabled for all admin actions before we release this feature.
  - تأكد من تفعيل سجل التدقيق لجميع إجراءات المسؤول قبل أن نطلق هذه الميزة.
- Please add audit logging to this endpoint so we can track who updates user permissions.
  - يرجى إضافة سجل التدقيق إلى نقطة النهاية هذه حتى نتمكن من تتبع من يقوم بتحديث صلاحيات المستخدمين.
