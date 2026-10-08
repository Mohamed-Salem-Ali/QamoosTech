---
id: retry-logic
category: architecture
subcategory: reliability
level: beginner
related: [idempotency, exception, timeout]
term: "Retry Logic"
translation: "منطق إعادة المحاولة"
pronunciation: "ري-تراي لوجيك"
keywords: ["إعادة تنفيذ الطلبات الفاشلة","تكرار المحاولة عند الخطأ","معالجة أخطاء الشبكة المؤقتة","نمط إعادة المحاولة التلقائية","إعادة إرسال طلبات api","تجاوز انقطاع الاتصال المؤقت","آلية إعادة المحاولة","إعادة تنفيذ العمليات المتقطعة","ريتراي لوجيك","تكرار العملية عند الفشل","automatically repeat failed requests","handle transient network errors","re-attempt failed api calls","exponential backoff implementation","resilience pattern for failures","retry mechanism for services","try again after failure","automatic operation recovery","handle temporary service downtime","retry logic pattern"]
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
- The retry logic tries the payment call three times before it shows an error.
  - يحاول منطق إعادة المحاولة استدعاء الدفع ثلاث مرات قبل أن يعرض خطأً.

## خطأ شائع

تطبيق Retry Logic على عمليات لا تحقق خاصية الـ idempotency (non-idempotent)، مما قد يؤدي إلى تكرار البيانات أو حدوث تعارض في حالة النظام.

## لا تخلطه مع

غالباً ما يتم الخلط بين Retry Logic والحلقات التكرارية (loops)، لكن Retry Logic مصممة خصيصاً للتعامل مع الأخطاء المؤقتة مع وجود تأخير أو شروط، بينما تقوم الحلقة التكرارية بتكرار الإجراء بغض النظر عن النجاح أو الفشل.

## قلها في العمل

- Let's add some retry logic to this API call so it doesn't fail immediately if the network blips.
  - دعونا نضيف بعض الـ Retry Logic لطلب الـ API هذا حتى لا يفشل فوراً في حال حدوث تذبذب في الشبكة.
- I have updated the service to include retry logic with a maximum of three attempts to ensure better stability.
  - لقد قمت بتحديث الخدمة لتتضمن Retry Logic بحد أقصى ثلاث محاولات لضمان استقرار أفضل.
