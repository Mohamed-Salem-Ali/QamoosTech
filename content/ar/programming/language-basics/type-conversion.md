---
id: type-conversion
category: programming
subcategory: language-basics
level: beginner
related: [data-type, variable, dynamic-typing]
aliases: ["type casting", "casting", "typecast"]
term: "Type Conversion"
translation: "تحويل النوع"
pronunciation: "تايب كونفرجن"
keywords: ["تحويل نص إلى رقم", "int('5') في بايثون", "تحويل الأنواع", "تحويل رقم إلى نص", "خطأ ValueError عند التحويل", "التحويل الصريح والضمني", "change string to number", "int('5') python", "casting types", "convert number to string", "valueerror when converting", "implicit vs explicit conversion"]
---

## التعريف

تحويل النوع (Type Conversion) هو تغيير قيمة من نوع إلى آخر، مثل تحويل النص "42" إلى الرقم 42.

## أين تسمعه؟

عند قراءة مدخلات المستخدم أو الملفات، وتحليل بيانات من API، وفي رسائل الخطأ مثل `ValueError`.

## أمثلة

- Input arrives as text, so convert it to an integer before adding.
  - تصل المدخلات كنص، لذا حوّلها إلى عدد صحيح قبل الجمع.
- The conversion fails if the text is not a valid number.
  - يفشل التحويل إذا لم يكن النص رقماً صالحاً.

## خطأ شائع

التحويل دون معالجة المدخلات الخاطئة. `int("abc")` يسبب خطأً، لذا تحقق من المدخل أو التقط الخطأ.

## لا تخلطه مع

فحص النوع (Type Checking) الذي يسأل عن نوع القيمة. أما التحويل فيغيّرها إلى نوع آخر.

## قلها في العمل

- Cast the query parameter to an integer before using it.
  - حوّل معامل الاستعلام إلى عدد صحيح قبل استخدامه.
- Wrap the conversion in a try block in case the value is not numeric.
  - ضع التحويل داخل try تحسباً لأن تكون القيمة غير رقمية.
