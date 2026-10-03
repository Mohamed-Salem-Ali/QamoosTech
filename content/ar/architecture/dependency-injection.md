---
id: dependency-injection
category: architecture
level: intermediate
related: [unit-test, mocking, middleware]
term: "Dependency Injection"
translation: "حقن التبعيات"
pronunciation: "ديبندنسي إنجكشن"
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
