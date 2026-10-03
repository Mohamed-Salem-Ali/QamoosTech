---
id: encapsulation
category: programming
level: intermediate
related: [class, object, inheritance, separation-of-concerns]
term: "Encapsulation"
pronunciation: "إن-كابسولايشن"
translation: "التغليف"
---

## التعريف

التغليف هو مبدأ أساسي في البرمجة الكائنية يجمع البيانات والووالعق التي تتعامل معها داخل وحدة واحدة، مع تقييد الوصول المباشر إليها من الخارج. يحمي هذا المبدأ الحالة الداخلية للكائن ويعرض واجهة محكومة فقط من خلال الدوال.

## أين تسمعه؟

- في مراجعات الكود عند مناقشة إخفاء البيانات ومحددات الوصول.
- أثناء نقاشات تصميم النظم حول إبقاء تفاصيل الفئات الداخلية خاصة.
- في مقابلات هندسة البرمجيات التي تركز على مبادئ البرمجة الكائنية.

## أمثلة

- The bank account class hides the raw balance variable and provides a deposit method to safely update the funds.
  - فئة الحساب البنكي تخفي متغير الرصيد الخام وتوفر دالة إيداع لتحديث الأموال بأمان.
- We use private fields in the user service to prevent other modules from modifying state directly.
  - نحن نستخدم حقولاً خاصة في خدمة المستخدم لمنع الوحدات الأخرى من تعديل الحالة مباشرة.

## خطأ شائع

الاعتقاد بأن التغليف يقتصر فقط على إخفاء البيانات باستخدام متغيرات خاصة، بينما هو في الواقع دمج البيانات والسلوك معاً لحماية سلامة الكائن.
