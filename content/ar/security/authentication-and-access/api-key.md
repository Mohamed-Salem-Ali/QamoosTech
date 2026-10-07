---
id: api-key
category: security
subcategory: authentication-and-access
level: beginner
related: [authentication-vs-authorization, jwt, oauth]
term: "API Key"
pronunciation: "إي بي كي"
translation: "مفتاح واجهة برمجة التطبيقات"
keywords: ["رمز سري للوصول للخدمة","مفتاح تفعيل واجهة البرمجة","رمز تعريف التطبيق للخدمة","كيفية ربط التطبيق بالخادم","مفتاح المصادقة على الطلبات","رمز سري لطلبات الاتصال","إي بي كي","مفتاح دخول المطورين","رمز تعريف المشروع للخدمة","طريقة تعريف التطبيق برمجيا","unique token for backend access","secret string for api authentication","how to identify my application","service provider access code","api secret token","application identification string","request header authentication token","api access credential","how to authorize api calls","secure key for service connection"]
---

## التعريف

مفتاح واجهة برمجة التطبيقات هو رمز سري فريد يُرسل ضمن طلبات HTTP للتعرف على التطبيق أو المشروع الذي يستدعي الخدمة.

## أين تسمعه؟

في نقاشات ربط الأنظمة الخلفية، ولوحات تحكم إعدادات المطورين، وإعدادات الأمان.

## أمثلة

- Include the API key in the request header to authenticate your weather service calls.
  - ضمّن مفتاح واجهة برمجة التطبيقات في ترويسة الطلب لمصادقة طلبات خدمة الطقس الخاصة بك.
- Never expose your secret API key in frontend client code.
  - لا تكشف أبداً عن مفتاح واجهة برمجة التطبيقات السري الخاص بك في كود الواجهة الأمامية للعميل.

## خطأ شائع

التعامل مع مفتاح واجهة برمجة التطبيقات وكأنه كلمة مرور للمستخدم وتضمينه بشكل ثابت داخل مستودعات الكود العامة.

## لا تخلطه مع

الفرق بين مفتاح واجهة برمجة التطبيقات (API Key) ورمز الوصول (OAuth Token) هو أن المفتاح يعرّف المشروع المستدعي، بينما يمثل الرمز صلاحية مستخدم معين للوصول إلى بياناته.

## قلها في العمل

- Make sure to rotate your API key if you suspect it was accidentally committed to the repository.
  - تأكد من تغيير مفتاح واجهة برمجة التطبيقات الخاص بك إذا كنت تشك في أنه تم رفعه إلى المستودع عن طريق الخطأ.
- Please provide the API key for the staging environment so we can proceed with the integration tests.
  - يرجى تزويدنا بمفتاح واجهة برمجة التطبيقات الخاص ببيئة التجربة لنتمكن من المتابعة في اختبارات الربط.
