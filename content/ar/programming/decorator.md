---
id: decorator
category: programming
level: intermediate
related: [function]
term: "Decorator"
pronunciation: "ديكوريتر"
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
