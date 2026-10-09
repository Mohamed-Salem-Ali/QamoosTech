---
id: reconciliation
category: architecture
subcategory: data-and-state
level: intermediate
related: [audit-logging, idempotency, source-of-truth]
aliases: ["reconcile", "ledger matching"]
term: "Reconciliation"
translation: "المطابقة والتسوية"
pronunciation: "ريكونسيليشن"
keywords: ["مقارنة مجموعتي سجلات", "المدفوعات مقابل كشف البنك", "إيجاد الفروقات", "فحص ليلي", "تصحيح الاختلافات", "مطابقة دفتر الحسابات", "compare two sets of records", "payments vs bank statement", "find mismatches", "nightly check", "fix differences", "ledger matching"]
---

## التعريف

المطابقة والتسوية (Reconciliation) مقارنة مجموعتي سجلات مستقلتين، مثل قاعدة بيانات مدفوعاتك وكشف مزود الدفع، لإيجاد الفروقات وتصحيحها.

## أين تسمعه؟

في أنظمة الدفع والمالية، والمحاسبة، وخطوط البيانات، وأي تكامل يجب أن يتفق فيه نظامان.

## أمثلة

- The nightly reconciliation flagged two payments missing from our database.
  - نبّهت المطابقة الليلية إلى دفعتين مفقودتين من قاعدة بياناتنا.
- Match the records by the provider's transaction id.
  - طابق السجلات بمعرّف معاملة المزود.
- The reconciliation found a refund the provider had processed but we had not recorded.
  - كشفت المطابقة استرداداً نفّذه المزوّد ولم نسجّله نحن.

## خطأ شائع

الاعتماد على webhooks وحدها. قد تفوت الأحداث أو تتكرر لذا طابق مع سجلات المزود نفسه.

## لا تخلطه مع

سجل التدقيق الذي يدون ما حدث داخل نظامك. أما المطابقة فتقارن الأنظمة ببعضها.

## قلها في العمل

- Run reconciliation before month-end.
  - شغّل المطابقة قبل نهاية الشهر.
- Which side is the source of truth when they differ?
  - أي جانب هو مصدر الحقيقة عند الاختلاف؟
