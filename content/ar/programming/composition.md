---
id: composition
category: programming
level: intermediate
related: [inheritance, design-pattern, separation-of-concerns]
term: "Composition"
pronunciation: "كومبوزيشن"
translation: "التركيب"
---

## التعريف

مبدأ برمجي يعتمد على بناء أنواع أو دوال معقدة عن طريق دمج أجزاء أصغر وأبسط معاً، بدلاً من الاعتماد على التسلسلات الهرمية العميقة للوراثة.

## أين تسمعه؟

في مراجعات الكود، ونقاشات هندسة البرمجيات، وعند الحديث عن التصميم كائني التوجه أو الوظيفي.

## أمثلة

- Instead of using a deep class hierarchy, we used composition to add logging and caching to our service.
  - بدلاً من استخدام تسلسل هرمي عميق للأصناف، استخدمنا التركيب لإضافة ميزات التسجيل والتخزين المؤقت إلى خدمتنا.
- React encourages component composition by letting you build large UIs from smaller, reusable parts.
  - تشجع ريأكت على تركيب المكونات من خلال السماح لك ببناء واجهات مستخدم كبيرة من أجزاء أصغر وقابلة لإعادة الاستخدام.

## خطأ شائع

الاعتقاد بأن التركيب ينطبق فقط على الأصناف أو الكائنات، في حين أنه يعمل بشكل جيد بنفس القدر مع الدوال والوحدات البرمجية.
