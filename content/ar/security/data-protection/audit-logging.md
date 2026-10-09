---
id: audit-logging
category: security
subcategory: data-protection
level: intermediate
related: [logging, immutable, gdpr-deletion]
term: "Audit Logging"
translation: "سجل التدقيق"
pronunciation: "أوديت لوجينج"
keywords: ["تسجيل من فعل ماذا ومتى","معرفة من عدل على النظام","سجل النشاطات الأمنية","تتبع إجراءات المسؤولين","سجل الامتثال","أوديت لوجينج","سجلات لا يمكن تعديلها","تتبع تعديلات المستخدمين","track who did what","record user actions system","compliance logging","security activity log","track admin actions","append only logs","investigate security problems","audit trail","user activity tracking","odit login"]
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
- Every change to a refund is written to the audit log with the user who made it.
  - يُكتب كل تغيير على الاسترداد في سجل التدقيق مع المستخدم الذي أجراه.

## خطأ شائع

السماح بتعديل سجلات التدقيق أو حذفها. عندها لا يستطيع أحد الوثوق بها.

## لا تخلطه مع

يسجل سجل التدقيق الأحداث الأمنية والتجارية لضمان الامتثال، بينما يركز سجل التطبيق القياسي على تصحيح المشكلات التقنية وأخطاء النظام.

## قلها في العمل

- Make sure we have audit logging enabled for all admin actions before we release this feature.
  - تأكد من تفعيل سجل التدقيق لجميع إجراءات المسؤول قبل أن نطلق هذه الميزة.
- Please add audit logging to this endpoint so we can track who updates user permissions.
  - يرجى إضافة سجل التدقيق إلى نقطة النهاية هذه حتى نتمكن من تتبع من يقوم بتحديث صلاحيات المستخدمين.
