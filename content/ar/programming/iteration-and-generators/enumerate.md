---
id: enumerate
category: programming
subcategory: iteration-and-generators
level: beginner
related: [loop, iterable, iterator]
tags: [python]
aliases: ["enumerate function"]
term: "Enumerate"
translation: "التعداد مع الفهرس"
pronunciation: "إينيومريت"
keywords: ["index and value in a loop", "get position while looping", "python enumerate function", "numbered loop", "loop with counter", "start index at one", "الفهرس والقيمة داخل الحلقة", "معرفة الترتيب أثناء التكرار", "الدالة enumerate في بايثون", "حلقة مرقمة", "حلقة بعداد", "بدء الترقيم من واحد"]
---

## التعريف

دالة مدمجة في بايثون تقرن كل عنصر في شيء قابل للتكرار بفهرسه، فتقرأ الحلقة الموضع والقيمة معاً، دون عدّاد تديره بنفسك.

## أين تسمعه؟

في شيفرة بايثون التي تطبع قوائم مرقّمة، وفي مراجعات الشيفرة التي تستبدل العدّاد اليدوي، وفي دروس الحلقات.

## أمثلة

- for i, name in enumerate(names): print(i, name) prints each index with its name.
  - تطبع هذه الحلقة الفهرس مع كل اسم.
- enumerate(items, start=1) numbers the items from one instead of zero.
  - تُرقّم enumerate(items, start=1) العناصر ابتداءً من الواحد بدل الصفر.
- Use enumerate instead of a counter variable that you increment yourself.
  - استخدم enumerate بدل متغير عدّاد تزيده بنفسك.

## خطأ شائع

نسيان أن الفهرس يبدأ من صفر ما لم تمرّر قيمة البداية، فتظهر الأرقام أقل بواحد مما يعدّه الإنسان.

## لا تخلطه مع

حلقة range التي تنتج أرقاماً فقط. أما enumerate فيقرن تلك الأرقام بعناصر التسلسل، فتحصل عليهما معاً.

## قلها في العمل

- Use enumerate here so the report shows row numbers without a manual counter.
  - استخدم enumerate هنا ليعرض التقرير أرقام الصفوف دون عدّاد يدوي.
- Start the numbering at one for the list the user sees.
  - ابدأ الترقيم من الواحد في القائمة التي يراها المستخدم.
