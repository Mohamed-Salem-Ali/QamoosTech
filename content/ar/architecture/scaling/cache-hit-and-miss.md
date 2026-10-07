---
id: cache-hit-and-miss
category: architecture
subcategory: scaling
level: beginner
related: [cache, cache-aside, cache-stampede]
aliases: ["cache hit", "cache miss", "hit ratio", "hit rate"]
term: "Cache Hit and Miss"
translation: "إصابة الذاكرة المؤقتة وإخفاقها"
pronunciation: "كاش هيت أند ميس"
keywords: ["وُجد في الذاكرة المؤقتة", "لم يوجد في الذاكرة المؤقتة", "نسبة الإصابة", "فعالية الذاكرة المؤقتة", "المسار السريع والمسار البطيء", "نسبة الإصابات", "found in the cache", "not found in cache", "hit ratio", "cache effectiveness", "fast path and slow path", "percentage of hits"]
---

## التعريف

إصابة الذاكرة المؤقتة (Cache Hit) تعني أن البيانات المطلوبة وُجدت فيها وقُدمت بسرعة. والإخفاق (Cache Miss) يعني أنها لم تُوجد فيُجلب الطلب من المصدر الأبطأ. ونسبة الإصابة هي حصة الإصابات.

## أين تسمعه؟

في لوحات CDN وRedis، ومراجعات الأداء، ونقاشات جدوى التخزين المؤقت.

## أمثلة

- Our hit ratio is 95%, so the database barely notices the traffic.
  - نسبة الإصابة 95% فلا تكاد قاعدة البيانات تلاحظ الزيارات.
- A cold cache means every request is a miss.
  - الذاكرة المؤقتة الباردة تعني أن كل طلب إخفاق.

## خطأ شائع

النظر إلى نسبة الإصابة فقط. ذاكرة بنسبة عالية وبيانات قديمة ما زالت تخذل المستخدمين.

## لا تخلطه مع

اندفاع الذاكرة المؤقتة (Stampede) حيث تضرب إخفاقات كثيرة للمفتاح نفسه قاعدة البيانات دفعة واحدة.

## قلها في العمل

- What's the cache hit ratio?
  - ما نسبة إصابة الذاكرة المؤقتة؟
- Misses spike right after every deploy.
  - ترتفع الإخفاقات بعد كل نشر مباشرة.
