---
id: comprehension
category: programming
subcategory: iteration-and-generators
level: beginner
related: [loop, generator, array]
tags: [python]
aliases: ["list comprehension", "dictionary comprehension"]
term: "Comprehension"
translation: "الاستيعاب"
pronunciation: "كومبريهنشن"
keywords: ["بناء قائمة في سطر واحد", "‏[x for x in items]", "استيعاب القائمة والقاموس والمجموعة", "التصفية والتحويل", "أقصر من حلقة for", "صيغة الاستيعاب في بايثون", "build a list in one line", "[x for x in items]", "list dictionary set comprehension", "filter and transform", "shorter than a for loop", "python comprehension syntax"]
---

## التعريف

الاستيعاب (Comprehension) تعبير قصير يبني قائمة أو قاموساً أو مجموعة بالمرور على شيء ما مع إمكانية التصفية.

## أين تسمعه؟

في مراجعات كود بايثون ودروسه، كلما أمكن اختصار حلقة صغيرة تبني مجموعة فقط.

## أمثلة

- `[n * n for n in numbers if n > 0]` builds the squares of the positive numbers.
  - `[n * n for n in numbers if n > 0]` تبني مربعات الأعداد الموجبة.
- A dictionary comprehension turns the list of pairs into a lookup table.
  - استيعاب القاموس يحوّل قائمة الأزواج إلى جدول بحث.

## خطأ شائع

حشر منطق معقد في سطر واحد. إن احتاج أكثر من شرط أو صعبت قراءته فاستخدم حلقة عادية.

## لا تخلطه مع

تعبير المولّد (generator expression) الذي يبدو مشابهاً لكن بأقواس وينتج العناصر عند الطلب.

## قلها في العمل

- That loop is just building a list; turn it into a comprehension.
  - هذه الحلقة تبني قائمة فقط؛ حوّلها إلى comprehension.
- This comprehension is too dense, so let's expand it.
  - هذا الـ comprehension كثيف جداً، لنوسّعه.
