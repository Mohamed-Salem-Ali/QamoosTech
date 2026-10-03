---
id: dependency-injection
category: architecture
level: intermediate
related: [unit-test, mocking, middleware]
term: "Dependency Injection"
translation: "حقن التبعيات"
pronunciation: "ديبندنسي إنجكشن"
keywords: ["تمرير الكائنات من الخارج","تجنب استخدام كلمة new","جعل الكود قابلا للاختبار","فصل الخدمات عن الفئات","نمط حقن التبعيات","تزويد المكونات بالخدمات","ديبندنسي إنجكشن","طريقة حقن الخدمات","هيكلة الكود المعتمد","تسهيل عمل اختبارات الوحدة","pass objects from outside","avoid new keyword inside","make code easier to test","decouple classes and services","di pattern for architecture","injecting services into components","dependency injection pattern","how to mock dependencies","inversion of control pattern","provide dependencies to classes"]
---
## التعريف

تستلم الفئة ما تحتاجه (قاعدة البيانات، خدمة البريد) من الخارج بدل أن تنشئه بنفسها، فيسهل استبداله في الاختبارات.

## أين تسمعه؟

NestJS وSpring وAngular ونقاشات الاختبار.

## أمثلة

- Thanks to dependency injection, we replaced the real mailer with a fake in tests.
  - بفضل حقن التبعيات استبدلنا خدمة البريد الحقيقية بأخرى وهمية في الاختبارات.
- Inject the repository instead of creating it with `new`.
  - احقن الـ repository بدل إنشائه بـ `new`.

## خطأ شائع

إنشاء التبعيات بـ `new` داخل الفئة. عندها لا تستطيع استبدالها في الاختبار.

## لا تخلطه مع

غالبًا ما يتم الخلط بين حقن التبعيات ونمط محدد الخدمات (service locator)، ولكن بينما يقوم حقن التبعيات تمرير الكائنات المطلوبة من الخارج، فإن محدد الخدمات يتيح للكائنات سحب التبعيات بنفسها.

## قلها في العمل

- Let's use dependency injection for the payment service so we can mock it easily in our unit tests.
  - دعنا نستخدم حقن التبعيات لخدمة الدفع حتى نتمكن من محاكاتها بسهولة في اختبارات الوحدة الخاصة بنا.
- Please update this component to receive its configuration via dependency injection rather than importing the global config directly.
  - الرجاء تحديث هذا المكون ليتقبل إعداداته عبر حقن التبعيات بدلاً من استيراد الإعدادات العامة مباشرة.
