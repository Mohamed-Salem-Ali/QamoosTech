---
id: z-index
category: frontend
level: beginner
related: [responsive-design]
term: "Z-index"
pronunciation: "زِي إنديكس"
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
