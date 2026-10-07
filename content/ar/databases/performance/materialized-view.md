---
id: materialized-view
category: databases
subcategory: performance
level: intermediate
related: [index, cache, query]
tags: [sql, postgresql]
aliases: ["materialised view", "matview"]
term: "Materialized View"
translation: "العرض المُجسَّد"
pronunciation: "ماتيريالايزد فيو"
keywords: ["نتيجة استعلام محفوظة", "تقرير محسوب مسبقاً", "تحديث العرض المجسد", "أسرع من تنفيذ الاستعلام", "قديم حتى التحديث", "عرض Postgres مخزن على القرص", "saved query result", "precomputed report", "refresh materialized view", "faster than running the query", "stale until refreshed", "postgres view stored on disk"]
---

## التعريف

العرض المُجسَّد (Materialized View) يخزن نتيجة استعلام على القرص فتكون القراءة سريعة، وتحدّثه عندما تتغير البيانات الأصلية. أما العرض العادي فيعيد تنفيذ استعلامه في كل مرة.

## أين تسمعه؟

في PostgreSQL والمستودعات التحليلية، ولوحات المتابعة فوق التقارير الثقيلة، وحلول "هذا التقرير بطيء جداً".

## أمثلة

- The leaderboard reads from a materialized view refreshed every 5 minutes.
  - تقرأ لوحة المتصدرين من عرض مجسد يُحدَّث كل 5 دقائق.
- `REFRESH MATERIALIZED VIEW CONCURRENTLY` avoids blocking readers.
  - ‏`REFRESH MATERIALIZED VIEW CONCURRENTLY` يتجنب حجب القراء.

## خطأ شائع

نسيان أنه لقطة. حتى تحدّثه يعرض أرقاماً قديمة.

## لا تخلطه مع

العرض العادي الذي لا يخزن بيانات ويعرض النتيجة الحالية دائماً لكنه بطيء كاستعلامه.

## قلها في العمل

- Make that report a materialized view.
  - اجعل ذلك التقرير عرضاً مجسداً.
- When does the view get refreshed?
  - متى يُحدَّث العرض؟
