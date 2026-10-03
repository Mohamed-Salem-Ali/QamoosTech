---
id: retry-logic
category: architecture
level: beginner
related: [idempotency, exception]
term: "Retry Logic"
pronunciation: "ري-تراي لوجيك"
---

## التعريف

هي نمط برمجي يقوم بإعادة تنفيذ عملية معينة تلقائياً بعد فشلها. تُستخدم عادةً للتعامل مع الأخطاء المؤقتة، مثل انقطاع الاتصال بالشبكة أو عدم توفر الخدمة لفترة قصيرة.

## أين تسمعه؟

في النقاشات حول مرونة الأنظمة (resilience)، والتعامل مع واجهات البرمجة (APIs)، وحل مشاكل عدم استقرار الشبكة.

## أمثلة

- We implemented retry logic to handle intermittent database connection drops.
  - قمنا بتطبيق Retry Logic للتعامل مع انقطاعات الاتصال المتقطعة بقاعدة البيانات.
- The service uses retry logic with exponential backoff to avoid overwhelming the server.
  - تستخدم الخدمة Retry Logic مع تقنية التراجع الأسي (exponential backoff) لتجنب إرهاق الخادم.

## خطأ شائع

تطبيق Retry Logic على عمليات لا تحقق خاصية الـ idempotency (non-idempotent)، مما قد يؤدي إلى تكرار البيانات أو حدوث تعارض في حالة النظام.

## لا تخلطه مع

غالباً ما يتم الخلط بين Retry Logic والحلقات التكرارية (loops)، لكن Retry Logic مصممة خصيصاً للتعامل مع الأخطاء المؤقتة مع وجود تأخير أو شروط، بينما تقوم الحلقة التكرارية بتكرار الإجراء بغض النظر عن النجاح أو الفشل.

## قلها في العمل

- Let's add some retry logic to this API call so it doesn't fail immediately if the network blips.
  - دعونا نضيف بعض الـ Retry Logic لطلب الـ API هذا حتى لا يفشل فوراً في حال حدوث تذبذب في الشبكة.
- I have updated the service to include retry logic with a maximum of three attempts to ensure better stability.
  - لقد قمت بتحديث الخدمة لتتضمن Retry Logic بحد أقصى ثلاث محاولات لضمان استقرار أفضل.
