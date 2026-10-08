---
id: try-except
category: programming
subcategory: errors-and-exceptions
level: beginner
related: [exception, eafp-vs-lbyl, context-manager, error-code, custom-exception]
aliases: ["try-catch"]
term: "Try-Except Block"
translation: "كتلة try-except"
pronunciation: "تراي إكسبت بلوك"
keywords: ["التقاط الاستثناء في بايثون", "معالجة الأخطاء بـ try", "صيغة try و except", "التقاط الخطأ والاستمرار", "catch an exception in python", "handle errors with try", "try and except syntax", "catch error and continue", "try catch in other languages"]
---

## التعريف

بنية في الشيفرة تشغّل الشيفرة الخطرة داخل كتلة try، وتعالج خطأً محدداً داخل كتلة except، فيستطيع البرنامج التعافي بدلاً من التعطل.

## أين تسمعه؟

في شيفرة بايثون، ومراجعات معالجة الأخطاء، والشيفرة التي تتعامل مع الملفات أو الشبكات أو مدخلات المستخدم.

## أمثلة

- Wrap the file read in try and catch only FileNotFoundError.
  - ضع قراءة الملف داخل try والتقط FileNotFoundError فقط.
- Do not use a bare except, because it hides real bugs.
  - لا تستخدم except بلا نوع، لأنها تخفي الأخطاء الحقيقية.
- The try-except block catches a ValueError when the user types letters into the age field.
  - تلتقط كتلة try-except الاستثناء ValueError حين يكتب المستخدم حروفاً في حقل العمر.

## خطأ شائع

التقاط كل الاستثناءات بـ except بلا نوع ثم تجاهلها. يستمر البرنامج ببيانات خاطئة دون أن يرى أحد الخطأ.

## لا تخلطه مع

كتلة try-except تعالج الأخطاء التي تحدث أثناء التشغيل، أما خطأ الصياغة فخطأ في الشيفرة يمنعها من العمل أصلاً.
