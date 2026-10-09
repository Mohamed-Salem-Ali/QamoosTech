---
id: mutable-default-argument
category: programming
subcategory: functions-and-scope
level: intermediate
related: [function, parameter-vs-argument, immutable]
tags: [python]
aliases: ["mutable default", "default argument bug"]
term: "Mutable Default Argument"
translation: "القيمة الافتراضية القابلة للتعديل"
pronunciation: "ميوتابل ديفولت أرجيومنت"
keywords: ["خطأ استخدام قائمة كقيمة افتراضية", "القائمة الافتراضية مشتركة بين الاستدعاءات", "فخ بايثون مع القيم الافتراضية", "def f(x, items=[])", "استخدام None كقيمة افتراضية", "الدالة تتذكر بيانات الاستدعاء السابق", "حالة مشتركة غير متوقعة", "سؤال مقابلات بايثون كلاسيكي", "list as default parameter bug", "default list shared between calls", "python gotcha default argument", "use none as default", "function remembers previous call data", "unexpected shared state", "classic python interview question"]
---

## التعريف

القيمة الافتراضية القابلة للتعديل هي قيمة افتراضية مثل قائمة أو قاموس فارغ. تنشئها بايثون مرة واحدة عند تعريف الدالة، فتشترك كل الاستدعاءات في الكائن نفسه.

## أين تسمعه؟

في مقابلات بايثون، ومراجعات الكود، وعند البحث عن خطأ تظهر فيه بيانات استدعاء في الاستدعاء التالي.

## أمثلة

- The bug was a mutable default argument: every call kept appending to the same list.
  - كان الخطأ قيمة افتراضية قابلة للتعديل: كل استدعاء كان يضيف إلى القائمة نفسها.
- Use `None` as the default and create the list inside the function.
  - استخدم `None` كقيمة افتراضية وأنشئ القائمة داخل الدالة.
- The function appended to a default list created once, so old items leaked into new calls.
  - أضافت الدالة إلى قائمة افتراضية أُنشئت مرة واحدة، فتسرّبت العناصر القديمة إلى الاستدعاءات الجديدة.

## خطأ شائع

كتابة `def add(item, bucket=[])` وتوقع قائمة جديدة في كل مرة. استخدم `bucket=None` وأنشئ القائمة داخل الدالة.

## لا تخلطه مع

قيمة افتراضية غير قابلة للتعديل مثل رقم أو نص، وهي آمنة لأنها لا تتغير في مكانها.

## قلها في العمل

- That's the mutable default argument trap; switch the default to None.
  - هذا فخ القيمة الافتراضية القابلة للتعديل؛ غيّر القيمة الافتراضية إلى None.
- Our linter flags mutable defaults, so please fix it.
  - أداة الفحص لدينا تنبّه على القيم الافتراضية القابلة للتعديل، فأرجو إصلاحها.
