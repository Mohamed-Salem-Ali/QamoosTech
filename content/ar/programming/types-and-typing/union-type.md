---
id: union-type
category: programming
subcategory: types-and-typing
level: intermediate
related: [type-hint, type-narrowing, null-vs-undefined, generics]
tags: [python, typescript]
aliases: ["union", "optional type"]
term: "Union Type"
translation: "النوع الاتحادي"
pronunciation: "يونيون تايب"
keywords: ["قيمة قد تكون من عدة أنواع", "نوع رقم أو نص", "نوع اختياري أو None", "str | None", "النوع a | b", "نوع يقبل القيمة الفارغة", "value can be one of several types", "int or string type", "optional type none", "type a | b", "nullable type"]
---

## التعريف

النوع الاتحادي (Union Type) يقول إن القيمة قد تكون من عدة أنواع، مثل `int | None` لرقم قد يكون مفقوداً أيضاً.

## أين تسمعه؟

في TypeScript وفي أنواع بايثون، وفي مراجعات الكود حول الدوال التي قد لا تعيد شيئاً.

## أمثلة

- The function returns `str | None`, so check for None before using it.
  - تعيد الدالة `str | None`، لذا تحقق من None قبل استخدامها.
- A union of two types is clearer than using the any type.
  - اتحاد نوعين أوضح من استخدام النوع any.
- The parameter accepts an int or a string, and the function handles both.
  - يقبل المعامل عدداً صحيحاً أو نصاً، وتعالج الدالة الاثنين.

## خطأ شائع

استخدام نوع اتحادي ثم تجاهل الحالة الأخرى. تجبرك أداة الفحص على تضييق النوع أولاً.

## لا تخلطه مع

النوع العام (Generic) الذي يُبقي نوعاً مجهولاً متسقاً. أما الاتحادي فيسمح بعدة بدائل معروفة.

## قلها في العمل

- Make the return type a union so callers know it can be empty.
  - اجعل نوع الإرجاع اتحادياً ليعرف من يستدعي الدالة أنه قد يكون فارغاً.
- Narrow the union with an if before accessing the field.
  - ضيّق النوع الاتحادي بـ if قبل الوصول إلى الحقل.
