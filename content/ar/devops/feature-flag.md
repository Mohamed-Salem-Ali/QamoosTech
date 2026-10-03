---
id: feature-flag
category: devops
level: intermediate
related: [rollback, deployment]
term: "Feature Flag"
translation: "مفتاح تفعيل الميزة"
pronunciation: "فيتشر فلاج"
---
## التعريف

مفتاح في الشيفرة يشغّل الميزة أو يطفئها دون نشر جديد، وغالبًا لمجموعة صغيرة من المستخدمين أولًا.

## أين تسمعه؟

الإصدار التدريجي واختبارات A/B.

## أمثلة

- The new checkout is behind a feature flag for 10% of users.
  - صفحة الدفع الجديدة خلف feature flag لعشرة بالمئة من المستخدمين.
- If something breaks, just switch the flag off.
  - إذا حدث خلل فأطفئ الـ flag فقط.

## خطأ شائع

عدم حذف الـ flags القديمة أبدًا. تتراكم وتجعل الشيفرة مربكة.
