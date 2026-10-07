---
id: context-manager
category: programming
subcategory: errors-and-exceptions
level: intermediate
related: [exception, function, decorator]
tags: [python]
aliases: ["with statement", "context managers"]
term: "Context Manager"
translation: "مدير السياق"
pronunciation: "كونتكست مانجر"
keywords: ["جملة with", "فتح الملف وإغلاقه تلقائياً", "التنظيف حتى عند الخطأ", "‏__enter__ و __exit__", "وحدة contextlib", "إدارة الموارد بأمان", "with statement", "open file and close automatically", "cleanup even on error", "__enter__ and __exit__", "contextlib", "manage resources safely"]
---

## التعريف

مدير السياق (Context Manager) يهيّئ شيئاً عند بدء كتلة `with` وينظّفه دائماً عند انتهائها، حتى لو حدث خطأ.

## أين تسمعه؟

في كود بايثون الذي يفتح ملفات أو اتصالات قاعدة بيانات أو أقفالاً، وعند شرح جملة `with`.

## أمثلة

- `with open(path) as f:` closes the file automatically.
  - `with open(path) as f:` يغلق الملف تلقائياً.
- We wrote a context manager that restores the setting after the test.
  - كتبنا context manager يعيد الإعداد بعد الاختبار.

## خطأ شائع

فتح مورد دون `with` ونسيان إغلاقه عند حدوث خطأ.

## لا تخلطه مع

كتلة `try / finally` التي تؤدي تنظيفاً مشابهاً يدوياً. أما مدير السياق فيغلّفه ليُعاد استخدامه.

## قلها في العمل

- Wrap that in a `with` block so it always closes.
  - غلّف ذلك في كتلة `with` لتُغلق دائماً.
- Make it a context manager so the cleanup can't be forgotten.
  - اجعله context manager حتى لا يُنسى التنظيف.
