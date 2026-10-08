---
id: horizontal-scaling
category: architecture
subcategory: scaling
level: beginner
related: [vertical-scaling, load-balancer, scalability]
aliases: ["scale out", "scaling out"]
term: "Horizontal Scaling"
translation: "التوسع الأفقي"
pronunciation: "هورايزنتال سكيلينج"
keywords: ["إضافة المزيد من الأجهزة", "التوسع بالعدد", "خوادم صغيرة كثيرة", "خلف موزّع أحمال", "استيعاب زيارات أكثر", "خوادم بلا حالة", "add more machines", "scale out", "many small servers", "behind a load balancer", "handle more traffic", "stateless servers"]
---

## التعريف

التوسع الأفقي (Horizontal Scaling) يعني استيعاب حمل أكبر بإضافة أجهزة أو نسخ أكثر، بدلاً من تكبير جهاز واحد.

## أين تسمعه؟

في تخطيط السعة، وإعدادات التوسع التلقائي في السحابة، ومقابلات النمو بالنظام.

## أمثلة

- We scaled out from 2 to 10 servers during the sale.
  - وسّعنا أفقياً من خادمين إلى عشرة أثناء التخفيضات.
- Horizontal scaling only works if the servers keep no local state.
  - لا ينجح التوسع الأفقي إلا إذا لم تحتفظ الخوادم بحالة محلية.
- We added two more app servers behind the load balancer during the holiday traffic.
  - أضفنا خادمين إضافيين للتطبيق خلف موزّع الأحمال خلال ذروة زيارات العطلة.

## خطأ شائع

إضافة خوادم بينما الجلسات أو الملفات على جهاز واحد. فلا تستطيع الخوادم الجديدة رؤية تلك البيانات.

## لا تخلطه مع

التوسع الرأسي الذي يكبّر جهازاً واحداً (معالج أو ذاكرة أكثر).

## قلها في العمل

- Can we scale this horizontally?
  - هل نستطيع توسيعه أفقياً؟
- Put a load balancer in front and add instances.
  - ضع موزّع أحمال أمامه وأضف نسخاً.
