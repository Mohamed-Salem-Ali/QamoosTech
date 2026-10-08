---
id: input-validation
category: security
subcategory: application-security
level: beginner
related: [fail-fast, sql-injection, xss, taint-analysis]
tags: [python]
aliases: ["data validation", "validate input", "user input validation"]
term: "Input Validation"
translation: "التحقق من المدخلات"
pronunciation: "إنبوت فاليديشن"
keywords: ["فحص البيانات قبل قبولها", "رفض المدخلات السيئة", "لا تثق بمدخلات المستخدم أبداً", "فحص النوع والطول والمدى", "التحقق على الخادم", "قائمة السماح لا المنع", "check data before accepting", "reject bad input", "never trust user input", "type length range checks", "validate on the server", "allow list not block list"]
---

## التعريف

التحقق من المدخلات (Input Validation) يفحص أن البيانات من النوع والطول والمدى والصيغة المتوقعة قبل أن يقبلها البرنامج، ويرفض ما عدا ذلك.

## أين تسمعه؟

في قوائم الأمان، وتصميم الـ API، والنماذج، وأدوات الـ CLI، وكل تقرير خطأ عن بيانات غريبة.

## أمثلة

- Validate the amount is a positive number before saving it.
  - تحقق أن المبلغ رقم موجب قبل حفظه.
- Client-side checks are for convenience; the server must validate again.
  - فحوص العميل للراحة فقط؛ ويجب أن يتحقق الخادم مرة أخرى.
- The form rejects a birth date in the future before it reaches the server.
  - يرفض النموذج تاريخ ميلاد في المستقبل قبل أن يصل إلى الخادم.

## خطأ شائع

التحقق في المتصفح فقط. يستطيع أي شخص إرسال الطلبات مباشرة وتخطيه.

## لا تخلطه مع

الهروب أو الاستعلامات ذات المعاملات التي تحمي المخرجات وقاعدة البيانات. التحقق هو الطبقة الأولى وليس الوحيدة.

## قلها في العمل

- Add validation for the empty and negative cases.
  - أضف تحققاً للحالتين الفارغة والسالبة.
- Use an allow list of accepted values.
  - استخدم قائمة سماح بالقيم المقبولة.
