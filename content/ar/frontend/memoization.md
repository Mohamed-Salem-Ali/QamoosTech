---
id: memoization
category: frontend
level: intermediate
related: [state, component]
term: "Memoization"
pronunciation: "ميموإيزيشن"
translation: "Memoization (تخزين النتائج)"
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

## خطأ شائع

تطبيق الميموإيزيشن على كل دالة افتراضياً، مما يضيف استهلاكاً غير مبرر للذاكرة وتعقيداً للكود دون أي مكسب حقيقي في الأداء.

## لا تخلطه مع

الميموإيزيشن تخزن نتيجة دالة برمجية بناءً على المدخلات، بينما التخزين المؤقت (Caching) يشير عادةً إلى حفظ بيانات أوسع مثل استجابات واجهات البرمجة أو استعلامات قاعدة البيانات.

## قلها في العمل

- Let's add memoization to this expensive calculation so it doesn't re-run on every state change.
  - دعنا نضيف الميموإيزيشن إلى هذه العملية الحسابية المكلفة حتى لا تُعاد جدولتها مع كل تغيير في الحالة.
- We should consider applying memoization here to resolve the noticeable UI lag during filtering.
  - يجب أن نُفكر في تطبيق الميموإيزيشن هنا لحل التأخير الملحوظ في واجهة المستخدم أثناء التصفية.
