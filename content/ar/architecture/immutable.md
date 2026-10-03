---
id: immutable
category: architecture
level: intermediate
related: [event-driven, audit-logging]
term: "Immutable"
translation: "غير قابل للتغيير"
pronunciation: "إميوتابل"
---
## التعريف

شيء لا يمكن تغييره بعد إنشائه. ولكي «تغيّره» تنشئ نسخة جديدة منه.

## أين تسمعه؟

البرمجة الوظيفية، وسجلات التدقيق، والسجلات المالية.

## أمثلة

- Ledger entries are immutable; a mistake is fixed with a correcting entry.
  - قيود دفتر الحسابات غير قابلة للتغيير، ويُصحَّح الخطأ بقيد تصحيحي.
- Use immutable data to avoid surprising side effects.
  - استخدم بيانات immutable لتجنب الآثار الجانبية المفاجئة.

## خطأ شائع

تغيير كائن «مرة واحدة فقط» بينما يشاركه آخرون. البيانات القابلة للتغيير والمشتركة مصدر شائع للأخطاء.

## لا تخلطه مع

يعني مصطلح immutable أن الكائن لا يمكن تعديله نهائياً بعد إنشائه، بينما تعني read-only تقييد صلاحيات الكتابة فقط عبر واجهة أو إذن معين مع احتمال تغير البيانات الأساسية.

## قلها في العمل

- Let us make this configuration object immutable so no other service can accidentally modify it during runtime.
  - دعنا نجعل كائن الإعدادات هذا غير قابل للتغيير حتى لا تتمكن أي خدمة أخرى من تعديله بالخطأ أثناء التشغيل.
- Please ensure that all DTOs passed to this processing pipeline are immutable to prevent unpredictable state mutations.
  - يرجى التأكد من أن جميع كائنات نقل البيانات (DTOs) الم تمررة إلى خط المعالجة هذا غير قابلة للتغيير لمنع أي تغيرات غير متوقعة في الحالة.
