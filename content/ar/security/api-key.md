---
id: api-key
category: security
level: beginner
related: [authentication-vs-authorization, jwt, oauth]
term: "API Key"
pronunciation: "إي بي كي"
translation: "مفتاح واجهة برمجة التطبيقات"
---

## التعريف

مفتاح واجهة برمجة التطبيقات هو رمز سري فريد يُرسل ضمن طلبات HTTP للتعرف على التطبيق أو المشروع الذي يستدعي الخدمة.

## أين تسمعه؟

في نقاشات ربط الأنظمة الخلفية، ولوحات تحكم إعدادات المطورين، وإعدادات الأمان.

## أمثلة

- Include the API key in the request header to authenticate your weather service calls.
  - ضمّن مفتاح واجهة برمجة التطبيقات في ترويسة الطلب لتوثيق طلبات خدمة الطقس الخاصة بك.
- Never expose your secret API key in frontend client code.
  - لا تكشف أبداً عن مفتاح واجهة برمجة التطبيقات السري الخاص بك في كود الواجهة الأمامية للعميل.

## خطأ شائع

التعامل مع مفتاح واجهة برمجة التطبيقات وكأنه كلمة مرور للمستخدم وتضمينه بشكل ثابت داخل مستودعات الكود العامة.
