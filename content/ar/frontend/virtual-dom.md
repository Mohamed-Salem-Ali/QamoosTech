---
id: virtual-dom
category: frontend
level: intermediate
related: [component, rendering, state]
tags: [react]
term: "Virtual DOM"
translation: "الـ Virtual DOM (أو DOM الافتراضي)"
pronunciation: "فيرتشوال دوم"
keywords: ["نسخة الذاكرة لواجهة المستخدم","تحسين أداء عرض العناصر","مزامنة واجهة المستخدم برمجيا","تقليل التعديلات المباشرة بالمتصفح","مفهوم الـ دوم الافتراضي","طريقة عمل الواجهات الأمامية","الفرق بين شادو ودوم","تحديثات الواجهة الفعالة","عملية مقارنة العناصر برمجيا","نسخة خفيفة من الـ دوم","lightweight ui memory copy","improve frontend rendering performance","syncing dom with memory","efficient web page updates","react dom abstraction concept","how to optimize dom manipulation","what is vdom in javascript","difference between shadow and virtual","predictable ui state updates","virtual dom diffing process"]
---

## التعريف

مفهوم برمجي يتم فيه الاحتفاظ بنسخة خفيفة الوزن من واجهة المستخدم في الذاكرة ومزامنتها مع الـ DOM الحقيقي لتحسين الأداء.

## أين تسمعه؟

في نقاشات إطارات عمل الواجهات الأمامية، واجتماعات تحسين الأداء، والنظرات العامة على بنية النظام.

## أمثلة

- The framework updates the Virtual DOM first before touching the browser's actual DOM.
  - يُحدث إطار العمل الـ Virtual DOM أولاً قبل لمس الـ DOM الفعلي للمتصفح.
- Using a Virtual DOM helps minimize expensive direct manipulations of the webpage elements.
  - يساعد استخدام الـ Virtual DOM في تقليل التعديلات المباشرة والمكلفة على عناصر صفحة الويب.

## خطأ شائع

الاعتقاد بأن الـ Virtual DOM أسرع دائماً من الـ DOM الحقيقي، في حين أنه يُستخدم في الواقع لجعل التحديثات قابلة للتنبؤ بها وأكثر كفاءة وليس مجرد مُسرع مطلق.

## لا تخلطه مع

الـ Virtual DOM مقابل الـ Shadow DOM: الـ Virtual DOM هو تجريد برمجي للأداء يُحفظ في الذاكرة، بينما الـ Shadow DOM هو معيار أصيل في المتصفح يُستخدم لعزل الـ CSS وعناصر الـ DOM.

## قلها في العمل

- We should check if the Virtual DOM is causing unnecessary re-renders in this specific component.
  - يجب أن نتحقق مما إذا كان الـ Virtual DOM يتسبب في إعادة عرض غير ضرورية داخل هذا المكون.
- I have optimized the state management to ensure the Virtual DOM diffing process remains efficient.
  - لقد قمت بتحسين إدارة الحالة لضمان بقاء عملية مقارنة الـ Virtual DOM فعالة.
