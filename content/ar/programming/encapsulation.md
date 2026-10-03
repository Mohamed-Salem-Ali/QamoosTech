---
id: encapsulation
category: programming
level: intermediate
related: [class, object, inheritance, separation-of-concerns]
term: "Encapsulation"
pronunciation: "إن-كابسولايشن"
translation: "التغليف"
keywords: ["مبدأ التغليف في البرمجة","إخفاء البيانات داخل الكلاس","تقييد الوصول للمتغيرات","دمج البيانات مع الدوال","حماية الحالة الداخلية للكائن","استخدام محددات الوصول","مفهوم التغليف البرمجي","منع التعديل المباشر للبيانات","الفرق بين التغليف والتجريد","كيفية تطبيق التغليف","مصطلح إنكابسولايشن","hide internal class data","make variables private","restrict access to properties","bundle data and methods","protect object state integrity","oop visibility modifiers","getter and setter usage","prevent direct field access","data hiding principles","encapsulation definition","encapsulation in programming"]
---

## التعريف

التغليف هو مبدأ أساسي في البرمجة الكائنية يجمع البيانات والدوال التي تتعامل معها داخل وحدة واحدة، مع تقييد الوصول المباشر إليها من الخارج. يحمي هذا المبدأ الحالة الداخلية للكائن ويعرض واجهة محكومة فقط من خلال الدوال.

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

## لا تخلطه مع

غالباً ما يُخلط بين التغليف والتجريد (Abstraction)، لكن التغليف يتعلق بدمج البيانات وإخفاء تفاصيل التنفيذ، بينما يتعلق التجريد بإخفاء التعقيد وإظهار الميزات الأساسية فقط.

## قلها في العمل

- Let's apply better encapsulation here by making these properties private and adding getter methods.
  - دعونا نطبق تغليفاً أفضل هنا عبر جعل هذه الخصائص خاصة وإضافة دالة جلب.
- Please ensure proper encapsulation of the state inside the new service class to prevent external tampering.
  - يرجى ضمان التغليف السليم للحالة داخل فئة الخدمة الجديدة لمنع العبث الخارجي.
