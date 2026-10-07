---
id: pessimistic-locking
category: databases
subcategory: transactions
level: intermediate
related: [optimistic-locking, deadlock, isolation-level]
tags: [sql, django]
aliases: ["select for update", "row lock", "select_for_update"]
term: "Pessimistic Locking"
translation: "القفل المتشائم"
pronunciation: "بيسيمستيك لوكينج"
keywords: ["اقفل الصف أولاً", "الأمر select for update", "الآخرون ينتظرون", "منع التعديلات المتزامنة", "إمساك القفل طوال المعاملة", "خطر الجمود", "lock the row first", "select for update", "others wait", "prevent concurrent edits", "hold lock during transaction", "deadlock risk"]
---

## التعريف

القفل المتشائم (Pessimistic Locking) يقفل الصف بمجرد قراءته للتحديث (`SELECT ... FOR UPDATE`) فتنتظر المعاملات الأخرى حتى تنتهي. ويفترض أن التعارضات محتملة.

## أين تسمعه؟

في الحجز والأرصدة والعدادات حيث لا يجوز لطلبين العمل على الصف نفسه، و`select_for_update()` في Django.

## أمثلة

- Lock the account row with `select_for_update()` before changing the balance.
  - اقفل صف الحساب بـ `select_for_update()` قبل تغيير الرصيد.
- Keep the transaction short so the lock isn't held long.
  - أبقِ المعاملة قصيرة حتى لا يطول القفل.

## خطأ شائع

قفل الصفوف بترتيب مختلف في مسارات كود مختلفة. هذه وصفة الجمود الكلاسيكية.

## لا تخلطه مع

القفل المتفائل الذي لا يأخذ قفلاً ويكتشف التعارض عند الحفظ.

## قلها في العمل

- Use select_for_update inside atomic.
  - استخدم select_for_update داخل atomic.
- Someone is holding the lock.
  - هناك من يمسك القفل.
