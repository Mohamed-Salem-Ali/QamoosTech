---
id: conditional-statement
category: programming
subcategory: language-basics
level: beginner
related: [control-flow, ternary-operator, truthy-vs-falsy]
aliases: ["if statement", "if else", "if else statement"]
term: "Conditional Statement"
translation: "الجملة الشرطية"
pronunciation: "كونديشنال ستيتمنت"
keywords: ["جملة if else", "نفّذ الكود فقط إذا تحقق الشرط", "سلسلة elif", "منطق التفرع", "قرار في الكود", "بديل switch", "if else statement", "run code only if true", "elif chain", "branching logic", "decision in code", "switch alternative"]
---

## التعريف

الجملة الشرطية (Conditional Statement) تنفّذ كتلة كود فقط عندما يتحقق شرط ما، وتُكتب عادة بـ `if` و`elif` و`else`.

## أين تسمعه؟

في كل دورة برمجة، وفي مراجعات الكود التي تتناول سلاسل الشروط الطويلة.

## أمثلة

- Add an `else` branch to handle the case where the user is not logged in.
  - أضف فرع `else` للتعامل مع حالة عدم تسجيل دخول المستخدم.
- The conditional checks the role before showing the button.
  - يفحص الشرط الدور قبل عرض الزر.
- If the cart is empty, show a message instead of the checkout button.
  - إذا كانت السلة فارغة، اعرض رسالة بدل زر الدفع.

## خطأ شائع

كتابة سلسلة `if / elif` طويلة لكل قيمة. البحث في قاموس أوضح في كثير من الأحيان.

## لا تخلطه مع

الحلقة (Loop) التي تكرر الكود، بينما يقرر الشرط هل يعمل الكود أصلاً.

## قلها في العمل

- Handle the empty case first with an early return.
  - عالج الحالة الفارغة أولاً بإرجاع مبكر.
- This conditional has too many branches; let's use a lookup table.
  - هذا الشرط له فروع كثيرة؛ لنستخدم جدول بحث.
