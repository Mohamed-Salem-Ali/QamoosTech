---
id: idempotency
category: architecture
subcategory: reliability
level: intermediate
featured: 1
related: [webhook, message-queue, transaction]
term: "Idempotency"
translation: "الإيدمبوتنسي"
pronunciation: "آيدمبوتنسي"
keywords: ["منع خصم المبلغ مرتين","تكرار طلبات الـ api بأمان","تجنب معالجة الطلبات المكررة","التعامل مع إعادة المحاولة بأمان","منع دفع العميل مرتين","تنفيذ العملية عدة مرات بنفس النتيجة","إيدمبوتنسي","مفتاح لمنع التكرار في المدفوعات","prevent double payment on retry","safe to repeat api requests","same result when called multiple times","handle duplicate webhook events safely","idempotency key for payments","make api calls safe to retry","avoid processing duplicate orders","idemoptency","idempotent operations in architecture"]
---
## التعريف

خاصية في العملية: تنفيذها عدة مرات يعطي النتيجة نفسها كما لو نُفّذت مرة واحدة. وهذا يجعل إعادة المحاولة آمنة.

## أين تسمعه؟

المدفوعات، والـ webhooks، وإعادة المحاولة، والمهام الخلفية.

## أمثلة

- Send an idempotency key so retries cannot charge the customer twice.
  - أرسل idempotency key حتى لا تُحاسب العميل مرتين عند إعادة المحاولة.
- Make the job idempotent because the queue may deliver it twice.
  - اجعل المهمة idempotent لأن الـ queue قد تُرسلها مرتين.

## خطأ شائع

بناء endpoint للدفع بلا idempotency key. إذا انقطعت الشبكة أعاد العميل المحاولة فدفع مرتين.

## لا تخلطه مع

تضمن خاصية الإيدمبوتنسي أن تكرار العملية ليس له تأثير إضافي، بينما إعادة المحاولة تنفذ نفس الإجراء مجدداً فقط دون ضمان السلامة.

## قلها في العمل

- Let us add an idempotency key to this API endpoint so we do not process duplicate requests from the mobile app.
  - دعنا نضيف idempotency key إلى نقطة نهاية الـ API هذه حتى لا نعالج طلبات مكررة من تطبيق الهاتف.
- Please ensure that the payment processing handler is fully idempotent before we deploy this release to production.
  - يرجى التأكد من أن معالج المدفوعات يحقق خاصية الإيدمبوتنسي تماماً قبل أن ننشر هذا الإصدار إلى البيئة الحية.
