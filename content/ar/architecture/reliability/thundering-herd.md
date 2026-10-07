---
id: thundering-herd
category: architecture
subcategory: reliability
level: intermediate
related: [cache-stampede, retry-logic, backpressure]
aliases: ["retry storm", "reconnect storm"]
term: "Thundering Herd"
translation: "القطيع المندفع"
pronunciation: "ثاندرينج هيرد"
keywords: ["عملاء كثيرون يعيدون المحاولة معاً", "الجميع يستيقظ معاً", "عاصفة إعادة الاتصال", "ذروة عند إعادة التشغيل", "التراجع الأسي مع التفاوت", "حمل زائد بعد الانقطاع", "many clients retry at once", "all wake up together", "reconnect storm", "restart spike", "exponential backoff with jitter", "overload after outage"]
---

## التعريف

القطيع المندفع (Thundering Herd) يحدث حين يتفاعل عملاء أو عمليات كثيرة مع الحدث نفسه في اللحظة نفسها، كأن يعيدوا جميعاً المحاولة بعد انقطاع، فيرهقوا النظام مرة أخرى.

## أين تسمعه؟

في تقارير ما بعد الحوادث، وتصميم إعادة المحاولة، ونقاشات الذاكرة المؤقتة والجدولة.

## أمثلة

- When the service came back, all clients reconnected at once and knocked it down again.
  - عندما عادت الخدمة أعاد كل العملاء الاتصال معاً وأسقطوها مجدداً.
- Add random jitter to the retry delay.
  - أضف تفاوتاً عشوائياً إلى مهلة إعادة المحاولة.

## خطأ شائع

إعادة المحاولة بجدول ثابت. فيعيد الجميع في اللحظات نفسها. استخدم التراجع الأسي مع تفاوت عشوائي.

## لا تخلطه مع

هجوم DDoS المتعمد. أما القطيع المندفع فعارض ويسببه عملاؤك أنفسهم.

## قلها في العمل

- We need jitter or we'll get a thundering herd.
  - نحتاج تفاوتاً عشوائياً وإلا حصلنا على قطيع مندفع.
- Stagger the restarts.
  - وزّع إعادة التشغيل على أوقات متفرقة.
