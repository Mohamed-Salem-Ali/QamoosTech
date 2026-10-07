---
id: iterable
category: programming
subcategory: iteration-and-generators
level: intermediate
related: [iterator, loop, generator]
tags: [python]
term: "Iterable"
translation: "الكائن القابل للتكرار"
pronunciation: "إيتيرابل"
keywords: ["كائن يمكن المرور عليه بحلقة", "حلقة for تعمل على الكائنات القابلة للتكرار", "القائمة والنص والقاموس قابلة للتكرار", "ما الذي أستخدمه في حلقة for", "الفرق بين iterable وiterator", "جعل الصنف قابلاً للتكرار", "المرور على مجموعة", "كائن قابل للمرور", "object you can loop over", "for loop works on iterable", "list string dict are iterable", "what can i use in a for loop", "iterable vs iterator", "make a class iterable", "iterate over collection", "loopable object"]
---

## التعريف

الكائن القابل للتكرار (Iterable) هو أي شيء يمكنك المرور عليه عنصراً عنصراً، مثل القائمة والنص والقاموس والملف.

## أين تسمعه؟

في دروس بايثون عن حلقات `for`، وعندما تذكر دالة أنها تقبل أي iterable.

## أمثلة

- The function accepts any iterable, so you can pass a list or a generator.
  - تقبل الدالة أي iterable، فيمكنك تمرير قائمة أو مولّد.
- A string is iterable: the loop gives you one character at a time.
  - النص قابل للتكرار: تعطيك الحلقة حرفاً واحداً في كل مرة.

## خطأ شائع

الظن بأن الـ iterable هو نفسه الـ iterator. الـ iterable يمكنه إنتاج iterator، والـ iterator هو الذي يتتبع موضعك.

## لا تخلطه مع

الـ Iterator الذي يعطي العناصر واحداً تلو الآخر ويمكن استخدامه مرة واحدة فقط.

## قلها في العمل

- Type it as an iterable so callers aren't forced to pass a list.
  - اجعل نوعه iterable حتى لا يضطر من يستدعي الدالة إلى تمرير قائمة.
- Any iterable works with this loop.
  - أي iterable يعمل مع هذه الحلقة.
