---
id: type-assertion
category: programming
subcategory: types-and-typing
level: intermediate
related: [type-narrowing, type-hint, static-typing]
tags: [typescript]
aliases: ["type cast", "as cast", "non-null assertion"]
term: "Type Assertion"
translation: "تأكيد النوع"
pronunciation: "تايب أسيرشن"
keywords: ["إخبار المترجم بالنوع", "الكلمة as في TypeScript", "تحويل دون فحص", "ثق بي في النوع", "تأكيد عدم الفراغ", "مخرج طوارئ من الأنواع", "tell the compiler the type", "as keyword in typescript", "cast without checking", "trust me type", "non null assertion", "typing escape hatch"]
---

## التعريف

تأكيد النوع (Type Assertion) يخبر مدقق الأنواع "عامل هذه القيمة على أنها من هذا النوع" (مثل `value as User` في TypeScript). يغيّر ما يعتقده المدقق فقط وليس حقيقة القيمة وقت التشغيل.

## أين تسمعه؟

في مراجعات كود TypeScript (`as` و`!`)، والتعامل مع ردود الـ API، والهجرة من جافاسكربت.

## أمثلة

- `response as User` compiles even if the server sends something else.
  - الصيغة `response as User` تُترجم حتى لو أرسل الخادم شيئاً آخر.
- Prefer a type guard over an assertion.
  - فضّل حارس النوع على التأكيد.

## خطأ شائع

استخدام التأكيدات لإسكات الأخطاء. إن لم تكن القيمة كما ادعيت ظهر الخلل لاحقاً وقت التشغيل.

## لا تخلطه مع

تضييق النوع حيث يفحص الكود القيمة (`typeof x === 'string'`) فيستطيع المدقق إثبات النوع.

## قلها في العمل

- Replace this `as` with a runtime check.
  - استبدل هذه الـ `as` بفحص وقت تشغيل.
- Validate the response, then assert.
  - تحقق من الاستجابة ثم أكّد.
