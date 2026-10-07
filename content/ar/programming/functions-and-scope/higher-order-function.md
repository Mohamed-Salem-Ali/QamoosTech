---
id: higher-order-function
category: programming
subcategory: functions-and-scope
level: intermediate
related: [function, callback, decorator]
term: "Higher-Order Function"
translation: "الدالة عالية المستوى"
pronunciation: "هاير أوردر فنكشن"
keywords: ["دالة تأخذ دالة", "دالة تعيد دالة", "map وfilter وreduce", "تمرير الدوال كوسائط", "الترتيب بدالة key", "البرمجة الوظيفية", "function that takes a function", "function returning a function", "map filter reduce", "passing functions as arguments", "sorted with key function", "functional programming"]
---

## التعريف

الدالة عالية المستوى (Higher-Order Function) إما تأخذ دالة أخرى كوسيط أو تعيد دالة، مثل `map` و`sorted(key=...)` أو الـ decorator.

## أين تسمعه؟

في دورات جافاسكريبت وبايثون، وأحاديث البرمجة الوظيفية، ونقاشات الـ callbacks والـ decorators.

## أمثلة

- `sorted(names, key=len)` is a higher-order function call because it receives `len`.
  - استدعاء `sorted(names, key=len)` دالة عالية المستوى لأنه يستلم `len`.
- A decorator is a higher-order function that returns a new function.
  - الـ decorator دالة عالية المستوى تعيد دالة جديدة.

## خطأ شائع

الظن بأنها تحتاج صيغة خاصة. هي مجرد دالة عادية تستخدم دالة أخرى.

## لا تخلطه مع

الـ Callback وهي الدالة التي تُمرَّر. أما الدالة التي تستقبلها فهي عالية المستوى.

## قلها في العمل

- Pass the comparison as a function so this stays reusable.
  - مرّر المقارنة كدالة ليبقى هذا قابلاً لإعادة الاستخدام.
- A higher-order function keeps the loop logic in one place.
  - الدالة عالية المستوى تُبقي منطق الحلقة في مكان واحد.
