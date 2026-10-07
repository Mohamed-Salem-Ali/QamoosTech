---
id: taint-analysis
category: security
subcategory: application-security
level: intermediate
related: [input-validation, sql-injection, xss]
aliases: ["static analysis", "sast", "source and sink", "tainted data"]
term: "Taint Analysis"
translation: "تحليل التلوث"
pronunciation: "تينت أناليسيس"
keywords: ["تتبع البيانات غير الموثوقة", "من المصدر إلى المصب", "اكتشاف الحقن تلقائياً", "اختبار الأمان بالتحليل الساكن", "مدخلات المستخدم تصل إلى قاعدة البيانات", "منقّي في المسار", "track untrusted data", "from source to sink", "find injection bugs automatically", "static analysis security testing", "user input reaches database", "sanitizer in the path"]
---

## التعريف

تحليل التلوث (Taint Analysis) يتتبع البيانات غير الموثوقة (المصدر كحقل نموذج) عبر الكود إلى أماكن خطرة (المصب كاستعلام SQL)، وينبّه إلى المسارات التي تصل فيها دون تنقية.

## أين تسمعه؟

في أدوات الأمان بالتحليل الساكن (CodeQL وSemgrep وBandit)، ومقررات البرمجة الآمنة، ومراجعات أخطاء الحقن.

## أمثلة

- The scanner shows a taint path from `request.GET` to `cursor.execute`.
  - يعرض الفاحص مسار تلوث من `request.GET` إلى `cursor.execute`.
- Add a sanitizer so the data is no longer tainted.
  - أضف منقّياً حتى لا تبقى البيانات ملوثة.

## خطأ شائع

الوثوق بفحص بلا نتائج. تفوّت الأدوات المسارات الديناميكية؛ اعتبره طبقة واحدة بجانب المراجعة والاختبارات.

## لا تخلطه مع

الفحص الأسلوبي الذي يتحقق من الأسلوب والأخطاء العامة. أما تحليل التلوث فيركّز على تدفق البيانات غير الموثوقة.

## قلها في العمل

- Does CodeQL flag any tainted flows?
  - هل يرصد CodeQL تدفقات ملوثة؟
- Mark the function as a sanitizer.
  - ضع علامة على الدالة كمنقّي.
