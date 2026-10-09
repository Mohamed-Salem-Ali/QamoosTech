---
id: topological-sort
category: programming
subcategory: data-structures
level: intermediate
related: [dag, depth-first-search, pipeline]
tags: [python]
aliases: ["dependency order", "build order"]
term: "Topological Sort"
translation: "الترتيب الطوبولوجي"
pronunciation: "توبولوجيكال سورت"
keywords: ["ترتيب المهام حسب الاعتماديات", "ترتيب البناء", "المتطلبات أولاً", "للرسوم غير الدورية فقط", "ترتيب تثبيت الحزم", "اكتشاف الدورات", "order tasks by dependencies", "build order", "prerequisites first", "dag only", "package install order", "detect cycles"]
---

## التعريف

الترتيب الطوبولوجي (Topological Sort) يضع عقد رسم موجّه بترتيب يأتي فيه كل عنصر بعد ما يعتمد عليه. ولا يعمل إلا إذا لم يكن في الرسم دورات.

## أين تسمعه؟

في أدوات البناء، ومديري الحزم، ومجدولات المهام مثل Airflow، ومسائل متطلبات المقررات.

## أمثلة

- A topological sort of the tasks tells us which one to run first.
  - يخبرنا الترتيب الطوبولوجي للمهام أيها نشغّل أولاً.
- If the sort fails, there is a circular dependency.
  - إذا فشل الترتيب ففيه اعتمادية دائرية.
- The build runs the modules in topological order, so each one finds its dependencies already built.
  - يشغّل البناء الوحدات بترتيب طوبولوجي، فتجد كل وحدة تبعياتها قد بُنيت مسبقاً.

## خطأ شائع

توقع إجابة وحيدة. قد توجد ترتيبات صالحة كثيرة عندما تكون المهام مستقلة.

## لا تخلطه مع

الفرز العادي بالقيمة. أما الطوبولوجي فيرتب بالاعتماد لا بالحجم أو الاسم.

## قلها في العمل

- Run the jobs in topological order.
  - شغّل المهام بالترتيب الطوبولوجي.
- There's a cycle, so no valid order exists.
  - هناك دورة فلا يوجد ترتيب صالح.
