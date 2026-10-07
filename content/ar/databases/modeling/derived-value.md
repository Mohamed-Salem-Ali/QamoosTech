---
id: derived-value
category: databases
subcategory: modeling
level: intermediate
related: [normalization, denormalization, source-of-truth]
aliases: ["computed value", "computed column", "calculated field", "computed property"]
term: "Derived Value"
translation: "القيمة المشتقة"
pronunciation: "ديرايفد فاليو"
keywords: ["احسبها بدلاً من تخزينها", "محسوبة من أعمدة أخرى", "تجنب تكرار البيانات", "خاصية بدلاً من عمود", "المجموع يمكن حسابه", "قيمة لا يمكن أن تختلف", "calculate instead of store", "computed from other columns", "avoid duplicated data", "property instead of column", "total can be calculated", "value that cannot go out of sync"]
---

## التعريف

القيمة المشتقة (Derived Value) هي قيمة يمكنك حسابها من بيانات أخرى، فتحسبها عند الحاجة بدلاً من تخزينها. وهكذا لا تختلف أبداً عن مصدرها.

## أين تسمعه؟

في نمذجة البيانات، ونقاشات التطبيع، ومراجعات تزيل أعمدة تكرر المعلومات.

## أمثلة

- The number of turns is derived from the weeks and the payouts per week.
  - عدد الأدوار قيمة مشتقة من الأسابيع وعدد الدفعات في الأسبوع.
- We derive the unpaid status instead of saving it, so it can't go stale.
  - نشتق حالة "غير مدفوع" بدلاً من حفظها، فلا تصبح قديمة.

## خطأ شائع

تخزين قيمة يمكن حسابها. عندها يحمل مكانان الحقيقة وسيخطئ أحدهما في النهاية.

## لا تخلطه مع

عمود مخزّن مؤقتاً أو غير مطبَّع، يُخزَّن عمداً من أجل السرعة ويجب إبقاؤه محدّثاً.

## قلها في العمل

- Make that a derived value, not a column.
  - اجعل ذلك قيمة مشتقة وليس عموداً.
- If it can be computed, derive it.
  - إن أمكن حسابها فاشتقها.
