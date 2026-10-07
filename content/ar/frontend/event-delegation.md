---
id: event-delegation
category: frontend
level: intermediate
related: [event-bubbling, dom, component]
tags: [javascript]
aliases: ["delegated events", "event target"]
term: "Event Delegation"
translation: "تفويض الأحداث"
pronunciation: "إيفنت ديليجيشن"
keywords: ["مستمع واحد على الأب", "معالجة نقرات عناصر كثيرة", "يعمل مع العناصر الديناميكية", "هدف الحدث", "ذاكرة أقل", "الفقاعة تجعله ممكناً", "one listener on the parent", "handle clicks for many children", "works for dynamic elements", "event target", "less memory", "bubbling makes it work"]
---

## التعريف

تفويض الأحداث (Event Delegation) يعني ربط مستمع حدث واحد بالعنصر الأب بدل واحد لكل ابن، واستخدام `target` الحدث لمعرفة أي ابن نُقر. ويعتمد على فقاعة الأحداث.

## أين تسمعه؟

في كود جافاسكربت الخالص، ومراجعات أداء القوائم الطويلة، وأسئلة مقابلات الـ DOM.

## أمثلة

- Attach the click listener to the `<ul>` and check `event.target` for the `<li>`.
  - اربط مستمع النقر بالـ `<ul>` وافحص `event.target` لمعرفة الـ `<li>`.
- Items added later work automatically with delegation.
  - العناصر المضافة لاحقاً تعمل تلقائياً مع التفويض.

## خطأ شائع

استخدامه لأحداث لا تتفاعل بالفقاعة (مثل `focus`). استخدم `focusin` أو اربط مباشرة.

## لا تخلطه مع

فقاعة الأحداث وهي السلوك الذي يجعل الأحداث تصعد. أما التفويض فالتقنية التي تستخدمه.

## قلها في العمل

- Delegate the click handling to the container.
  - فوّض معالجة النقر إلى الحاوية.
- Check `event.target.closest('button')`.
  - افحص `event.target.closest('button')`.
