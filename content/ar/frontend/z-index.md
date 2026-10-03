---
id: z-index
category: frontend
level: beginner
related: [responsive-design]
term: "Z-index"
pronunciation: "زِي إنديكس"
keywords: ["ترتيب طبقات العناصر فوق بعضها","جعل العنصر يظهر في المقدمة","التحكم في عمق العناصر css","حل مشكلة تداخل العناصر","خاصية ترتيب العناصر في css","جعل القائمة تظهر فوق المحتوى","ترتيب العناصر على المحور العمقي","تحديد طبقة العنصر في الواجهة","زاي إنديكس في سي اس اس","تحريك العناصر للأمام وللخلف","layering elements on screen","css stack order property","bring element to front","how to overlap html elements","fix elements hidden behind others","css depth control property","z axis position css","control element stacking order","make modal appear on top","zindex css property","css element layering priority"]
---

## التعريف

خاصية في لغة CSS تحدد ترتيب طبقات العناصر على المحور العمقي (Z-axis)، مما يحدد أي العناصر يظهر في المقدمة وأيها يظهر في الخلف.

## أين تسمعه؟

في نقاشات تصميم واجهات المستخدم، أو عند إصلاح تداخل العناصر، أو عند بناء القوائم المنسدلة والنوافذ المنبثقة.

## أمثلة

- We increased the `z-index` of the modal to ensure it appears above the navigation bar.
  - قمنا بزيادة `z-index` الخاص بالنافذة المنبثقة لضمان ظهورها فوق شريط التنقل.
- The dropdown menu is hidden behind the hero image because its `z-index` is too low.
  - القائمة المنسدلة تختفي خلف صورة العرض الرئيسية لأن قيمة `z-index` الخاصة بها منخفضة جداً.

## خطأ شائع

الاعتقاد بأن `z-index` سيعمل على عناصر ذات موضع `static`، في حين أنه يؤثر فقط على العناصر التي لها خاصية `position` محددة.

## لا تخلطه مع

الفرق بين Z-index و Stacking Context هو أن Z-index خاصية تُطبق على عنصر واحد، بينما الـ Stacking Context هو طبقة مفاهيمية تُنشأ بواسطة خصائص CSS معينة وتجمع العناصر معاً.

## قلها في العمل

- I'm having trouble getting the tooltip to show up, I think I need to adjust the z-index.
  - أواجه مشكلة في ظهور تلميح الأدوات (tooltip)، أعتقد أنني بحاجة إلى تعديل الـ z-index.
- Please update the z-index for the sidebar component to ensure it remains visible above the main content area.
  - يرجى تحديث قيمة z-index لمكون الشريط الجانبي لضمان بقائه ظاهراً فوق منطقة المحتوى الرئيسي.
