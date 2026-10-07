---
id: anonymous-function
category: programming
subcategory: functions-and-scope
level: beginner
related: [function, callback]
term: "Anonymous Function"
pronunciation: "أنونيموس فانكشن"
translation: "دالة مجهولة"
keywords: ["دالة بدون اسم","تعريف دالة داخلية","دالة استرجاعية مباشرة","دالة بلا اسم","طريقة تعريف دالة مجهولة","استخدام دالة كمعامل","دالة لامبدا","دالة مجهولة الهوية","تعريف دالة داخل متغير","دالة غير مسماة","function without a name","define function inline","pass logic as argument","lambda expression syntax","unnamed function definition","callback function inline","functional programming helper","anonymous function spelling","function assigned to variable","quick function definition"]
---

## التعريف

دالة يتم تعريفها بدون اسم، وعادة ما يُتعامل معها كقيمة، بحيث تُمرر مباشرة كمعامل أو تُسند إلى متغير.

## أين تسمعه؟

أثناء مراجعة الكود، أو عند الحديث عن الدوال الاسترجاعية (Callbacks) ومستمعات الأحداث.

## أمثلة

- We used an anonymous function as a callback for the click event.
  - استخدَمنا دالة مجهولة كدالة استرجاعية (callback) لحدث النقر.
- The sort method accepts an anonymous function to define custom ordering.
  - تقبل دالة الترتيب دالة مجهولة لتحديد ترتيب مخصص.

## خطأ شائع

الاعتقاد بأن الدوال المجهولة لا يمكنها استقبال معاملات، في حين أنها تستقبل المدخلات تماماً كالدوَال المسماة.

## لا تخلطه مع

الدالة المجهولة (Anonymous function) مقابل الدالة السهمية (Arrow function). في حين أن جميع الدوال السهمية هي دوال مجهولة، إلا أن الدوال المجهولة ليست بالضرورة دوالاً سهمية لأن الأخيرة لها قواعد خاصة في الصياغة والنطاق المعجمي.

## قلها في العمل

- I think we can just pass an anonymous function here instead of defining a separate helper function.
  - أعتقد أنه يمكننا تمرير دالة مجهولة هنا بدلاً من تعريف دالة مساعدة منفصلة.
- Please refactor this block to use an anonymous function for the filter criteria to improve readability.
  - يرجى إعادة صياغة هذا الجزء لاستخدام دالة مجهولة لمعايير التصفية لتحسين قابلية القراءة.
