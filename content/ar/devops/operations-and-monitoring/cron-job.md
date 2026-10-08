---
id: cron-job
category: devops
subcategory: operations-and-monitoring
level: beginner
related: [pipeline, monitoring, logging]
aliases: ["crontab", "cron", "scheduled task", "scheduler"]
term: "Cron Job"
translation: "المهمة المجدولة (Cron)"
pronunciation: "كرون جوب"
keywords: ["مهمة مجدولة", "تعمل كل ليلة الثانية صباحاً", "تعبير crontab", "صيغة النجوم الخمس", "سكربت دوري", "المجدول", "scheduled task", "run every night at 2am", "crontab expression", "five star syntax", "periodic script", "scheduler"]
---

## التعريف

المهمة المجدولة (Cron Job) مهمة تعمل تلقائياً في أوقات محددة، وتُعرَّف بتعبير cron مثل `0 2 * * *` (كل يوم في الثانية صباحاً).

## أين تسمعه؟

في خوادم لينكس، وCronJobs في Kubernetes، والمجدولات السحابية، وسكربتات النسخ الاحتياطي والتنظيف.

## أمثلة

- A cron job sends the weekly report every Monday at 8.
  - تُرسل مهمة مجدولة التقرير الأسبوعي كل اثنين الساعة 8.
- The cron job failed silently because nobody checked its logs.
  - فشلت المهمة المجدولة بصمت لأن أحداً لم يفحص سجلاتها.
- The cron job deletes expired sessions every night at midnight.
  - تحذف مهمة cron الجلسات المنتهية كل ليلة عند منتصف الليل.

## خطأ شائع

نسيان المناطق الزمنية والمراقبة. قد تعمل المهمة في ساعة خاطئة أو تفشل دون أن يلاحظ أحد؛ سجّلها ونبّه عليها.

## لا تخلطه مع

طابور العمال الخلفي الذي ينفذ المهام عند إطلاقها. أما cron فينفذها بحسب الساعة.

## قلها في العمل

- Add a cron job to clean up old files.
  - أضف مهمة مجدولة لتنظيف الملفات القديمة.
- What's the schedule expression?
  - ما تعبير الجدولة؟
