---
id: bulkhead
category: architecture
subcategory: reliability
level: intermediate
related: [circuit-breaker, timeout]
term: "Bulkhead"
translation: "الحاجز العازل"
pronunciation: "بولك هِد"
keywords: ["فشل مكون لا يُغرق النظام كله", "حواجز السفينة المانعة للتسرب", "تحديد الطلبات المتزامنة لخدمة", "فصل موارد كل خدمة", "حاجز عزل بين أجزاء النظام", "isolate parts of a system", "separate resource pools per service", "one failing dependency should not sink everything", "limit concurrent calls to a dependency", "watertight compartments in a ship"]
---

## التعريف

الحاجز العازل (Bulkhead) نمط يفصل أجزاء النظام عن بعضها، فلا يستنفد فشل جزء موارد الأجزاء الأخرى. والاسم مأخوذ من الحواجز المانعة للتسرب في هيكل السفينة.

## أين تسمعه؟

في مراجعات الاعتمادية وأحاديث الهندسة المعمارية، حين تُسقط خدمة بطيئة واحدة ميزات لا علاقة لها بها.

## أمثلة

- Give the payment calls their own thread pool, as a bulkhead.
  - امنح استدعاءات الدفع مجموعة خيوط خاصة بها، أي حاجزاً عازلاً.
- A slow search service should not exhaust the connections that checkout needs.
  - لا ينبغي لخدمة بحث بطيئة أن تستنزف الاتصالات التي يحتاجها الدفع.
- Each tenant gets its own bulkhead, so one busy customer cannot slow the rest.
  - يحصل كل عميل على حاجز عازل خاص به، حتى لا يبطئ عميل نشيط بقية العملاء.

## خطأ شائع

مشاركة مجموعة واحدة بين كل شيء. عندها تملأ خدمة عالقة واحدة المجموعة، فتتوقف كل الميزات معها.

## لا تخلطه مع

قاطع الدائرة (Circuit Breaker) يوقف الاستدعاءات إلى خدمة فاشلة لفترة. أما الحاجز العازل فيحدد كم من الموارد يستطيع جزء واحد استخدامه، فيبقى الفشل محصوراً. ويعمل النمطان معاً بشكل جيد.

## قلها في العمل

- Can we put the report jobs behind a bulkhead?
  - هل يمكن وضع مهام التقارير خلف حاجز عازل؟
- Checkout slowed down because the search service was saturated.
  - تباطأ الدفع لأن خدمة البحث كانت مشبعة.
