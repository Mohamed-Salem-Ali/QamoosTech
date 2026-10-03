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
