---
id: referential-transparency
category: programming
subcategory: functions-and-scope
level: intermediate
related: [pure-function, side-effect, memoization]
aliases: ["referentially transparent", "equational reasoning"]
term: "Referential Transparency"
translation: "الشفافية المرجعية"
pronunciation: "ريفرينشال ترانسبيرنسي"
keywords: ["استبدل الاستدعاء بقيمته", "نفس المدخل نفس النتيجة", "بلا حالة خفية", "خاصية في البرمجة الوظيفية", "آمن للتخزين المؤقت", "الاستدلال بالمساواة", "replace a call with its value", "same input same result", "no hidden state", "functional programming property", "safe to cache", "equational reasoning"]
---

## التعريف

يكون التعبير شفافاً مرجعياً (Referentially Transparent) إذا أمكن استبداله بنتيجته في أي مكان دون تغيير سلوك البرنامج. والدوال النقية لها هذه الخاصية.

## أين تسمعه؟

في نقاشات البرمجة الوظيفية، والحديث عن التخزين المؤقت والاختبار، ومقارنات Haskell ببايثون.

## أمثلة

- `add(2, 3)` can always be replaced by `5`, so it is referentially transparent.
  - يمكن دائماً استبدال `add(2, 3)` بـ `5` لذا هي شفافة مرجعياً.
- `random()` is not referentially transparent.
  - الدالة `random()` ليست شفافة مرجعياً.

## خطأ شائع

إخفاء ساعة أو متغير عام أو قراءة قاعدة بيانات داخل دالة تبدو نقية. عندها يغيّر استبدالها بقيمة السلوك.

## لا تخلطه مع

الدالة النقية وهي الصورة العملية للفكرة. أما الشفافية المرجعية فهي الخاصية التي تستدل بها.

## قلها في العمل

- That makes it safe to memoize.
  - هذا يجعل تخزين نتيجتها آمناً.
- Is this call referentially transparent?
  - هل هذا الاستدعاء شفاف مرجعياً؟
