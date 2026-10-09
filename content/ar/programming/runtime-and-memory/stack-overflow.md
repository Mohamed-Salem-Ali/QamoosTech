---
id: stack-overflow
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [stack-frame, recursion, call-stack]
aliases: ["recursionerror", "maximum recursion depth", "call stack size exceeded"]
term: "Stack Overflow (Error)"
translation: "فيض المكدس"
pronunciation: "ستاك أوفرفلو"
keywords: ["استدعاءات متداخلة كثيرة", "انهيار الاستدعاء الذاتي اللانهائي", "تجاوز أقصى عمق للاستدعاء", "المكدس ممتلئ", "استدعاء ذاتي بلا حالة أساس", "سلسلة استدعاءات عميقة", "too many nested calls", "infinite recursion crash", "maximum recursion depth exceeded", "stack is full", "recursion without base case", "deep call chain"]
---

## التعريف

خطأ فيض المكدس (Stack Overflow) يحدث حين ينفد مكان مكدس الاستدعاءات، وغالباً بسبب استدعاء ذاتي لا يتوقف أو يتعمق كثيراً.

## أين تسمعه؟

في `RecursionError` في بايثون، ورسالة "Maximum call stack size exceeded" في جافاسكربت، وأخطاء الاستدعاء الذاتي.

## أمثلة

- The function has no base case, so it ends in a stack overflow.
  - ليس للدالة حالة أساس فتنتهي بفيض المكدس.
- Convert the deep recursion to a loop.
  - حوّل الاستدعاء الذاتي العميق إلى حلقة.
- The stack overflow error came from a recursive call that never reached its base case.
  - جاء خطأ تجاوز المكدس (stack overflow) من استدعاء تكراري لم يصل إلى حالته الأساسية أبداً.

## خطأ شائع

رفع حد الاستدعاء كحل. المشكلة الحقيقية غالباً حالة أساس ناقصة أو تصميم عميق جداً.

## لا تخلطه مع

موقع Stack Overflow الذي يسأل فيه المطورون. اسم الخطأ كان أسبق.

## قلها في العمل

- We hit a stack overflow on large inputs.
  - حدث فيض مكدس مع المدخلات الكبيرة.
- Add a base case and an iterative version.
  - أضف حالة أساس ونسخة تكرارية.
