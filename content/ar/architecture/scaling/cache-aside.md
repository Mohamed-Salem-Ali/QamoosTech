---
id: cache-aside
category: architecture
subcategory: scaling
level: intermediate
related: [cache, cache-hit-and-miss, write-through-cache]
aliases: ["lazy loading cache", "read-through cache"]
term: "Cache-Aside"
translation: "التخزين المؤقت الجانبي"
pronunciation: "كاش أسايد"
keywords: ["افحص الذاكرة المؤقتة أولاً", "حمّل من قاعدة البيانات عند الإخفاق", "التطبيق يدير الذاكرة المؤقتة", "تحميل كسول للذاكرة المؤقتة", "املأ الذاكرة عند القراءة", "أبطل عند الكتابة", "check the cache first", "load from database on miss", "app manages the cache", "lazy loading cache", "fill the cache on read", "invalidate on write"]
---

## التعريف

التخزين المؤقت الجانبي (Cache-Aside) نمط يفحص فيه التطبيق الذاكرة المؤقتة أولاً، وعند الإخفاق يحمّل من قاعدة البيانات ويحفظ النتيجة في الذاكرة المؤقتة للمرة القادمة.

## أين تسمعه؟

في أدلة استخدام Redis، ومقابلات تصميم الأنظمة، وإصلاحات الأداء لنقاط القراءة البطيئة.

## أمثلة

- On a miss we read from the database, then set the cache with a 5-minute TTL.
  - عند الإخفاق نقرأ من قاعدة البيانات ثم نخزنها في الذاكرة المؤقتة لمدة 5 دقائق.
- After an update we delete the cache key so it reloads.
  - بعد التحديث نحذف مفتاح الذاكرة المؤقتة ليُعاد تحميله.

## خطأ شائع

نسيان إبطال المفتاح عند الكتابة فيرى المستخدمون بيانات قديمة حتى ينتهي وقت الصلاحية.

## لا تخلطه مع

الكتابة المتزامنة (Write-Through) حيث تذهب كل كتابة إلى الذاكرة المؤقتة وقاعدة البيانات معاً.

## قلها في العمل

- Let's use cache-aside for the leaderboard.
  - لنستخدم cache-aside للوحة المتصدرين.
- Who invalidates the key on update?
  - من يبطل المفتاح عند التحديث؟
