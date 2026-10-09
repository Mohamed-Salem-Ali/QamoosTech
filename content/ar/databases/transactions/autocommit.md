---
id: autocommit
category: databases
subcategory: transactions
level: intermediate
related: [transaction, acid, savepoint]
tags: [sql, django]
aliases: ["auto commit"]
term: "Autocommit"
translation: "التثبيت التلقائي"
pronunciation: "أوتو كوميت"
keywords: ["كل جملة تُثبَّت فوراً", "بدون begin صريحة", "الوضع الافتراضي", "أوقفه لاستخدام المعاملات", "الجملة الواحدة معاملة بحد ذاتها", "الافتراضي في Django", "each statement commits immediately", "no explicit begin", "default mode", "turn off for transactions", "single statement is its own transaction", "django default"]
---

## التعريف

في وضع التثبيت التلقائي (Autocommit) تُثبَّت كل جملة SQL فور انتهائها كمعاملة صغيرة بحد ذاتها، إلا إذا بدأت معاملة صراحة.

## أين تسمعه؟

في إعدادات عملاء قواعد البيانات، والسلوك الافتراضي في Django، وأخطاء حُفظ فيها نصف تغيير متعدد الخطوات.

## أمثلة

- With autocommit on, the first insert is saved even if the second fails.
  - مع التثبيت التلقائي يُحفظ الإدراج الأول حتى لو فشل الثاني.
- Wrap related writes in `atomic()` so they succeed or fail together.
  - غلّف الكتابات المرتبطة بـ `atomic()` لتنجح أو تفشل معاً.
- Each insert commits by itself, so turning autocommit off made the import all-or-nothing.
  - يُثبَّت كل إدراج بذاته، لذلك جعل إيقاف autocommit الاستيراد كلّه أو لا شيء.

## خطأ شائع

تنفيذ عدة كتابات مرتبطة بوضع التثبيت التلقائي. انهيار في المنتصف يترك البيانات محدثة جزئياً.

## لا تخلطه مع

المعاملة الصريحة حيث لا يُحفظ شيء حتى تثبّت.

## قلها في العمل

- Is autocommit on in this session?
  - هل التثبيت التلقائي مفعّل في هذه الجلسة؟
- Start a transaction first.
  - ابدأ معاملة أولاً.
