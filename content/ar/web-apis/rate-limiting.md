---
id: rate-limiting
category: web-apis
level: intermediate
related: [status-code, fail-open-vs-fail-closed]
term: "Rate Limiting"
translation: "تحديد معدل الطلبات"
pronunciation: "ريت ليميتينج"
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
