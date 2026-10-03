---
id: refactoring
category: programming
level: intermediate
related: [tech-debt, unit-test]
term: "Refactoring"
translation: "إعادة هيكلة الشيفرة"
pronunciation: "ريفاكتورينج"
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

## خطأ شائع

إعادة الهيكلة بلا اختبارات. إن لم تستطع إثبات أن السلوك لم يتغيّر فأنت تعيد الكتابة فقط.

## لا تخلطه مع

تعمل إعادة الهيكلة على تحسين البنية الداخلية دون تغيير السلوك الخارجي، بينما تتخلص عملية إعادة الكتابة من الشيفرة الحالية لبنائها من جديد بالكامل.

## قلها في العمل

- I will spend the afternoon refactoring this messy function to make it easier to read.
  - سأقضي فترة ما بعد الظهر في إعادة هيكلة هذه الدالة المعقدة لتسهيل قراءتها.
- Please ensure that all unit tests pass after completing the refactoring for this module.
  - يرجى التأكد من نجاح جميع اختبارات الوحدة بعد الانتهاء من إعادة هيكلة هذه الوحدة البرمجية.
