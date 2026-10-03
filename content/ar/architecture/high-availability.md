---
id: high-availability
category: architecture
level: beginner
related: [load-balancer, single-point-of-failure, health-check]
term: "High Availability (HA)"
pronunciation: "هاي أفيلابيليتي"
translation: "التوافر العالي"
keywords: ["ضمان استمرار عمل النظام","تقليل وقت توقف الخدمة","منع توقف النظام كليا","تصميم انظمة لا تتوقف","كيفية تجنب اعطال الخوادم","بنية تحتية بدون توقف","مفهوم التوفر العالي","تجاوز اعطال الخوادم تلقائيا","هاي افيلابيليتي","ضمان جاهزية الخدمة دائما","ensure system stays online","prevent service downtime","eliminate single point failure","keep servers running constantly","always on system design","server redundancy architecture","fault tolerant system setup","how to avoid outages","ha configuration","continuous uptime design"]
---

## التعريف

يُشير التوافر العالي إلى تصميم الأنظمة بطريقة تضمن استمرارية عملها وتقليل وقت التوقف قدر الإمكان، وعادةً يتم ذلك عبر إزالة نقاط الفشل الفردية لضمان بقاء الخدمات متاحة حتى لو تعطل خادم أو مكون معين.

## أين تسمعه؟

- في اجتماعات التخطيط للبنية التحتية
- في نقاشات اتفاقيات مستوى الخدمة
- أثناء مراجعة التصميم الهندسي

## أمثلة

- We need to configure a load balancer to achieve high availability across our server instances.
  - نحتاج إلى ضبط موزّع الأحمال لتحقيق التوافر العالي عبر مثيلات الخوادم الخاصة بنا.
- The database cluster is set up for high availability with automated failover.
  - تم إعداد مجموعة قواعد البيانات لضمان التوافر العالي مع خاصية التبديل التلقائي عند التعطل.

## خطأ شائع

الخلط بين التوافر العالي وقابلية التوسع، واعتقاد أن النظام القادر على التعامل مع حركة مرور أكبر محصن تلقائياً ضد أعطال الأجهزة.

## لا تخلطه مع

يختلف التوافر العالي عن التعافي من الكوارث في أن التوافر العالي يركز على إبقاء النظام يعمل أثناء الأعطال البسيطة، بينما يركز التعافي من الكوارث على استعادة العمليات بعد وقوع حدث كارثي.

## قلها في العمل

- We should check if our current architecture meets the high availability requirements for this new service.
  - يجب أن نتحقق مما إذا كانت بنيتنا الحالية تلبي متطلبات التوافر العالي لهذه الخدمة الجديدة.
- Please update the documentation to reflect the high availability configuration of the production cluster.
  - يرجى تحديث الوثائق لتعكس إعدادات التوافر العالي الخاصة بمجموعة خوادم الإنتاج.
