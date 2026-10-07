---
id: first-class-function
category: programming
subcategory: functions-and-scope
level: intermediate
related: [function, higher-order-function, anonymous-function]
aliases: ["functions as values"]
term: "First-Class Function"
translation: "الدالة من الدرجة الأولى"
pronunciation: "فيرست كلاس فنكشن"
keywords: ["الدوال قيم", "تخزين دالة في متغير", "تمرير دالة كوسيط", "إرجاع دالة من دالة", "دالة داخل قاموس", "الدوال كائنات", "functions are values", "store function in variable", "pass function as argument", "return a function from a function", "function in a dictionary", "functions are objects"]
---

## التعريف

تمتلك اللغة دوالاً من الدرجة الأولى (First-Class Functions) عندما تُعامل الدوال كأي قيمة أخرى: تخزنها في متغيرات وتمررها وتعيدها.

## أين تسمعه؟

في شروحات بايثون وجافاسكريبت للـ callbacks والـ closures والـ decorators.

## أمثلة

- Because functions are first-class, we can keep them in a dictionary and call them by name.
  - لأن الدوال من الدرجة الأولى، يمكننا حفظها في قاموس واستدعاؤها بالاسم.
- JavaScript functions are first-class, so you can pass one as an argument.
  - دوال جافاسكريبت من الدرجة الأولى، لذا يمكنك تمرير واحدة كوسيط.

## خطأ شائع

الخلط بين الإشارة إلى الدالة واستدعائها. `f` هي الدالة نفسها؛ و`f()` تشغّلها.

## لا تخلطه مع

الدالة عالية المستوى التي تستخدم الدوال مدخلات أو مخرجات. أما الدرجة الأولى فهي القدرة التي تجعل ذلك ممكناً.

## قلها في العمل

- Since functions are first-class here, a lookup table beats the if-chain.
  - بما أن الدوال من الدرجة الأولى هنا، فجدول البحث أفضل من سلسلة if.
- Store the handler in a variable and pass it along.
  - خزّن المعالج في متغير ومرّره.
