---
id: full-table-scan
category: databases
subcategory: performance
level: intermediate
related: [index, explain-plan, query]
tags: [sql, postgresql]
aliases: ["seq scan", "sequential scan", "table scan", "query plan"]
term: "Full Table Scan"
translation: "المسح الكامل للجدول"
pronunciation: "فل تيبل سكان"
keywords: ["يقرأ كل الصفوف", "لا فهرس مستخدم", "المسح التسلسلي", "بطيء على الجداول الكبيرة", "‏EXPLAIN يعرض seq scan", "فهرس ناقص", "reads every row", "no index used", "seq scan", "slow on big tables", "explain shows seq scan", "missing index"]
---

## التعريف

المسح الكامل للجدول (Full Table Scan) يعني أن قاعدة البيانات تقرأ كل صفوف الجدول للإجابة عن استعلام لأنه لا فهرس مفيد تقفز به إلى الصفوف المطابقة.

## أين تسمعه؟

في مخرجات `EXPLAIN` (`Seq Scan`)، وتحقيقات الاستعلامات البطيئة، ومراجعات تصميم الفهارس.

## أمثلة

- The plan shows a sequential scan over 5 million rows.
  - تعرض الخطة مسحاً تسلسلياً على 5 ملايين صف.
- Add an index on `member_id` to avoid the full scan.
  - أضف فهرساً على `member_id` لتجنب المسح الكامل.

## خطأ شائع

افتراض أن كل مسح سيئ. في جدول صغير أو حين تحتاج معظم الصفوف يكون المسح الخيار الأسرع فعلاً.

## لا تخلطه مع

مسح الفهرس الذي يستخدم فهرساً للقفز إلى الصفوف المطلوبة.

## قلها في العمل

- Is it doing a full table scan?
  - هل يجري مسحاً كاملاً للجدول؟
- Run EXPLAIN ANALYZE and look for Seq Scan.
  - شغّل EXPLAIN ANALYZE وابحث عن Seq Scan.
