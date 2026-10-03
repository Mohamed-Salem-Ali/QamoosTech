---
id: environment-variable
category: devops
level: beginner
related: [staging-vs-production, containerization]
term: "Environment Variable"
translation: "متغير بيئة"
pronunciation: "إنفايرونمنت فيريابل"
---
## التعريف

إعداد يُخزَّن خارج الشيفرة، مثل رابط قاعدة البيانات أو مفتاح API، لتستخدم كل بيئة قيمًا مختلفة.

## أين تسمعه؟

أدلة النشر وملفات `.env`.

## أمثلة

- Put the API key in an environment variable, not in the code.
  - ضع مفتاح الـ API في متغير بيئة لا في الشيفرة.
- The app crashed because `DATABASE_URL` was not set.
  - انهار التطبيق لأن `DATABASE_URL` لم يكن مضبوطًا.

## خطأ شائع

رفع ملف `.env` إلى Git. هذا يسرّب الأسرار لكل من يستطيع رؤية المستودع.
