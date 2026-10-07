---
id: iterator
category: programming
subcategory: iteration-and-generators
level: intermediate
related: [iterable, generator, loop]
tags: [python]
aliases: ["iterator protocol", "exhausted iterator"]
term: "Iterator"
translation: "المكرِّر"
pronunciation: "إيتيريتر"
keywords: ["العنصر التالي واحداً تلو الآخر", "خطأ StopIteration", "الـ iterator يستخدم مرة واحدة", "كيف تعمل حلقة for داخلياً", "إنشاء iterator مخصص", "الدالتان iter وnext", "تسلسل كسول من القيم", "الحلقة الثانية فارغة", "next item one at a time", "stopiteration error", "iterator used only once", "how a for loop works internally", "create custom iterator", "iter and next", "lazy sequence of values", "empty second loop"]
---

## التعريف

المكرِّر (Iterator) كائن ينتج عناصر التسلسل واحداً تلو الآخر. كل طلب يعطي العنصر التالي، وعندما لا يتبقى شيء يعلن النهاية.

## أين تسمعه؟

عند شرح كيف تعمل حلقات `for`، وفي نقاشات المولّدات، وعندما تعمل حلقة مرة واحدة فقط بشكل غريب.

## أمثلة

- Calling `next()` on the iterator returns the next item.
  - استدعاء `next()` على الـ iterator يعيد العنصر التالي.
- The iterator is exhausted, so the second loop prints nothing.
  - الـ iterator استُنفد، لذلك لا تطبع الحلقة الثانية شيئاً.

## خطأ شائع

المرور على الـ iterator نفسه مرتين. بعد استهلاكه يبقى فارغاً؛ أنشئ واحداً جديداً أو احتفظ بالبيانات في قائمة.

## لا تخلطه مع

الـ Iterable وهو الشيء الذي تمرّ عليه. وطلب iterator من iterable هو أول ما تفعله حلقة `for`.

## قلها في العمل

- That's an iterator, so you can only consume it once.
  - هذا iterator، لذا يمكنك استهلاكه مرة واحدة فقط.
- Wrap it in `list()` if you need to read it twice.
  - غلّفه بـ `list()` إن احتجت قراءته مرتين.
