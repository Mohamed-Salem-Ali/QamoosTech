---
id: unique-constraint
category: databases
subcategory: modeling
level: beginner
related: [constraint, primary-key, check-constraint]
tags: [sql, django]
aliases: ["unique key", "unique together"]
term: "Unique Constraint"
translation: "قيد الفرادة"
pronunciation: "يونيك كونسترينت"
keywords: ["لا قيم مكررة", "البريد يجب أن يكون فريداً", "فرادة مجموعة أعمدة", "رفض الصف المكرر", "خطأ مفتاح مكرر", "واحد لكل عضو في كل أسبوع", "no duplicate values", "email must be unique", "unique together", "reject duplicate row", "integrityerror duplicate key", "one per member per week"]
---

## التعريف

قيد الفرادة (Unique Constraint) يجعل قاعدة البيانات ترفض صفاً إذا كان لصف آخر القيمة نفسها، أو التركيبة نفسها من القيم، في الأعمدة المقيَّدة.

## أين تسمعه؟

في تصميم الجداول، والترحيلات، وأخطاء مثل "duplicate key value violates unique constraint".

## أمثلة

- A unique constraint on member and week stops a double payment.
  - قيد فرادة على العضو والأسبوع يمنع الدفع المزدوج.
- Emails must be unique, so the database refuses a second account.
  - يجب أن تكون البريد فريدة، لذا ترفض قاعدة البيانات حساباً ثانياً.
- The unique constraint on the username makes a second signup fail with an error.
  - يجعل القيد الفريد على اسم المستخدم التسجيل الثاني يفشل برسالة خطأ.

## خطأ شائع

فحص التكرار في الكود فقط. قد يمرّ طلبان متزامنان من الفحص؛ والقيد هو ما يمنع ذلك فعلاً.

## لا تخلطه مع

المفتاح الأساسي (Primary Key) وهو فريد أيضاً لكنه يعرّف الصف ولا يكون فارغاً. وقد يكون للجدول عدة قيود فرادة.

## قلها في العمل

- Add a unique constraint instead of checking in code.
  - أضف قيد فرادة بدلاً من الفحص في الكود.
- The migration fails because the existing data has duplicates.
  - تفشل الترحيلة لأن البيانات الحالية فيها تكرارات.
