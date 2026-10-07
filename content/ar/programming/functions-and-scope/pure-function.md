---
id: pure-function
category: programming
subcategory: functions-and-scope
level: intermediate
related: [side-effect, function, immutable]
aliases: ["pure functions"]
term: "Pure Function"
translation: "الدالة النقية"
pronunciation: "بيور فنكشن"
keywords: ["نفس المدخل نفس المخرج", "دالة بلا آثار جانبية", "دالة سهلة الاختبار", "بلا حالة عامة", "دالة حتمية", "أساسيات البرمجة الوظيفية", "same input same output", "function without side effects", "easy to test function", "no global state", "deterministic function", "functional programming basics"]
---

## التعريف

الدالة النقية (Pure Function) تعيد دائماً النتيجة نفسها للمدخلات نفسها ولا تغيّر أي شيء خارجها.

## أين تسمعه؟

في أحاديث البرمجة الوظيفية، ومراجعات الكود حول قابلية الاختبار، وعند فصل المنطق عن الإدخال والإخراج.

## أمثلة

- The payout calculation is a pure function, so testing it is easy.
  - حساب الدفعة دالة نقية، لذا اختبارها سهل.
- Keep the logic pure and put printing and file access in a thin outer layer.
  - أبقِ المنطق نقياً وضع الطباعة والوصول إلى الملفات في طبقة خارجية رقيقة.

## خطأ شائع

إخفاء أثر جانبي داخل دالة تبدو نقية، مثل قراءة الساعة أو متغير عام.

## لا تخلطه مع

الدالة ذات الآثار الجانبية التي قد تقرأ أو تغيّر أشياء خارجها مثل الملفات والشبكة والحالة العامة.

## قلها في العمل

- Make this a pure function and pass the date in as an argument.
  - اجعلها دالة نقية ومرّر التاريخ كوسيط.
- Pure functions are trivial to unit test.
  - الدوال النقية سهلة جداً في اختبار الوحدة.
