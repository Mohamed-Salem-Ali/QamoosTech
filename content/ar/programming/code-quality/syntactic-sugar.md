---
id: syntactic-sugar
category: programming
subcategory: code-quality
level: intermediate
related: [decorator, comprehension, ternary-operator]
aliases: ["sugar"]
term: "Syntactic Sugar"
translation: "السكر النحوي"
pronunciation: "سينتاكتيك شوجر"
keywords: ["طريقة أقصر لكتابة الشيء نفسه", "صيغة أسهل لنفس السلوك", "الـ decorator سكر نحوي", "سكر async await", "صيغة للتسهيل", "مجرد اختصار", "shorter way to write the same thing", "easier syntax for the same behavior", "decorator is syntactic sugar", "async await sugar", "convenience syntax", "just shorthand"]
---

## التعريف

السكر النحوي (Syntactic Sugar) صيغة تجعل الكود أسهل كتابة أو قراءة دون إضافة قدرة جديدة: فهي تعني تماماً ما يعنيه الشكل الأطول.

## أين تسمعه؟

في نقاشات اللغات، ودروس شرح الـ decorators أو `async/await`، والمقابلات التي تسأل عما يحدث في الداخل.

## أمثلة

- The `@decorator` line is just syntactic sugar for `func = decorator(func)`.
  - السطر `@decorator` مجرد سكر نحوي لـ `func = decorator(func)`.
- A list comprehension is sugar over a loop that appends to a list.
  - الـ list comprehension سكر فوق حلقة تضيف إلى قائمة.

## خطأ شائع

التعامل مع السكر كأنه سحر. معرفة ما يتحول إليه تساعدك في تصحيح الأخطاء عندما يتصرف بشكل غير متوقع.

## لا تخلطه مع

الميزة الجديدة التي تضيف ما لم تكن تستطيع فعله. أما السكر فيغيّر طريقة الكتابة فقط.

## قلها في العمل

- That's just syntactic sugar for a function call.
  - هذا مجرد سكر نحوي لاستدعاء دالة.
- Under the hood the sugar expands into a plain loop.
  - في الداخل يتحول السكر إلى حلقة عادية.
