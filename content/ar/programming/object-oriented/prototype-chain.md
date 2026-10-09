---
id: prototype-chain
category: programming
subcategory: object-oriented
level: intermediate
related: [inheritance, object, class]
tags: [javascript]
aliases: ["prototype", "prototypal inheritance"]
term: "Prototype Chain"
translation: "سلسلة النماذج الأولية"
pronunciation: "بروتوتايب تشين"
keywords: ["الوراثة في جافاسكربت", "الكائن يبحث في أبيه", "الخاصية proto", "البحث عن الخاصية يصعد", "الـ class غلاف فوق النماذج الأولية", "الدالة Object.create", "javascript inheritance", "object looks up its parent", "__proto__", "property lookup walks up", "class is sugar over prototypes", "object.create"]
---

## التعريف

في جافاسكربت يمكن لكل كائن أن يرتبط بكائن آخر هو نموذجه الأولي (prototype). وعند قراءة خاصية لا يملكها الكائن تتبع جافاسكربت هذه الروابط صعوداً في سلسلة النماذج الأولية حتى تجدها أو تصل إلى النهاية.

## أين تسمعه؟

في مقابلات جافاسكربت، وشروح `class` و`extends`، وتصحيح "لماذا لدى هذا الكائن تلك الدالة؟".

## أمثلة

- `arr.map` isn't on the array itself; it's found on `Array.prototype` up the chain.
  - الدالة `arr.map` ليست على المصفوفة نفسها بل على `Array.prototype` أعلى السلسلة.
- A JavaScript `class` is syntax over prototype links.
  - الـ `class` في جافاسكربت صياغة فوق روابط النماذج الأولية.
- Setting a property on the prototype makes it visible to every object created from it.
  - يجعل تعيين خاصية على النموذج الأولي (prototype) الخاصية مرئية لكل كائن أُنشئ منه.

## خطأ شائع

تعديل نماذج أولية مدمجة مثل `Array.prototype`. يؤثر في كل مصفوفة في البرنامج ويكسر المكتبات.

## لا تخلطه مع

الوراثة المبنية على الأصناف في بايثون أو جافا حيث تأتي الكائنات من مخطط صنف. أما كائنات جافاسكربت فترتبط مباشرة بكائنات أخرى.

## قلها في العمل

- Look at the prototype chain to see where it's defined.
  - انظر إلى سلسلة النماذج الأولية لترى أين عُرّفت.
- `hasOwnProperty` ignores the chain.
  - تتجاهل `hasOwnProperty` السلسلة.
