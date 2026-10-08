---
id: log-level
category: devops
subcategory: operations-and-monitoring
level: beginner
related: [logging, monitoring, alert-fatigue]
aliases: ["logging level"]
term: "Log Level"
translation: "مستوى السجل"
pronunciation: "لوغ ليفل"
keywords: ["تصحيح تحذير خطأ", "ضبط مستوى السجل على info", "سجلات تصحيح كثيرة", "خطورة رسالة السجل", "debug info warning error", "set log level to info", "too many debug logs", "severity of a log message", "logging levels"]
---

## التعريف

تصنيف خطورة رسالة السجل، مثل DEBUG أو INFO أو WARNING أو ERROR. يُخفي ضبط مستوى السجل الرسائل الأقل منه، فتبقى سجلات الإنتاج مفيدة وغير مزعجة.

## أين تسمعه؟

في ملفات إعداد التطبيق، ومكتبات السجلات، وعندما يُسأل: لماذا لا توجد سجلات تصحيح؟

## أمثلة

- Set the log level to INFO in production.
  - اضبط مستوى السجل على INFO في الإنتاج.
- Switch to DEBUG for one hour to trace the bug.
  - انتقل إلى DEBUG لمدة ساعة لتتبع الخطأ.
- At the WARNING level, the logs show problems but not every routine request.
  - عند مستوى WARNING تُظهر السجلات المشكلات دون كل طلب روتيني.

## خطأ شائع

تسجيل كل شيء بمستوى ERROR، أو إبقاء DEBUG مفعّلاً في الإنتاج. يخفي الاثنان المشكلات الحقيقية وسط الضجيج.

## لا تخلطه مع

مستوى السجل هو خطورة رسالة واحدة، أما التسجيل (Logging) فهو ممارسة تسجيل الأحداث عبر الزمن.
