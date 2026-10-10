---
id: throttling
category: architecture
subcategory: reliability
level: intermediate
related: [rate-limiting, backpressure]
term: "Throttling"
translation: "التقييد"
pronunciation: "ثروتلينغ"
keywords: ["حماية الخدمة من ارتفاع الحمل المفاجئ", "تأخير الطلبات الزائدة أو تأجيلها", "إبطاء الطلبات لحماية الخدمة", "تقييد سرعة الطلبات", "slow down requests to protect a service", "limit how fast a client can call", "delay or queue requests above a rate", "protect a service from traffic spikes", "throttle api calls"]
---

## التعريف

التقييد (Throttling) هو إبطاء الطلبات أو تحديد كمية العمل التي يقبلها النظام، حتى لا يُثقله ارتفاع مفاجئ في الطلبات. تُؤخَّر الطلبات الزائدة أو توضع في قائمة انتظار أو تُرفض.

## أين تسمعه؟

في مراجعات تصميم الواجهات البرمجية، ونقاشات تكلفة السحابة، وتقارير الحوادث، حين تبدأ خدمة ما بإرجاع أخطاء 429 أو تتباطأ تحت الحمل.

## أمثلة

- The payment provider throttles us to 100 requests per second.
  - تقيّد شركة الدفع طلباتنا بمئة طلب في الثانية.
- When the batch job starts, the queue throttles writes to the database.
  - عند بدء مهمة الدفعات، يقيّد الطابور عمليات الكتابة إلى قاعدة البيانات.
- Throttling is better than a crash when traffic spikes.
  - التقييد أفضل من التعطل عند ارتفاع الحمل المفاجئ.

## خطأ شائع

استعمال التقييد بمعنى أي حد. التقييد يبطئ العمل الزائد أو يؤخره، بينما يرفضه في الغالب الحد الصارم أو تحديد المعدل. تأكد أي السلوكين يطبّقه النظام قبل أن تَعِد عميلاً بشيء.

## لا تخلطه مع

تحديد معدل الطلبات (Rate Limiting) يرفض الطلبات التي تتجاوز الحد، غالباً بخطأ مثل 429. أما التقييد فيبطئها أو يضعها في قائمة انتظار فتصل لاحقاً. والضغط العكسي (Backpressure) إشارة يرسلها المستهلك البطيء إلى المصدر ليخفف الحمل.

## قلها في العمل

- Are we throttling the sync job, or just retrying it?
  - هل نقيّد مهمة المزامنة، أم نكتفي بإعادة محاولتها؟
- The vendor throttled us again today.
  - قيّدتنا الشركة المزوِّدة مرة أخرى اليوم.
