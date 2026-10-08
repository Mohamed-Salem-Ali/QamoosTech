---
id: trunk-based-development
category: git
level: intermediate
related: [feature-branch, feature-flag, merge-conflict]
term: "Trunk-Based Development"
translation: "التطوير على الفرع الرئيسي"
pronunciation: "ترانك بيسد ديفيلوبمنت"
keywords: ["الدمج في الفرع الرئيسي يومياً", "دمجات صغيرة متكررة", "تجنب الفروع طويلة العمر", "إخفاء العمل غير المكتمل", "merge to main every day", "small frequent merges", "avoid long-lived branches", "hide unfinished work", "continuous integration practice"]
---

## التعريف

طريقة عمل يدمج فيها المطورون تغييرات صغيرة في الفرع الرئيسي بشكل متكرر، غالباً يومياً، ويخفون العمل غير المكتمل خلف مفاتيح الميزات بدلاً من الفروع طويلة العمر.

## أين تسمعه؟

في الفرق التي تنشر عدة مرات في اليوم، وفي النقاشات حول تجنب تعارضات الدمج.

## أمثلة

- We merge to main every day with trunk-based development.
  - ندمج في الفرع الرئيسي كل يوم وفق التطوير على الفرع الرئيسي.
- The unfinished screen is hidden behind a feature flag.
  - الشاشة غير المكتملة مخفية خلف مفتاح ميزة.

## خطأ شائع

تسمية الفريق بأنه يعمل على الفرع الرئيسي بينما يحتفظ الجميع بفروع تدوم أسبوعاً. الممارسة هي دمجات صغيرة متكررة.

## لا تخلطه مع

فروع الميزات نسخ قصيرة العمر من الخط الرئيسي، أما التطوير على الفرع الرئيسي فيُبقي معظم العمل على خط رئيسي واحد.
