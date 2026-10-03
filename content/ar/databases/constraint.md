---
id: constraint
category: databases
level: beginner
related: [database, schema, query]
term: "Constraint"
pronunciation: "كونستراينت"
translation: "قيد"
---

## التعريف

قاعدة تُفرض على أعمدة أو جداول قاعدة البيانات لتقييد نوع البيانات التي يمكن إدخالها أو تحديثها.

## أين تسمعه؟

في نقاشات تصميم قواعد البيانات، أو عند تحديد مخططات الجداول، أو عندما يفشل أمر إدخال بيانات بسبب بيانات غير صالحة.

## أمثلة

- The email column has a `UNIQUE` constraint to prevent duplicate accounts.
  - عمود البريد الإلكتروني يحتوي على قيد `UNIQUE` لمنع تكرار الحسابات.
- The age column includes a `CHECK` constraint to ensure values are greater than zero.
  - عمود العمر يتضمن قيد `CHECK` لضمان أن القيم أكبر من الصفر.

## خطأ شائع

الاعتقاد بأن القيود تبطئ الأداء فقط، مع تجاهل دورها الأساسي في حماية سلامة البيانات ومنع وصول حالات غير صالحة.
