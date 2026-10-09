---
id: refactoring
category: programming
subcategory: code-quality
level: intermediate
related: [tech-debt, unit-test, code-smell, tdd]
term: "Refactoring"
translation: "إعادة هيكلة الشيفرة"
pronunciation: "ريفاكتورينج"
keywords: ["تحسين بنية الكود","تنظيف الشيفرة البرمجية","إعادة تنظيم الكود","تحسين قراءة الكود","ريفاكتورينج","تعديل هيكلية البرنامج","تطوير الكود دون تغيير الوظيفة","إعادة صياغة الشيفرة","تحسين جودة الكود المصدري","تنظيم الدوال المعقدة","improve code structure","clean up messy code","make code easier to read","restructuring code without changing behavior","code cleanup process","refactor code","improving software design","reorganizing existing code","refactoring techniques","optimize code readability"]
---
## التعريف

تحسين بنية الشيفرة دون تغيير ما تفعله، لتصبح أسهل في القراءة والتعديل.

## أين تسمعه؟

مراجعة الشيفرة، وتخطيط السبرنت، والنقاش حول الدين التقني.

## أمثلة

- Let's refactor this module before adding new features.
  - لنعد هيكلة هذه الوحدة قبل إضافة ميزات جديدة.
- The tests passed before and after the refactoring.
  - نجحت الاختبارات قبل إعادة الهيكلة وبعدها.
- We refactored the billing module into smaller functions, and no behaviour changed.
  - أعدنا هيكلة وحدة الفوترة إلى دوال أصغر، ولم يتغيّر أي سلوك.

## خطأ شائع

إعادة الهيكلة بلا اختبارات. إن لم تستطع إثبات أن السلوك لم يتغيّر فأنت تعيد الكتابة فقط.

## لا تخلطه مع

تعمل إعادة الهيكلة على تحسين البنية الداخلية دون تغيير السلوك الخارجي، بينما تتخلص عملية إعادة الكتابة من الشيفرة الحالية لبنائها من جديد بالكامل.

## قلها في العمل

- I will spend the afternoon refactoring this messy function to make it easier to read.
  - سأقضي فترة ما بعد الظهر في إعادة هيكلة هذه الدالة المعقدة لتسهيل قراءتها.
- Please ensure that all unit tests pass after completing the refactoring for this module.
  - يرجى التأكد من نجاح جميع اختبارات الوحدة بعد الانتهاء من إعادة هيكلة هذه الوحدة البرمجية.
