---
id: rate-limiting
category: web-apis
subcategory: api-design
level: intermediate
related: [status-code, fail-open-vs-fail-closed]
term: "Rate Limiting"
translation: "تحديد معدل الطلبات"
pronunciation: "ريت ليميتينج"
keywords: ["منع المستخدمين من إرسال طلبات كثيرة","خطأ عدد الطلبات الكثيرة","تحديد عدد طلبات الـ api","حماية الخادم من الضغط","تحديد معدل الاستخدام","الحد الأقصى للطلبات","منع إساءة استخدام الـ api","ريت ليميتينج","تقنين الطلبات","stop users spamming my api","too many requests error","limit api requests per user","prevent api abuse","request throttling","api quota limits","block excessive requests","rate limiter","too many requests","protect server from overload"]
---
## التعريف

تحديد عدد الطلبات التي يستطيع مستخدم أو تطبيق إرسالها خلال فترة زمنية، لمنع إساءة الاستخدام وحماية الخادم.

## أين تسمعه؟

تصميم الـ API، ومراجعات الأمان، وأخطاء «429 Too Many Requests».

## أمثلة

- We apply rate limiting of 100 requests per minute per user.
  - نطبّق تحديد معدل بمقدار 100 طلب في الدقيقة لكل مستخدم.
- You hit the rate limit, so wait a minute and retry.
  - وصلتَ إلى الحد المسموح، فانتظر دقيقة ثم أعد المحاولة.

## خطأ شائع

التحديد حسب عنوان IP فقط. كثير من المستخدمين يشتركون في عنوان واحد، لذلك حدّد أيضًا حسب الحساب أو مفتاح الـ API.

## لا تخلطه مع

غالباً ما يتم الخلط بين تحديد معدل الطلبات (Rate limiting) والتقنين (Throttling)؛ فبينما يقيّد الأول عدد الطلبات خلال فترة زمنية، يتحكم الثاني تحديداً في سرعة تدفق البيانات أو المعالجة لإدارة النطاق الترددي.

## قلها في العمل

- We should implement rate limiting on the public endpoints to prevent our services from being overwhelmed by too many requests.
  - يجب أن نطبّق تحديد معدل الطلبات على نقاط النهاية العامة لمنع خدماتنا من التعرض لضغط زائد بسبب كثرة الطلبات.
- I have updated the API configuration to include stricter rate limiting, which should resolve the performance issues we observed during peak hours.
  - لقد قمت بتحديث إعدادات الـ API لتشمل تحديداً أكثر صرامة لمعدل الطلبات، مما سيؤدي إلى حل مشاكل الأداء التي لاحظناها خلال ساعات الذروة.
