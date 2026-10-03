---
id: truthy-vs-falsy
category: programming
level: beginner
related: [variable]
term: "Truthy vs Falsy"
pronunciation: "تروثي فيرسز فالسي"
---

## التعريف

في العديد من لغات البرمجة، يتم تقييم القيم التي ليست من النوع المنطقي (boolean) على أنها `true` أو `false` عند استخدامها في الشروط. القيمة "Truthy" هي التي تُعامل معاملة `true`، بينما القيمة "Falsy" هي التي تُعامل معاملة `false`.

## أين تسمعه؟

أثناء مراجعة الكود (code review)، أو عند تصحيح أخطاء منطقية في جمل `if`، أو عند تعلم كيفية تعامل اللغة مع تحويل الأنواع (type coercion).

## أمثلة

- An empty string is considered falsy, so the code inside the block will not execute.
  - السلسلة النصية الفارغة تُعتبر falsy، لذا لن يتم تنفيذ الكود الموجود داخل الشرط.
- A non-zero number is considered truthy, allowing it to pass a conditional check.
  - الرقم الذي لا يساوي صفراً يُعتبر truthy، مما يسمح له بتجاوز فحص الشرط.

## خطأ شائع

الاعتقاد بأن `true` و `false` فقط هما ما يمكن استخدامهما في الشروط؛ فالمبرمجون المبتدئون ينسون غالباً أن قيمًا مثل `0` أو `null` أو المصفوفات الفارغة تُعامل كـ falsy في لغات برمجة كثيرة.
