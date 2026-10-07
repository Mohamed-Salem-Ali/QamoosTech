---
id: enum
category: programming
subcategory: types-and-typing
level: beginner
related: [data-type, type-hint, constraint]
tags: [python, typescript]
aliases: ["enumeration"]
term: "Enum"
translation: "التعداد"
pronunciation: "إينم"
keywords: ["مجموعة ثابتة من القيم المسماة", "قيم الحالة مدفوع وغير مدفوع", "مجموعة ثوابت", "خيارات لحقل", "نوع التعداد", "تجنب النصوص السحرية", "fixed set of named values", "status values paid unpaid", "constants group", "choices for a field", "enumeration type", "avoid magic strings"]
---

## التعريف

الـ Enum (التعداد) نوع له مجموعة ثابتة من القيم المسماة، مثل `PAID` و`UNPAID` و`UPCOMING`.

## أين تسمعه؟

في الكود الذي يمثل الحالات أو الأدوار أو الخيارات، وفي المراجعات التي تستبدل النصوص المكررة بنوع مسمى.

## أمثلة

- Use an enum for the payment status instead of raw strings.
  - استخدم enum لحالة الدفع بدلاً من النصوص الخام.
- The database column only accepts the values defined in the enum.
  - عمود قاعدة البيانات يقبل فقط القيم المعرّفة في الـ enum.

## خطأ شائع

نشر النص نفسه، مثل "paid"، في أنحاء الكود. خطأ إملائي واحد يسبب خطأً صامتاً؛ أما الـ enum فتلتقطه الأدوات.

## لا تخلطه مع

الثابت (Constant) وهو قيمة واحدة ثابتة. أما الـ enum فيجمع ثوابت مترابطة في نوع واحد.

## قلها في العمل

- Replace those magic strings with an enum.
  - استبدل هذه النصوص السحرية بـ enum.
- Adding a new status means adding one enum member.
  - إضافة حالة جديدة تعني إضافة عضو واحد إلى الـ enum.
