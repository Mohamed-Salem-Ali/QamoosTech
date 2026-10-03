---
id: pseudo-class
category: frontend
level: intermediate
related: [state]
term: "Pseudo-class"
pronunciation: "سودو-كلاس"
---

## التعريف

هي كلمة مفتاحية تُضاف إلى مُحدد (selector) في CSS لتحديد حالة خاصة للعنصر المختار. تسمح لك بتنسيق العناصر بناءً على تفاعل المستخدم معها أو موقعها في هيكل الصفحة.

## أين تسمعه؟

عند العمل على تنسيقات CSS، أو أثناء مراجعة كود الواجهات الأمامية، أو عند بناء مكونات تفاعلية.

## أمثلة

- Use the `:hover` pseudo-class to change the button color when the user moves the mouse over it.
  - استخدم الـ pseudo-class المسمى `:hover` لتغيير لون الزر عندما يمرر المستخدم مؤشر الفأرة فوقه.
- The `:focus` pseudo-class is essential for accessibility to highlight elements when they are selected via keyboard navigation.
  - الـ pseudo-class المسمى `:focus` ضروري جداً لسهولة الوصول (accessibility) لتمييز العناصر عند اختيارها باستخدام لوحة المفاتيح.

## خطأ شائع

الخلط بين الـ pseudo-classes والـ pseudo-elements؛ تذكر أن الـ pseudo-class تستهدف حالة معينة لعنصر موجود بالفعل، بينما الـ pseudo-element تستهدف أجزاءً محددة من العنصر مثل `::before` أو `::after`.
