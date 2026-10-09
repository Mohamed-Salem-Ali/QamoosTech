---
id: graceful-degradation
category: architecture
subcategory: reliability
level: intermediate
related: [single-point-of-failure, health-check, rollback]
term: "Graceful Degradation"
pronunciation: "جريسفول ديجراديشن"
translation: "التدهور التدريجي"
keywords: ["التدهور التدريجي","الحفاظ على الوظائف الأساسية عند التعطل","منع انهيار النظام بالكامل","العمل حتى عند سقوط الخدمات","التعامل مع تعطل المكونات الخارجية","تخفيف الميزات عند ضعف الأداء","التحول إلى الميزات البسيطة","جريسفول ديجراديشن","تصميم الأنظمة القابلة للتحمل","keep working when service fails","handle component failure without crashing","maintain core functionality during outage","fall back to basic features","prevent total system crash","degrade gracefully under load","fallback when api fails","partial failure handling","gresful degradation","progressive enhancement vs degradation"]
---

## التعريف

هو نمط تصميم هندسي يسمح للنظام بالحفاظ على وظائفه الأساسية عند تعطل أحد المكونات أو الخدمات الخارجية، بدلاً من توقف التطبيق بالكامل.

## أين تسمعه؟

- في اجتماعات مراجعة التصميم الهندسي
- عند مناقشة موثوقية الأنظمة وقدرتها على التحمل
- أثناء تحليلات ما بعد الأعطال

## أمثلة

- If the recommendation service is down, the e-commerce app displays standard items instead of crashing.
  - إذا توقفت خدمة التوصيات، يعرض تطبيق التجارة الإلكترونية المنتجات العادية بدلاً من الانهيار.
- The web app hides advanced animations when the browser's performance drops.
  - يقوم تطبيق الويب بإخفاء الرسوم المتحركة المتقدمة عندما ينخفض أداء المتصفح.
- When the search index is slow, the site shows the category list instead of an error.
  - حين يكون فهرس البحث بطيئاً، يعرض الموقع قائمة الفئات بدلاً من رسالة خطأ.

## خطأ شائع

الخلط بينه وبين مفهوم fail-open، حيث يتعلق الأخير بالتحكم في الصلاحيات والأمان وليس بالوظائف العامة لتجربة المستخدم.

## لا تخلطه مع

غالباً ما يتم الخلط بين التدهور التدريجي وprogressive enhancement؛ فبينما يبدأ التدهور التدريجي بكامل الميزات ثم يقلصها للأنظمة الأقدم، يبدأ التحسين التدريجي بالوظائف الأساسية ويضيف ميزات متقدمة للمتصفحات القادرة على دعمها.

## قلها في العمل

- We should implement graceful degradation here so the user can still browse products even if the search index is temporarily unavailable.
  - يجب علينا تطبيق التدهور التدريجي هنا حتى يتمكن المستخدم من تصفح المنتجات حتى لو كان مؤشر البحث غير متاح مؤقتاً.
- Please ensure the UI supports graceful degradation by displaying cached data if the real-time API call fails.
  - يرجى التأكد من أن واجهة المستخدم تدعم التدهور التدريجي من خلال عرض البيانات المخزنة مؤقتاً في حال فشل استدعاء واجهة برمجة التطبيقات المباشر.
