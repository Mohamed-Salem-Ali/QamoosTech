---
id: compare-and-swap
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [mutex, data-race, race-condition]
aliases: ["cas", "lock-free", "optimistic update"]
term: "Compare-and-Swap"
translation: "المقارنة ثم التبديل"
pronunciation: "كومبير أند سواب"
keywords: ["تحديث ذري بلا قفل", "تعليمة CAS", "حدّث فقط إن لم يتغير", "بلا أقفال", "تحديث متفائل", "عداد ذري", "atomic update without a lock", "cas instruction", "update only if unchanged", "lock-free", "optimistic update", "atomic counter"]
---

## التعريف

المقارنة ثم التبديل (CAS) عملية ذرية تحدّث قيمة فقط إذا كانت ما تزال تحمل القيمة التي توقعتها، وتخبرك هل نجحت. وهي لبنة الكود الخالي من الأقفال.

## أين تسمعه؟

في العدادات الذرية، وبنى البيانات الخالية من الأقفال، والقفل المتفائل في قواعد البيانات، وأسئلة المقابلات.

## أمثلة

- Retry the CAS in a loop until it succeeds.
  - أعد محاولة CAS في حلقة حتى تنجح.
- A SQL `UPDATE ... WHERE version = 3` is compare-and-swap at database level.
  - جملة `UPDATE ... WHERE version = 3` في SQL هي مقارنة وتبديل على مستوى قاعدة البيانات.
- The counter uses compare-and-swap so two threads never overwrite each other's update.
  - يستخدم العدّاد المقارنة والتبديل (compare-and-swap) حتى لا يمحو خيطان تحديث أحدهما الآخر.

## خطأ شائع

تجاهل مشكلة ABA. يمكن للقيمة أن تتغير من A إلى B ثم تعود إلى A ولا تستطيع CAS ملاحظة ذلك.

## لا تخلطه مع

الـ mutex الذي يحجب الخيوط الأخرى. أما CAS فلا تحجب أبداً؛ بل تفشل فتعيد المحاولة.

## قلها في العمل

- Use an atomic counter instead of a lock.
  - استخدم عداداً ذرياً بدل القفل.
- This is a CAS loop.
  - هذه حلقة CAS.
