---
id: floating-point-number
category: programming
subcategory: language-basics
level: intermediate
related: [data-type]
aliases: ["float", "floating point"]
term: "Floating-Point Number"
translation: "العدد العشري"
pronunciation: "فلوتينج بوينت نمبر"
keywords: ["لماذا 0.1 + 0.2 لا تساوي 0.3", "خطأ دقة الأعداد العشرية", "الفرق بين decimal وfloat للمال", "مشكلة التقريب في الكود", "معيار IEEE 754", "لا تقارن الأعداد العشرية بـ ==", "خطأ حساب المبالغ المالية", "تقريب الكسور في بايثون", "why 0.1 + 0.2 is not 0.3", "float precision error", "decimal vs float for money", "rounding problem in code", "ieee 754", "never compare floats with ==", "money calculation bug", "float rounding python"]
---

## التعريف

العدد العشري (Floating-Point) يخزّن القيمة العشرية كتقريب ثنائي، ولذلك لا يمكن تمثيل بعض الكسور مثل 0.1 بدقة تامة.

## أين تسمعه؟

في تقارير الأخطاء المتعلقة بالتقريب، ونقاشات حساب المبالغ المالية، وفي المقابلات التي تسأل لماذا لا تساوي `0.1 + 0.2` القيمة `0.3`.

## أمثلة

- Never compare two floats with equality; check that they are close enough instead.
  - لا تقارن عددين عشريين بالمساواة؛ تحقق بدلاً من ذلك أنهما متقاربان بما يكفي.
- We store prices as whole piasters to avoid floating-point errors.
  - نخزّن الأسعار كأعداد صحيحة من القروش لتجنب أخطاء الأعداد العشرية.
- In floating-point arithmetic, 0.1 + 0.2 gives 0.30000000000000004.
  - في حساب الفاصلة العائمة، يعطي الجمع 0.1 + 0.2 القيمة 0.30000000000000004.

## خطأ شائع

استخدام الأعداد العشرية للمال. تتراكم الأخطاء الصغيرة؛ استخدم أعداداً صحيحة بأصغر وحدة أو نوع Decimal.

## لا تخلطه مع

نوع Decimal الذي يخزّن الأرقام بالنظام العشري بدقة، وهو أبطأ لكنه آمن للتعاملات المالية.

## قلها في العمل

- That total is off by a fraction because of float rounding; let's switch to integers.
  - المجموع يختلف بكسر صغير بسبب تقريب الأعداد العشرية؛ فلننتقل إلى الأعداد الصحيحة.
- Use a tolerance when comparing floats in the test.
  - استخدم هامش تسامح عند مقارنة الأعداد العشرية في الاختبار.
