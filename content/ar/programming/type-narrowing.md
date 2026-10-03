---
id: type-narrowing
category: programming
level: intermediate
related: [interface]
term: "Type Narrowing"
translation: "تضييق النوع"
pronunciation: "تايب ناروينج"
keywords: ["تضييق النوع في تايبسكريبت","تحديد نوع المتغير بدقة","معرفة نوع البيانات في تايبسكريبت","فحص الأنواع قبل الاستخدام","استنتاج النوع في تايبسكريبت","تضييق النوع","تايب ناروينج","حارس الأنواع في تايبسكريبت","typescript type narrowing","make typescript type more specific","narrow down types with typeof","typescript type guards and narrowing","refine variable types in typescript","typescript deduce specific type","fix typescript unknown type error","handle union types safely typescript","taib narwing"]
---
## التعريف

أن يستنتج TypeScript نوعًا أدق للقيمة بعد أن تفحصها، مثلًا باستخدام `typeof` أو `in`.

## أين تسمعه؟

مراجعة شيفرة TypeScript والنقاش حول سلامة الأنواع.

## أمثلة

- After `typeof value === "string"`, TypeScript narrows the type to `string`.
  - بعد `typeof value === "string"` يضيّق TypeScript النوع إلى `string`.
- Use a type guard to narrow the response before reading `data`.
  - استخدم type guard لتضييق نوع الاستجابة قبل قراءة `data`.

## خطأ شائع

استخدام `as` لفرض نوع معيّن. هذا يُسكت المترجم لكنه لا يمنحك أي أمان وقت التشغيل.

## لا تخلطه مع

تضييق النوع يحوّل نوعاً عاماً إلى نوع أدق بناءً على فحوصات وقت التشغيل، بينما فرض النوع يستخدم 'as' لإجبار المُترجم على التعامل مع القيمة كنوع معين دون أي تحقق.

## قلها في العمل

- Can we use a custom type guard here to help TypeScript with type narrowing?
  - هل يمكننا استخدام حارس أنواع مخصص هنا لمساعدة TypeScript في تضييق النوع؟
- Please add a type check before accessing that property to enable proper type narrowing.
  - الرجاء إضافة فحص للنوع قبل الوصول إلى تلك الخاصية لتفعيل تضييق النوع بشكل صحيح.
