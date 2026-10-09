---
id: tail-call
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [recursion, stack-frame, stack-overflow]
aliases: ["tail call optimization", "tail recursion"]
term: "Tail Call"
translation: "الاستدعاء الذيلي"
pronunciation: "تيل كول"
keywords: ["آخر إجراء في دالة", "تحسين الاستدعاء الذيلي", "إعادة استخدام إطار المكدس", "استدعاء ذاتي دون نمو المكدس", "بايثون لا تحسّنه", "اللغات الوظيفية", "last action of a function", "tail call optimization", "reuse the stack frame", "recursion without growing stack", "python does not optimize", "functional languages"]
---

## التعريف

الاستدعاء الذيلي (Tail Call) استدعاء دالة هو آخر ما تفعله دالة. تحسّنه بعض اللغات فتعيد استخدام إطار المكدس الحالي، فلا يفيض المكدس بالاستدعاء الذاتي العميق.

## أين تسمعه؟

في البرمجة الوظيفية (Scheme وHaskell وErlang)، ونقاشات الاستدعاء الذاتي، وسؤال "لماذا لا تحسّن بايثون هذا؟".

## أمثلة

- This recursion is a tail call, so Erlang runs it in constant stack space.
  - هذا الاستدعاء الذاتي ذيلي لذا تنفذه Erlang بمساحة مكدس ثابتة.
- Python doesn't do tail-call optimisation; use a loop.
  - لا تقوم بايثون بتحسين الاستدعاء الذيلي؛ استخدم حلقة.
- The tail-recursive version reuses one stack frame, so a million steps do not overflow.
  - تُعيد النسخة ذات الاستدعاء الذيلي استخدام إطار مكدس واحد، فلا يطفح المكدس بمليون خطوة.

## خطأ شائع

افتراض أن كل لغة تحسّن الاستدعاءات الذيلية. بايثون ومعظم اللغات الشائعة لا تفعل.

## لا تخلطه مع

الاستدعاء الذاتي العادي حيث يبقى عمل بعد عودة الاستدعاء (مثل `n * factorial(n-1)`) فلا يمكن التخلص من الإطار.

## قلها في العمل

- Is that a real tail call?
  - هل هذا استدعاء ذيلي فعلاً؟
- Rewrite it with an accumulator to make it a tail call.
  - أعد كتابته بمجمّع ليصبح استدعاءً ذيلياً.
