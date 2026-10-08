---
id: ndjson
category: web-apis
subcategory: data-formats
level: intermediate
related: [json, csv, lazy-evaluation]
aliases: ["newline-delimited JSON"]
term: "NDJSON"
translation: "JSON مفصول بأسطر"
pronunciation: "إن دي جيسون"
keywords: ["JSON مفصول بأسطر جديدة", "كائن JSON في كل سطر", "بث سجلات JSON", "صيغة JSON Lines", "newline delimited json", "one json object per line", "stream json records", "log file in json lines", "jsonl format"]
---

## التعريف

صيغة فيها كائن JSON صالح في كل سطر، مفصولة بأحرف سطر جديد. تتيح للبرامج قراءة ملفات كبيرة أو تدفقات سجلاً تلو الآخر، دون تحميل كل شيء في الذاكرة.

## أين تسمعه؟

في تصدير البيانات الكبيرة، وخطوط السجلات، وواجهات الاستيراد الجماعي.

## أمثلة

- Each line of the export is one order in NDJSON.
  - كل سطر في التصدير طلب واحد بصيغة NDJSON.
- Read the file line by line so it never fits fully in memory.
  - اقرأ الملف سطراً سطراً حتى لا يدخل كله في الذاكرة أبداً.

## خطأ شائع

التعامل مع ملف NDJSON كمصفوفة JSON واحدة كبيرة. يجب تحليل كل سطر على حدة.

## لا تخلطه مع

NDJSON يحمل سجلاً واحداً في كل سطر، أما مصفوفة JSON فتحمل كل السجلات داخل قوسين واحدين.
