---
id: gossip-protocol
category: architecture
subcategory: patterns
level: intermediate
related: [heartbeat, eventual-consistency, quorum]
aliases: ["epidemic protocol"]
term: "Gossip Protocol"
translation: "بروتوكول الإشاعة"
pronunciation: "جوسيب بروتوكول"
keywords: ["العقد تخبر جيراناً عشوائيين", "نشر المعلومات كالإشاعات", "عضوية العنقود", "‏Cassandra وConsul", "بلا منسق مركزي", "يتقارب بسرعة", "nodes tell random neighbours", "spread information like rumours", "cluster membership", "cassandra consul", "no central coordinator", "converges quickly"]
---

## التعريف

بروتوكول الإشاعة (Gossip Protocol) ينشر المعلومات في عنقود كما تنتشر الإشاعات: تخبر كل عقدة بانتظام بضعة نظراء عشوائيين بما تعرفه، وسرعان ما تعرفه كل العقد.

## أين تسمعه؟

في Cassandra وConsul وأنظمة العناقيد اللامركزية أو النظير للنظير.

## أمثلة

- Nodes use gossip to learn which peers are alive.
  - تستخدم العقد الإشاعة لمعرفة النظراء الأحياء.
- Gossip scales well because no node talks to everyone.
  - تتوسع الإشاعة جيداً لأن أي عقدة لا تكلّم الجميع.

## خطأ شائع

توقع اتفاق فوري ودقيق. الإشاعة اتساقها نهائي؛ والخبر يحتاج جولات ليصل إلى الجميع.

## لا تخلطه مع

سجل مركزي حيث تحمل خدمة واحدة الحقيقة. أما الإشاعة فلا يملك المعلومة طرف واحد.

## قلها في العمل

- Membership spreads by gossip.
  - تنتشر العضوية بالإشاعة.
- How often do nodes gossip?
  - كم مرة تتبادل العقد الإشاعة؟
