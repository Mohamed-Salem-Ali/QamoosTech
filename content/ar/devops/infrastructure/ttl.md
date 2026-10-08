---
id: ttl
category: devops
subcategory: infrastructure
level: beginner
related: [dns-record, cache-hit-and-miss, cdn]
aliases: []
term: "TTL (Time To Live)"
translation: "مدة الصلاحية"
pronunciation: "تي تي إل"
keywords: ["كم تُحفظ القيمة", "مدة تخزين DNS", "ثوانٍ حتى انتهاء الصلاحية", "خفض TTL قبل الترحيل", "تنتهي بعد", "‏TTL لمفتاح Redis", "how long to keep a value", "dns cache duration", "cache expiry seconds", "lower ttl before migration", "expires after", "redis key ttl"]
---

## التعريف

مدة الصلاحية (TTL) هي المدة التي يُسمح فيها بإبقاء بيانات في ذاكرة مؤقتة قبل أن تُجلب من جديد. سجل DNS بمدة 3600 يمكن تخزينه ساعة.

## أين تسمعه؟

في إعدادات DNS، وقواعد التخزين المؤقت في CDN وRedis، وقبل ترحيل موقع.

## أمثلة

- Lower the TTL to 300 a day before we switch servers.
  - اخفض الـ TTL إلى 300 قبل يوم من تبديل الخوادم.
- The Redis key expires after its TTL.
  - ينتهي مفتاح Redis بعد مدة صلاحيته.
- The session cache uses a TTL of 30 minutes, so old sessions expire on their own.
  - تستخدم ذاكرة الجلسات المؤقتة مدة TTL قدرها 30 دقيقة، فتنتهي الجلسات القديمة وحدها.

## خطأ شائع

ترك TTL طويل قبل تغيير. يحتفظ بعض المستخدمين بالقيمة القديمة لساعات بعد التبديل.

## لا تخلطه مع

إبطال الذاكرة المؤقتة الذي يزيل عنصراً عمداً. أما TTL فانتهاء تلقائي بالوقت.

## قلها في العمل

- What TTL are we using?
  - ما الـ TTL الذي نستخدمه؟
- Set a short TTL for records that might change.
  - حدد TTL قصيراً للسجلات التي قد تتغير.
