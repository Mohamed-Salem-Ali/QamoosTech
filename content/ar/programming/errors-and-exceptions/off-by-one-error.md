---
id: off-by-one-error
category: programming
subcategory: errors-and-exceptions
level: beginner
related: [exception, edge-case, unit-test]
aliases: ["off-by-one bug"]
term: "Off-by-One Error"
translation: "خطأ الفهرس بواحد"
pronunciation: "أوف باي وان إرور"
keywords: ["الفهرس أكبر بواحد", "الحلقة تدور مرة زائدة", "الفهرس خارج النطاق", "خطأ في الحدود", "index is one too high", "loop runs one time too many", "list index out of range", "fence post error", "boundary mistake in loop"]
---

## التعريف

خطأ يكون فيه الحلقة أو الفهرس أو العدّ أكبر بواحد أو أقل بواحد مما يجب، مثل التكرار حتى طول القائمة بدلاً من طولها ناقص واحد.

## أين تسمعه؟

في شيفرة الحلقات، ومنطق الترقيم بالصفحات، وتقارير الأخطاء مثل: «العنصر الأخير دائماً مفقود».

## أمثلة

- The loop went to len(items) and crashed on the last index.
  - وصلت الحلقة إلى طول القائمة وتعطلت عند الفهرس الأخير.
- Test the first and last element to catch an off-by-one error.
  - اختبر العنصر الأول والأخير لاكتشاف خطأ الفهرس بواحد.
- The page shows items 1 to 10 but skips item 11 because of an off-by-one error.
  - تعرض الصفحة العناصر من 1 إلى 10 وتتخطى العنصر 11 بسبب خطأ بمقدار واحد (off-by-one).

## خطأ شائع

إصلاح خطأ الفهرس بواحد بإضافة واحد أو حذفه حتى ينجح الاختبار. فكّر في الحدود بدلاً من ذلك.

## لا تخلطه مع

خطأ الفهرس بواحد خطأ في الحدود مقداره واحد بالضبط، أما الحالة الحدّية فهي مدخل غير معتاد يجب أن تتعامل معه الشيفرة.
