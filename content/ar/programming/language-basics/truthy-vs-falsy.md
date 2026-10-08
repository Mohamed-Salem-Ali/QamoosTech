---
id: truthy-vs-falsy
category: programming
subcategory: language-basics
level: beginner
related: [variable, identity-vs-equality, short-circuit-evaluation]
aliases: ["truthiness"]
term: "Truthy vs Falsy"
translation: "القيم الصادقة والكاذبة ضمنياً"
pronunciation: "تروثي فيرسز فالسي"
keywords: ["قيم تُعامل معاملة المنطق","كيف تعمل الشروط البرمجية","متى يعتبر المتغير صحيحا","تحويل القيم إلى منطقية","قيم تعتبر خاطئة برمجيا","الفرق بين تروثي وفالسي","سلوك القيم في جمل الشرط","تقييم المتغيرات في البرمجة","مفهوم القيم المنطقية الضمنية","فهم القيم التي تساوي خطأ","values evaluated as boolean","how if statements check variables","truthy and falsy concepts","boolean evaluation of non-boolean","check if value is empty","javascript implicit boolean conversion","is zero true or false","truthy vs falsy meaning","programming conditional logic basics","values treated as false"]
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
- An empty list is falsy, so if not items runs the branch that handles no items.
  - القائمة الفارغة قيمة falsy، لذلك تُنفّذ if not items الفرع الذي يعالج غياب العناصر.

## خطأ شائع

الاعتقاد بأن `true` و `false` فقط هما ما يمكن استخدامهما في الشروط؛ فالمبرمجون المبتدئون ينسون غالباً أن قيمًا مثل `0` أو `null` أو المصفوفات الفارغة تُعامل كـ falsy في لغات برمجة كثيرة.

## لا تخلطه مع

القيمة falsy ليست هي القيمة false. فالصفر والنص الفارغ وnull تُعدّ falsy داخل الشرط، أما القيمة المنطقية false وحدها فهي false نفسها.

## قلها في العمل

- Be careful with that variable, it might be falsy if the API returns an empty list.
  - كن حذراً مع هذا المتغير، فقد يكون falsy إذا أرجعت واجهة البرمجة قائمة فارغة.
- I suggest adding an explicit check for null to avoid issues with other falsy values.
  - أقترح إضافة فحص صريح للقيمة null لتجنب المشاكل الناتجة عن قيم falsy أخرى.
