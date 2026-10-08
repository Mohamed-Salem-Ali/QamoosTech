---
id: cdn
category: devops
subcategory: infrastructure
level: beginner
related: [cache-hit-and-miss, ttl, reverse-proxy]
aliases: ["edge location", "edge", "point of presence", "pop"]
term: "CDN (Content Delivery Network)"
translation: "شبكة توصيل المحتوى"
pronunciation: "سي دي إن"
keywords: ["خوادم قريبة من المستخدمين", "تخزين الصور والسكربتات عالمياً", "‏Cloudflare وCloudFront", "موقع الحافة", "تحميل صفحات أسرع", "توصيل الملفات الثابتة", "servers close to users", "cache images and scripts worldwide", "cloudflare cloudfront", "edge location", "faster page loads", "static files delivery"]
---

## التعريف

شبكة توصيل المحتوى (CDN) شبكة خوادم حول العالم تحتفظ بنسخ من محتواك (صور وسكربتات وصفحات) وتخدم كل زائر من أقرب خادم، فتتحمل الصفحات أسرع ويقل الضغط على خادمك الأصلي.

## أين تسمعه؟

في إعدادات Cloudflare وAWS CloudFront وVercel، وتدقيقات الأداء، وأخطاء التخزين المؤقت ("ما زلت أرى النسخة القديمة").

## أمثلة

- Put the images behind a CDN so Cairo users get them from a nearby edge.
  - ضع الصور خلف CDN ليحصل مستخدمو القاهرة عليها من حافة قريبة.
- Purge the CDN cache after deploying.
  - امسح ذاكرة CDN المؤقتة بعد النشر.
- Product images load faster in Cairo once they are served from the CDN.
  - تُحمَّل صور المنتجات أسرع في القاهرة بعد تقديمها من شبكة CDN.

## خطأ شائع

نسيان أن الحواف تخزن مؤقتاً. بعد التحديث قد يرى المستخدمون ملفات قديمة حتى تُمسح الذاكرة أو تنتهي.

## لا تخلطه مع

الوكيل العكسي الذي يقف أمام خادمك. أما الـ CDN فمجموعة عالمية من الوكلاء كثيفة التخزين المؤقت.

## قلها في العمل

- Is it served from the CDN?
  - هل تُخدم من الـ CDN؟
- Cache static assets at the edge for a year.
  - خزّن الأصول الثابتة عند الحافة لمدة سنة.
