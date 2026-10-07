---
id: page-fault
category: programming
subcategory: runtime-and-memory
level: intermediate
related: [virtual-memory, system-call, context-switch]
aliases: ["major page fault", "minor page fault", "thrashing"]
term: "Page Fault"
translation: "خطأ الصفحة"
pronunciation: "بيج فولت"
keywords: ["الصفحة ليست في الذاكرة", "التحميل من القرص عند الطلب", "خطأ صفحة رئيسي وثانوي", "أول لمس للذاكرة", "وصول بطيء للذاكرة", "التخبّط", "page not in memory", "load from disk on demand", "major and minor page fault", "first touch of memory", "slow memory access", "thrashing"]
---

## التعريف

خطأ الصفحة (Page Fault) يحدث حين يلمس برنامج صفحة ذاكرة غير مربوطة حالياً بالرام. فيحمّلها نظام التشغيل، من القرص (خطأ رئيسي) أو بمجرد ربطها (خطأ ثانوي)، ثم يتابع البرنامج.

## أين تسمعه؟

في تحليل الأداء، ومقررات نظم التشغيل، ونقاشات الملفات المربوطة بالذاكرة والتبديل.

## أمثلة

- Major page faults are slow because they read from disk.
  - الأخطاء الرئيسية بطيئة لأنها تقرأ من القرص.
- A burst of page faults means the working set doesn't fit in RAM.
  - ازدحام أخطاء الصفحات يعني أن مجموعة العمل لا تتسع في الرام.

## خطأ شائع

اعتبار كل خطأ صفحة خللاً. الثانوية عادية؛ والفيض من الرئيسية فقط هو الإشارة للمشكلة.

## لا تخلطه مع

خطأ التجزئة (Segfault) وهو انهيار بسبب لمس ذاكرة لا يحق للبرنامج الوصول إليها.

## قلها في العمل

- How many major page faults per second?
  - كم خطأ صفحة رئيسي في الثانية؟
- The machine is thrashing.
  - الجهاز يتخبّط.
