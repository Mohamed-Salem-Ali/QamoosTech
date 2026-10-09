---
id: short-circuit-evaluation
category: programming
subcategory: language-basics
level: intermediate
related: [truthy-vs-falsy, control-flow, conditional-statement]
tags: [python, javascript]
term: "Short-Circuit Evaluation"
translation: "التقييم المختصر"
pronunciation: "شورت سيركت إيفاليويشن"
keywords: ["and و or تتوقفان مبكراً", "الشرط الثاني لا يُقيَّم", "قيمة افتراضية باستخدام or", "تجنب الخطأ باستخدام and", "العوامل المنطقية الكسولة", "نمط x and x.y", "and or stop early", "second condition not evaluated", "default value with or", "avoid error with and", "lazy boolean operators", "x and x.y pattern"]
---

## التعريف

التقييم المختصر (Short-Circuit Evaluation) يعني أن `and` و`or` تتوقفان بمجرد معرفة النتيجة، فلا يُقيَّم باقي التعبير.

## أين تسمعه؟

في مراجعات الكود حول الفحوص الآمنة مثل `user and user.name`، وعند شرح القيم الافتراضية المكتوبة بـ `or`.

## أمثلة

- The second check never runs when the first one is false.
  - الفحص الثاني لا يعمل أبداً عندما يكون الأول خاطئاً.
- We rely on short-circuiting to avoid reading a missing attribute.
  - نعتمد على التقييم المختصر لتجنب قراءة خاصية غير موجودة.
- In user and token is None, the second check is skipped when there is no user.
  - في التعبير user and token is None لا يُفحص الجزء الثاني حين لا يوجد مستخدم.

## خطأ شائع

وضع كود له آثار جانبية في الجزء الثاني من `and` / `or` وتوقع أنه سيعمل دائماً.

## لا تخلطه مع

العامل على مستوى البتات مثل `&` الذي يقيّم الطرفين دائماً.

## قلها في العمل

- Order the conditions so the cheap check runs first and short-circuits.
  - رتّب الشروط بحيث يعمل الفحص الأرخص أولاً ويختصر التقييم.
- Because of short-circuiting, this never touches the database when the flag is off.
  - بسبب التقييم المختصر لا يصل هذا إلى قاعدة البيانات عندما يكون المفتاح مغلقاً.
