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

## لا تخلطه مع

الفرق بين الـ pseudo-class والـ pseudo-element هو أن الـ pseudo-class تستهدف عنصراً موجوداً في حالة معينة، بينما الـ pseudo-element تقوم بإنشاء أو استهداف جزء فرعي من العنصر لا يوجد كعقدة مستقلة في الـ DOM.

## قلها في العمل

- I think we should add a hover pseudo-class to these cards so the user knows they are clickable.
  - أعتقد أنه يجب علينا إضافة pseudo-class من نوع hover لهذه البطاقات حتى يعرف المستخدم أنها قابلة للنقر.
- Please ensure that the focus pseudo-class is properly defined for all input fields to maintain accessibility standards.
  - يرجى التأكد من تعريف الـ focus pseudo-class بشكل صحيح لجميع حقول الإدخال للحفاظ على معايير سهولة الوصول.
