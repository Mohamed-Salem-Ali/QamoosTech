---
id: high-availability
category: architecture
level: beginner
related: [load-balancer, single-point-of-failure, health-check]
term: "High Availability (HA)"
pronunciation: "هاي أفيسابيليتي"
translation: "التوافر العالي"
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
