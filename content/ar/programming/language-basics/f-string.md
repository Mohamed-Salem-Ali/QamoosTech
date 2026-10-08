---
id: f-string
category: programming
subcategory: language-basics
level: beginner
related: [type-conversion, data-type, variable]
tags: [python]
aliases: ["formatted string", "string interpolation"]
term: "f-string"
translation: "النص المنسّق"
pronunciation: "إف سترينج"
keywords: ["تنسيق النص بالمتغيرات", "f\"hello {name}\"", "استبدال المتغيرات داخل النص", "وضع متغير داخل نص", "تنسيق الأرقام داخل النص", "الطباعة مع المتغيرات", "format text with variables", "string interpolation python", "put variable inside string", "format numbers in string", "print with variables"]
---

## التعريف

الـ f-string نص في بايثون يبدأ بالحرف `f` ويقيّم التعبيرات داخل `{}` لبناء النص النهائي.

## أين تسمعه؟

في دروس بايثون ومراجعات الكود التي تستبدل طرق تنسيق النصوص الأقدم.

## أمثلة

- `f"Hello, {name}!"` puts the name into the greeting.
  - `f"Hello, {name}!"` تضع الاسم في التحية.
- `f"{price:,.2f}"` formats a number with commas and two decimals.
  - `f"{price:,.2f}"` تنسّق الرقم بفواصل ورقمين عشريين.
- Build the log line with an f-string that includes the number of rows.
  - ابنِ سطر السجل بـ f-string يتضمّن عدد الصفوف.

## خطأ شائع

بناء نصوص السجلات أو SQL من مدخلات المستخدم بـ f-string. في SQL استخدم المعاملات (parameters) دائماً.

## لا تخلطه مع

النص العادي الذي لا يحتوي مواضع بديلة ولا يقيّم ما بين الأقواس.

## قلها في العمل

- Use an f-string instead of concatenating with plus signs.
  - استخدم f-string بدلاً من الربط بعلامات الجمع.
- Format the amount in the f-string with two decimals.
  - نسّق المبلغ في الـ f-string برقمين عشريين.
