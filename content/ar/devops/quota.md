---
id: quota
category: devops
level: beginner
related: []
term: "Quota"
pronunciation: "كْوُوتَا"
translation: "حصة (Quota)"
keywords: ["الحد الأقصى للموارد السحابية","حصة التخزين السحابي المسموحة","زيادة حد الاستخدام المسموح","الحد الأقصى لطلبات واجهة البرمجة","حصة استهلاك الموارد","تجاوز الحد الأقصى للخدمة","الحد المخصص للتخزين","كيفية زيادة حصة الخدمات","cloud storage maximum limit","api request limit allocation","maximum resource usage cap","service limits in cloud","storage capacity allowance","request volume ceiling","resource usage restriction","increase service limit","maximum allowed consumption"]
---

## التعريف

حد أقصى تفرضه الشركات المزودة للخدمات السحابية على كمية الموارد التي يمكنك استهلاكها، مثل مساحة التخزين أو عدد طلبات واجهات البرمجة.

## أين تسمعه؟

في لوحات تحكم السحابة، ولوحات متابعة الفواتير، وعند إعداد البنية التحتية.

## أمثلة

- We hit our storage quota and cannot upload any more files to the bucket.
  - لقد وصلنا إلى حد حصة التخزين لدينا ولا يمكننا رفع المزيد من الملفات إلى مخزن (bucket).
- Please check the service quotas in the cloud dashboard before spinning up the cluster.
  - يرجى التحقق من حصص الخدمات في لوحة التحكم السحابية قبل تشغيل الـ cluster.

## خطأ شائع

الخلط بينها وبين تقييد المعدل (Rate Limiting)، فالحصة تتعلق بالسعة الإجمالية المسموحة، بينما يقيد الآخر سرعة إرسال الطلبات خلال فترة زمنية.

## لا تخلطه مع

غالباً ما يتم الخلط بين الحصة (Quota) والحد (Limit)؛ فالحصة تمثل إجمالي الموارد المخصصة لك، بينما يمثل الحد سقفاً صارماً يمنع أي إجراء إضافي بمجرد الوصول إليه.

## قلها في العمل

- I think we're hitting our API quota, so we might need to request an increase for the production environment.
  - أعتقد أننا وصلنا إلى حصة واجهة البرمجة (API quota)، لذا قد نحتاج إلى طلب زيادتها لبيئة الإنتاج.
- Please review the current resource quota settings to ensure they accommodate the projected growth for the next quarter.
  - يرجى مراجعة إعدادات حصة الموارد الحالية لضمان أنها تلبي النمو المتوقع للربع القادم.
