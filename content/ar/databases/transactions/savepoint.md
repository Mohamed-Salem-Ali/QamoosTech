---
id: savepoint
category: databases
subcategory: transactions
level: intermediate
related: [transaction, acid, autocommit]
tags: [sql, django]
aliases: ["nested transaction", "partial rollback"]
term: "Savepoint"
translation: "نقطة الحفظ"
pronunciation: "سيف بوينت"
keywords: ["تراجع جزئي", "التراجع عن جزء من المعاملة", "معاملة متداخلة", "التراجع إلى نقطة الحفظ", "المتابعة بعد خطأ", "ذرية داخل ذرية", "partial rollback", "undo part of a transaction", "nested transaction", "rollback to savepoint", "keep going after an error", "atomic inside atomic"]
---

## التعريف

نقطة الحفظ (Savepoint) علامة داخل معاملة يمكنك التراجع إليها، فتُلغى الأعمال بعدها فقط وتبقى كل ما قبلها.

## أين تسمعه؟

في SQL (`SAVEPOINT`)، وكتل `atomic()` المتداخلة في Django، والاختبارات التي تغلّف كل حالة بمعاملة.

## أمثلة

- Create a savepoint, try the risky insert, and roll back to it if it fails.
  - أنشئ نقطة حفظ وجرّب الإدراج الخطر وتراجع إليها إن فشل.
- A nested `atomic()` in Django becomes a savepoint.
  - تتحول `atomic()` متداخلة في Django إلى نقطة حفظ.
- We set a savepoint before the bulk import, so a bad batch rolls back on its own.
  - وضعنا نقطة حفظ قبل الاستيراد الجماعي، فتتراجع الدفعة الفاسدة وحدها.

## خطأ شائع

التقاط خطأ قاعدة بيانات داخل معاملة دون نقطة حفظ. تصبح المعاملة كلها غير صالحة.

## لا تخلطه مع

التراجع الكامل الذي يلغي المعاملة كلها.

## قلها في العمل

- Wrap the optional step in a savepoint.
  - غلّف الخطوة الاختيارية بنقطة حفظ.
- Roll back to the savepoint, not the whole transaction.
  - تراجع إلى نقطة الحفظ وليس المعاملة كلها.
