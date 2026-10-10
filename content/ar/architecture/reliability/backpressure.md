---
id: backpressure
category: architecture
subcategory: reliability
level: intermediate
related: [message-queue, rate-limiting, graceful-degradation, throttling]
aliases: ["flow control", "load shedding"]
term: "Backpressure"
translation: "الضغط العكسي"
pronunciation: "باك بريشر"
keywords: ["إبطاء المنتج", "إشارة امتلاء الطابور", "المستهلك لا يلحق", "طابور محدود", "الرفض بدل الانهيار", "التحكم بالتدفق", "slow down the producer", "queue full signal", "consumer cannot keep up", "bounded queue", "reject instead of crash", "flow control"]
---

## التعريف

الضغط العكسي (Backpressure) إشارة تطلب من منتج سريع أن يبطئ لأن المستهلك أو الطابور لا يلحق، بدل ترك العمل يتراكم حتى ينكسر شيء.

## أين تسمعه؟

في أنظمة التدفق والطوابير (Kafka وNode streams وGo channels)، وتصميم الـ API، وحوادث الحمل الزائد.

## أمثلة

- The queue is full, so the API returns 429 to apply backpressure.
  - الطابور ممتلئ فتعيد الـ API الخطأ 429 لتطبيق الضغط العكسي.
- Without backpressure the worker ran out of memory.
  - بدون ضغط عكسي نفدت ذاكرة العامل.
- The consumer slows the producer with a bounded queue instead of dropping messages.
  - يُبطئ المستهلك المنتِج بطابور محدود السعة، بدل إسقاط الرسائل.

## خطأ شائع

استخدام طابور بلا حد. يخفي المشكلة حتى تنفد الذاكرة. ضع له حداً وارفض.

## لا تخلطه مع

تحديد المعدل الذي يحدّ ما يرسله كل عميل. أما الضغط العكسي فيستجيب لمدى انشغال المستقبل.

## قلها في العمل

- We need backpressure between the API and the workers.
  - نحتاج ضغطاً عكسياً بين الـ API والعمال.
- Shed load when the queue is above 80%.
  - تخلَّ عن بعض الحمل عندما يتجاوز الطابور 80%.
