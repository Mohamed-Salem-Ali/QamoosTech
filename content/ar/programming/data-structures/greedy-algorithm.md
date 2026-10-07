---
id: greedy-algorithm
category: programming
subcategory: data-structures
level: intermediate
related: [recursion, priority-queue, topological-sort]
tags: [python]
aliases: ["greedy approach", "greedy"]
term: "Greedy Algorithm"
translation: "الخوارزمية الجشعة"
pronunciation: "جريدي ألجوريثم"
keywords: ["أفضل خيار في كل خطوة", "الأمثل المحلي", "فكّ العملة", "جدولة الفترات", "حل بسيط وسريع", "ليست مثلى دائماً", "best choice at each step", "local optimum", "coin change", "interval scheduling", "fast simple solution", "not always optimal"]
---

## التعريف

الخوارزمية الجشعة (Greedy Algorithm) تبني الحل باختيار الأفضل ظاهرياً في الخطوة الحالية دائماً دون إعادة نظر. هي سريعة وبسيطة ومثلى لبعض المسائل فقط.

## أين تسمعه؟

في مقررات الخوارزميات ومقابلاتها (جدولة الفترات وفكّ العملة وترميز هوفمان) ومسائل التخطيط.

## أمثلة

- Greedy works for interval scheduling: always pick the meeting that ends earliest.
  - تنجح الجشعة في جدولة الفترات: اختر دائماً الاجتماع الذي ينتهي أبكر.
- For odd coin systems greedy gives the wrong count.
  - في أنظمة عملات غريبة تعطي الجشعة عدداً خاطئاً.

## خطأ شائع

افتراض أن الجشعة صحيحة دائماً. أثبت أنها تعمل أو قارنها بالبرمجة الديناميكية على حالات صغيرة.

## لا تخلطه مع

البرمجة الديناميكية التي تنظر في كل الخيارات الفرعية وتجد الأمثل الحقيقي بكلفة أعلى.

## قلها في العمل

- Try a greedy approach first.
  - جرّب نهجاً جشعاً أولاً.
- Does a greedy choice stay safe here?
  - هل يبقى الاختيار الجشع آمناً هنا؟
