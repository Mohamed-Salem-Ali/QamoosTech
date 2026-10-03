---
id: type-narrowing
category: programming
level: intermediate
related: [interface]
term: "Type Narrowing"
translation: "تضييق النوع"
pronunciation: "تايب ناروينج"
---
## التعريف

أن يستنتج TypeScript نوعًا أدق للقيمة بعد أن تفحصها، مثلًا باستخدام `typeof` أو `in`.

## أين تسمعه؟

مراجعة شيفرة TypeScript والنقاش حول سلامة الأنواع.

## أمثلة

- After `typeof value === "string"`, TypeScript narrows the type to `string`.
  - بعد `typeof value === "string"` يضيّق TypeScript النوع إلى `string`.
- Use a type guard to narrow the response before reading `data`.
  - استخدم type guard لتضييق نوع الاستجابة قبل قراءة `data`.

## خطأ شائع

استخدام `as` لفرض نوع معيّن. هذا يُسكت المترجم لكنه لا يمنحك أي أمان وقت التشغيل.
