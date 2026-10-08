---
id: csv
category: web-apis
subcategory: data-formats
level: beginner
related: [json, serialization, utf-8]
aliases: ["comma-separated values"]
term: "CSV"
translation: "القيم المفصولة بفواصل"
pronunciation: "سي إس في"
keywords: ["ملف قيم مفصولة بفواصل", "تصدير إلى جدول بيانات", "فتح ملف CSV في إكسل", "استيراد CSV", "comma separated values file", "export to spreadsheet", "open csv in excel", "tabular data text file", "csv import"]
---

## التعريف

صيغة نصية بسيطة للبيانات الجدولية، كل سطر فيها صف، والقيم في الصف مفصولة بفواصل. وهي بسيطة ومدعومة على نطاق واسع، لكنها لا تحدد أنواع البيانات ولا تدعم البيانات المتداخلة.

## أين تسمعه؟

في تصدير البيانات، وكشوف الحسابات البنكية، والاستيراد إلى جداول البيانات أو قواعد البيانات.

## أمثلة

- Export the orders as a CSV file for the accountant.
  - صدّر الطلبات كملف CSV للمحاسب.
- A comma inside a value must be quoted, or the columns shift.
  - يجب وضع الفاصلة داخل القيمة بين علامتي تنصيص، وإلا تنزاح الأعمدة.
- Open the CSV file in a spreadsheet to check that the first row holds the column names.
  - افتح ملف CSV في جدول بيانات للتأكّد من أن الصف الأول يحوي أسماء الأعمدة.

## خطأ شائع

تقسيم أسطر CSV على الفواصل يدوياً. قد تحتوي القيم المقتبسة على فواصل، لذا استخدم مكتبة CSV.

## لا تخلطه مع

CSV للجداول المسطحة فقط، أما JSON فيحمل بيانات متداخلة وقيماً ذات أنواع.
