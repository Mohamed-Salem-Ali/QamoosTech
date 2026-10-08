---
id: ternary-operator
category: programming
subcategory: language-basics
level: intermediate
related: [conditional-statement, control-flow]
tags: [python, javascript]
aliases: ["conditional expression", "ternary"]
term: "Ternary Operator"
translation: "العامل الثلاثي"
pronunciation: "ترنري أوبريتر"
keywords: ["if else في سطر واحد", "الصيغة condition ? a : b", "x if cond else y", "شرط مضمّن", "تعبير شرطي قصير", "التعبير الشرطي", "one line if else", "condition ? a : b", "inline conditional", "short if expression", "conditional expression"]
---

## التعريف

العامل الثلاثي (Ternary Operator) شرط في سطر واحد يختار بين قيمتين بحسب شرط معين.

## أين تسمعه؟

في مراجعات كود جافاسكريبت وبايثون، عندما يختصر أحدهم `if / else` صغيرة إلى تعبير واحد.

## أمثلة

- In Python it reads `label = "adult" if age >= 18 else "minor"`.
  - في بايثون تُكتب `label = "adult" if age >= 18 else "minor"`.
- Use a ternary for a simple choice, but not for nested logic.
  - استخدم العامل الثلاثي لاختيار بسيط، لا لمنطق متداخل.

## خطأ شائع

تداخل عدة عوامل ثلاثية. يصبح غير مقروء بسرعة؛ استخدم `if` عادية بدلاً منه.

## لا تخلطه مع

جملة `if / else` الكاملة التي تنفّذ كتل كود. أما العامل الثلاثي فهو تعبير ينتج قيمة.

## قلها في العمل

- A ternary is fine here, but keep it on one line.
  - العامل الثلاثي مناسب هنا، لكن أبقِه في سطر واحد.
- That nested ternary is hard to read; please expand it.
  - هذا العامل الثلاثي المتداخل صعب القراءة؛ أرجو توسيعه.
