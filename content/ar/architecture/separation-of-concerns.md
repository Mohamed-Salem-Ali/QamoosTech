---
id: separation-of-concerns
category: architecture
level: intermediate
related: [design-pattern, component]
term: "Separation of Concerns"
translation: "فصل الاهتمامات"
pronunciation: "سيباريشن أوف كونسيرنز"
keywords: ["تنظيم الكود في طبقات","فصل منطق العمل عن العرض","تقسيم المهام في النظام","منع تداخل وظائف الكود","هيكلة البرمجيات بشكل نظيف","مبدأ فصل الاهتمامات","تحسين صيانة الشيفرة البرمجية","تقسيم الكود إلى وحدات","سيباريشن أوف كونسيرنز","توزيع المسؤوليات في النظام","organize code into distinct parts","keep business logic separate","avoid mixing ui and data","modularize software architecture","decouple code components","clean code structure principles","stop mixing concerns in modules","divide system into layers","soc software design","improve code maintainability"]
---
## التعريف

تنظيم الشيفرة بحيث يكون لكل جزء مهمة واضحة واحدة، مثل فصل الوصول إلى البيانات عن قواعد العمل عن العرض.

## أين تسمعه؟

مراجعات الشيفرة ونقاشات المعمارية.

## أمثلة

- This controller also sends emails. Let's separate the concerns.
  - هذا الـ controller يرسل بريدًا أيضًا. لنفصل الاهتمامات.
- Good separation of concerns makes testing easier.
  - الفصل الجيد للاهتمامات يجعل الاختبار أسهل.

## خطأ شائع

تقسيم الشيفرة إلى طبقات صغيرة كثيرة حتى لا يستطيع أحد تتبعها. افصل فقط ما يتغير لأسباب مختلفة فعلًا.

## لا تخلطه مع

غالبًا ما يتم الخلط بين فصل الاهتمامات ومبدأ المسؤولية الواحدة، ولكن في حين أن فصل الاهتمامات هو مبدأ معماري عام لتقسيم النظام إلى ميزات متميزة، فإن مبدأ المسؤولية الواحدة هو مبدأ كائني التوجه ينص على أنه يجب أن يكون للفئة سبب واحد فقط للتغيير.

## قلها في العمل

- We need better separation of concerns here so that business logic isn't mixed directly with the UI components.
  - نحتاج إلى فصل أفضل للاهتمامات هنا حتى لا تختلط منطق الأعمال مباشرة مع مكونات واجهة المستخدم.
- Please refactor this module to ensure proper separation of concerns before we merge the pull request.
  - يرجى إعادة هيكلة هذه الوحدة لضمان الفصل السليم للاهتمامات قبل أن نقوم بدمج الـ pull request.
