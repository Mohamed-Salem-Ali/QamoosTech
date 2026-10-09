---
id: memoization
category: frontend
level: intermediate
related: [state, component, referential-transparency]
term: "Memoization"
pronunciation: "ميموإيزيشن"
translation: "Memoization (تخزين النتائج)"
keywords: ["حفظ نتائج الدوال المؤقت","منع إعادة حساب الدوال الثقيلة","تحسين أداء مكونات واجهات المستخدم","تخزين نتائج العمليات الحسابية مؤقتا","تسريع تطبيق رياكت البطيء","تجنب إعادة تصيير المكونات بلا داع","ميموإيزيشن","تخزين نتائج الدوال حسب المدخلات","تحسين أداء الدوال البرمجية","cache function return values","speed up react components","avoid recalculating expensive functions","optimize component re-rendering","save function output in cache","prevent heavy calculations on render","memozation","memotization","cache function results by input","fix slow react rendering"]
---

## التعريف

تقنية تحسين تُستخدم لحفظ نتائج الدوال البرمجية الثقيلة مؤقتاً (تخزين مؤقت) بناءً على المدخلات، لتجنب إعادة حسابها إذا تكررت نفس المدخلات.

## أين تسمعه؟

أثناء مراجعة الكود، ونقاشات تحسين الأداء، وعند تحسين أداء مكونات الواجهات.

## أمثلة

- We used memoization to prevent the heavy calculation function from running on every render.
  - استخدَمنا الميموإيزيشن لمنع دالة الحسابات الثقيلة من العمل مع كل عملية تصيير.
- Applying memoization to the filtered list component significantly improved the UI responsiveness.
  - تطبيق الميموإيزيشن على مكون القائمة المفلترة أدى إلى تحسين استجابة واجهة المستخدم بشكل ملحوظ.
- The price function caches its result for each product id, so repeated calls are instant.
  - تخزّن دالة السعر نتيجتها لكل معرّف منتج، فتكون الاستدعاءات المتكررة فورية.

## خطأ شائع

تطبيق الميموإيزيشن على كل دالة افتراضياً، مما يضيف استهلاكاً غير مبرر للذاكرة وتعقيداً للكود دون أي مكسب حقيقي في الأداء.

## لا تخلطه مع

الميموإيزيشن تخزن نتيجة دالة برمجية بناءً على المدخلات، بينما التخزين المؤقت (Caching) يشير عادةً إلى حفظ بيانات أوسع مثل استجابات واجهات البرمجة أو استعلامات قاعدة البيانات.

## قلها في العمل

- Let's add memoization to this expensive calculation so it doesn't re-run on every state change.
  - دعنا نضيف الميموإيزيشن إلى هذه العملية الحسابية المكلفة حتى لا تُعاد جدولتها مع كل تغيير في الحالة.
- We should consider applying memoization here to resolve the noticeable UI lag during filtering.
  - يجب أن نُفكر في تطبيق الميموإيزيشن هنا لحل التأخير الملحوظ في واجهة المستخدم أثناء التصفية.
