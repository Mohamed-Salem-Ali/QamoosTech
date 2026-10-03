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

## لا تخلطه مع

غالباً ما يتم الخلط بين Destructuring و Spread syntax؛ فبينما تقوم Destructuring باستخراج القيم من المجموعة إلى متغيرات، يقوم معامل الانتشار (Spread operator) بتوسيع عناصر المجموعة داخل هيكل جديد.

## قلها في العمل

- I'm going to use destructuring here to pull the user ID and email directly from the response object.
  - سأستخدم Destructuring هنا لاستخراج معرف المستخدم والبريد الإلكتروني مباشرة من كائن الاستجابة.
- Please consider using destructuring in this component to make the code cleaner and easier to read.
  - يرجى النظر في استخدام Destructuring في هذا المكون لجعل الكود أكثر ترتيباً وأسهل في القراءة.
