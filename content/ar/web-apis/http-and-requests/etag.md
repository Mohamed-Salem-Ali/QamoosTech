---
id: etag
category: web-apis
subcategory: http-and-requests
level: intermediate
related: [http-header, cache, status-code]
term: "ETag"
translation: "وسم الكيان"
pronunciation: "إي تاج"
keywords: ["معرّف نسخة الاستجابة", "طلب مشروط", "ترويسة If-None-Match", "لم يتغير 304", "version identifier for a response", "conditional request", "if-none-match header", "304 not modified", "cache validation header"]
---

## التعريف

ترويسة HTTP تعرّف نسخة من مورد ما. يعيدها العميل في طلب مشروط، فيرد الخادم بالرمز 304 Not Modified إذا لم يتغير شيء، وهذا يوفّر عرض النطاق.

## أين تسمعه؟

في ترويسات التخزين المؤقت في HTTP، وإعدادات شبكات التوصيل، وتتبع الاستجابات القديمة بشكل غير متوقع.

## أمثلة

- The server sends an ETag, and the browser sends it back on the next request.
  - يرسل الخادم ETag، ويعيدها المتصفح في الطلب التالي.
- A 304 response means the cached copy is still valid.
  - تعني الاستجابة 304 أن النسخة المخزنة ما زالت صالحة.

## خطأ شائع

توليد ETag يتغير مع كل طلب، فيُعطّل التخزين المؤقت ويهدر عرض النطاق.

## لا تخلطه مع

ETag يعرّف نسخة من المورد، أما الذاكرة المؤقتة (Cache) فهي المكان الذي تُخزَّن فيه النسخ.
