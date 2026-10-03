---
id: destructuring
category: programming
level: beginner
related: [object, array]
term: "Destructuring"
pronunciation: "دي-ستراكشرينج"
---

## التعريف

هي ميزة في لغات البرمجة تسمح لك باستخراج القيم من المصفوفات (Arrays) أو الخصائص من الكائنات (Objects) وتعيينها في متغيرات مستقلة بشكل مباشر. توفر هذه الطريقة أسلوباً مختصراً للتعامل مع البيانات دون الحاجة لكتابة أسطر تعيين متعددة.

## أين تسمعه؟

أثناء مراجعة الكود، أو عند مناقشة ميزات لغات البرمجة الحديثة مثل JavaScript أو Python، أو عند إعادة هيكلة الدوال التي تتعامل مع بيانات كثيرة.

## أمثلة

- You can use destructuring to extract specific fields from a user object into local variables.
  - يمكنك استخدام Destructuring لاستخراج حقول محددة من كائن المستخدم وتخزينها في متغيرات محلية.
- Destructuring an array allows you to assign its elements to individual variables in one line.
  - يتيح لك Destructuring المصفوفة تعيين عناصرها إلى متغيرات منفصلة في سطر واحد.

## خطأ شائع

يحاول المبرمجون أحياناً إجراء Destructuring على كائنات قيمتها `null` أو `undefined`، مما يؤدي إلى توقف البرنامج عن العمل بسبب خطأ في وقت التشغيل (Runtime Error).
