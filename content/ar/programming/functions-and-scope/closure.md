---
id: closure
category: programming
subcategory: functions-and-scope
level: intermediate
related: [function, scope, variable]
term: "Closure"
pronunciation: "كلوزشر"
keywords: ["دالة تحتفظ بالمتغيرات الخارجية","إنشاء متغيرات خاصة في جافاسكريبت","الوصول لمتغيرات الدالة الخارجية","مفهوم الـ closure في البرمجة","دالة تحتفظ بنطاقها الأصلي","حفظ حالة المتغيرات داخل دالة","الكلوزشر في جافاسكريبت","الدوال المغلقة في البرمجة","function remembers outer variables","keep variables private in js","function scope retention","inner function accessing outer scope","javascript closure concept","create private variables with functions","function execution context preservation","closre","clousure","lexical scope closure"]
---

## التعريف

الـ Closure هي دالة تحتفظ بالوصول إلى المتغيرات الموجودة في النطاق الخارجي المحيط بها، حتى بعد انتهاء تنفيذ الدالة الخارجية التي أنشأتها.

## أين تسمعه؟

في مقابلات جافاسكريبت، ونقاشات البرمجة الوظيفية، وعند شرح خصوصية البيانات في الكود.

## أمثلة

- The inner function forms a closure over the counter variable to keep track of the state.
  - تشكل الدالة الداخلية closure فوق متغير العداد لتتبع الحالة.
- We use a closure to create private variables that cannot be modified directly from the outside.
  - نستخدم الـ closure لإنشاء متغيرات خاصة لا يمكن تعديلها مباشرة من الخارج.

## خطأ شائع

الاعتقاد بأن الـ closure هو بناء نحوي مميز، بينما هو في الحقيقة مجرد سلوك طبيعي للدوال تحتفظ فيه بالوصول إلى بيئة إنشائها.

## قلها في العمل

- Let's use a closure here to keep the count variable private and secure from outside modification.
  - دعنا نستخدم closure هنا للحفاظ على متغير العد خاصاً وآمناً من أي تعديل خارجي.
- I updated the implementation to use a closure so the callback retains access to the current configuration.
  - قمت بتحديث التنفيذ لاستخدام closure لكي تحتفظ دالة الـ callback بالوصول إلى الإعدادات الحالية.
