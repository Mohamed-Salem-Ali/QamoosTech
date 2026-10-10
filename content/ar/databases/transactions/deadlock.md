---
id: deadlock
category: databases
subcategory: transactions
level: intermediate
related: [transaction, database, livelock]
term: "Deadlock"
translation: "الجمود المتبادل"
pronunciation: "ديد-لوك"
keywords: ["العمليات تنتظر بعضها البعض","تعليق قاعدة البيانات بسبب الأقفال","توقف المعاملات في قاعدة البيانات","اعتماد متبادل بين العمليات","تعليق النظام بسبب قفل الموارد","حدوث حالة استعصاء في العمليات","مشكلة الأقفال المتداخلة","ديدلوك","التجمد المتبادل للعمليات","processes waiting for each other","database transactions stuck together","mutual waiting state in database","database locks freezing system","resolve transaction locks hanging","threads waiting on resources","system freeze due to locks","circular dependency between processes","dedlock","dead lock"]
---

## التعريف

حالة تحدث عندما تعجز عمليتان أو أكثر عن الاستمرار لأن كل عملية تنتظر الأخرى لتحرير مورد ما، مثل قفل في قاعدة البيانات. يؤدي هذا إلى توقف جميع العمليات المعنية عن العمل بشكل دائم.

## أين تسمعه؟

في مراقبة أداء قواعد البيانات، ومناقشات إدارة المعاملات (Transactions)، وأثناء حل مشكلات توقف النظام.

## أمثلة

- The system terminated the transaction because a deadlock was detected.
  - قام النظام بإنهاء المعاملة لأنه تم اكتشاف حالة Deadlock.
- We need to optimize our query order to prevent frequent deadlocks.
  - نحتاج إلى تحسين ترتيب الاستعلامات لمنع حدوث حالات Deadlock المتكررة.
- Two transactions locked the rows in opposite order, which caused a deadlock.
  - قفلت معاملتان الصفوف بترتيب متعاكس، فنتج عن ذلك انسداد (deadlock).

## خطأ شائع

الخلط بين الـ Deadlock والاستعلام البطيء؛ فالـ Deadlock هو حالة اعتماد متبادل تمنع العمليات من الإكمال، بينما الاستعلام البطيء هو مجرد مشكلة في الأداء لا تمنع العمليات من الانتهاء.

## لا تخلطه مع

غالباً ما يتم الخلط بين الـ Deadlock وحالة السباق (Race Condition)؛ فالـ Deadlock هو حالة انتظار متبادل تمنع العمليات من التقدم، بينما تحدث حالة السباق عندما تعتمد مخرجات النظام على التوقيت غير المنضبط أو ترتيب الأحداث.

## قلها في العمل

- I think we hit a deadlock in the staging environment, so I'm going to restart the service to clear the locks.
  - أعتقد أننا واجهنا حالة Deadlock في بيئة الاختبار، لذا سأقوم بإعادة تشغيل الخدمة لإلغاء الأقفال.
- Please review the attached logs, as they indicate that a deadlock is preventing the transaction from committing successfully.
  - يرجى مراجعة السجلات المرفقة، حيث تشير إلى أن حالة Deadlock تمنع المعاملة من الاكتمال بنجاح.
