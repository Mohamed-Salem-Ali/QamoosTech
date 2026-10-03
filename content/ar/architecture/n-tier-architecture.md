---
id: n-tier-architecture
category: architecture
level: beginner
related: [separation-of-concerns, monolith-vs-microservices]
term: "N-tier Architecture"
translation: "معمارية متعددة الطبقات"
pronunciation: "إن-تير أركيتكتشر"
---

## التعريف

معمارية تصميم برمجيات تقسم التطبيق إلى طبقات منطقية، مثل واجهة المستخدم، والمنطق البرمجي، وتخزين البيانات، بحيث تعمل كل طبقة على بنية تحتية منفصلة أو تُدار بشكل مستقل.

## أين تسمعه؟

- في مقابلات تصميم الأنظمة
- أثناء نقاشات معمارية الباك اند
- عند توسيع نطاق تطبيقات الشركات الكبرى

## أمثلة

- The team uses an N-tier architecture to separate the user interface from the core business logic and database.
  - يستخدِم الفريق معمارية متعددة الطبقات لفصل واجهة المستخدم عن منطق العمل الأساسي وقاعدة البيانات.
- In our N-tier setup, each layer communicates only with the layer immediately below it.
  - في إعدادنا المتعدد الطبقات، تتواصل كل طبقة فقط مع الطبقة التي تليها مباشرة في الأسفل.

## خطأ شائع

الخلط بين الطبقات المنطقية (Layers) والطبقات الفيزيائية أو البنيوية (Tiers)، حيث تشير الأولى إلى فصل الكود برمجياً، بينما تعني الثانية الفصل الفعلي لتلك الطبقات على خوادم أو أجهزة مختلفة.
