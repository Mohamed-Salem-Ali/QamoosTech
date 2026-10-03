---
id: deadlock
category: databases
level: intermediate
related: [transaction, database]
term: "Deadlock"
pronunciation: "ديد-لوك"
---

## التعريف

حالة تحدث عندما يعجز عمليتان أو أكثر عن الاستمرار لأن كل عملية تنتظر الأخرى لتحرير مورد ما، مثل قفل في قاعدة البيانات. يؤدي هذا إلى توقف جميع العمليات المعنية عن العمل بشكل دائم.

## أين تسمعه؟

في مراقبة أداء قواعد البيانات، ومناقشات إدارة المعاملات (Transactions)، وأثناء حل مشكلات توقف النظام.

## أمثلة

- The system terminated the transaction because a deadlock was detected.
  - قام النظام بإنهاء المعاملة لأنه تم اكتشاف حالة Deadlock.
- We need to optimize our query order to prevent frequent deadlocks.
  - نحتاج إلى تحسين ترتيب الاستعلامات لمنع حدوث حالات Deadlock المتكررة.

## خطأ شائع

الخلط بين الـ Deadlock والاستعلام البطيء؛ فالـ Deadlock هو حالة اعتماد متبادل تمنع العمليات من الإكمال، بينما الاستعلام البطيء هو مجرد مشكلة في الأداء لا تمنع العمليات من الانتهاء.
