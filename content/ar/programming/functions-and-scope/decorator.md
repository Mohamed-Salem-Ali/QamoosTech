---
id: decorator
category: programming
subcategory: functions-and-scope
level: intermediate
related: [function, syntactic-sugar]
aliases: ["decorator factory", "wrapper function"]
term: "Decorator"
translation: "المُزخرِف"
pronunciation: "ديكوريتر"
keywords: ["تغليف الدوال لإضافة سلوك","إضافة خصائص للدالة برمجيا","تعديل سلوك الدالة ديناميكيا","استخدام الرمز ات في بايثون","إضافة صلاحيات للمسارات برمجيا","نمط تغليف الدوال البرمجي","توسيع وظائف الدوال الموجودة","طريقة إضافة كود قبل الدالة","مصطلح ديكوريتر في البرمجة","إضافة تسجيل دخول للمسارات","تعديل الدوال دون تغيير محتواها","تغليف الوظائف البرمجية","wrap function to add behavior","python at symbol syntax","modify function without changing code","add logging to existing functions","function wrapper pattern","add metadata to functions","dynamic function behavior modifier","typescript method wrapper","implementing cross cutting concerns","add authentication to routes","python function annotation","custom function extender"]
---
## التعريف

دالة تغلّف دالة أخرى لتضيف سلوكًا مثل التسجيل أو فحص الصلاحيات دون تعديل الشيفرة الأصلية.

## أين تسمعه؟

Python (`@login_required`)، وأطر TypeScript مثل NestJS، وفي الحديث عن الـ middleware.

## أمثلة

- Add `@login_required` so only signed-in users can open the page.
  - أضف `@login_required` ليتمكن المستخدمون المسجّلون فقط من فتح الصفحة.
- We wrote a decorator that logs how long each call takes.
  - كتبنا decorator يسجّل المدة التي يستغرقها كل استدعاء.

## خطأ شائع

في Python، نسيان `functools.wraps` فتفقد الدالة المغلّفة اسمها ووصفها.

## لا تخلطه مع

الـ decorator يغلّف دالة لتعديل سلوكها بشكل ديناميكي، بينما الـ inheritance تنشئ فئة فرعية جديدة لتوسيع الوظائف بشكل ثابت.

## قلها في العمل

- Can we write a custom decorator to handle the caching for these API endpoints?
  - هل يمكننا كتابة decorator مخصّص للتعامل مع التخزين المؤقت لهذه الـ API endpoints؟
- Please use the authentication decorator on the new routes to ensure proper access control.
  - يرجى استخدام decorator المصادقة على المسارات الجديدة لضمان التحكم الصحيح في الصلاحيات.
