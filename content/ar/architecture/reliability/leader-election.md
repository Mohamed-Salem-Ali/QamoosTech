---
id: leader-election
category: architecture
subcategory: reliability
level: intermediate
related: [quorum, heartbeat, failover]
aliases: ["leader", "split brain"]
term: "Leader Election"
translation: "انتخاب القائد"
pronunciation: "ليدر إليكشن"
keywords: ["اختيار منسق واحد", "عقدة واحدة فقط تؤدي المهمة", "قائد جديد بعد الفشل", "إجماع Raft", "اختيار الأساسية", "تجنب قائدين", "choose one coordinator", "only one node does the job", "new leader after failure", "raft consensus", "primary selection", "avoid two leaders"]
---

## التعريف

انتخاب القائد (Leader Election) هو الطريقة التي تختار بها مجموعة عقد واحدة بالضبط منها لتنسيق العمل، وتختار قائداً جديداً تلقائياً إذا فشل القائد.

## أين تسمعه؟

في etcd وZooKeeper وKafka وعناقيد قواعد البيانات، وعندما يجب أن تعمل مهمة مجدولة على نسخة واحدة فقط.

## أمثلة

- The followers elected a new leader after the old one stopped sending heartbeats.
  - انتخب التابعون قائداً جديداً بعد أن توقف القديم عن إرسال النبضات.
- Only the leader runs the nightly cleanup job.
  - القائد وحده ينفّذ مهمة التنظيف الليلية.
- The cluster elects a new leader within seconds when the old one crashes.
  - يختار العنقود قائداً جديداً خلال ثوانٍ حين يتعطل القائد السابق.

## خطأ شائع

ترك عقدتين تعتقدان أن كلاً منهما القائد (انقسام الدماغ). وقاعدة النصاب تمنع ذلك.

## لا تخلطه مع

موزّع الأحمال الذي ينشر الطلبات على عقد متساوية. أما القائد فعقدة واحدة بدور خاص.

## قلها في العمل

- Who is the current leader?
  - من هو القائد الحالي؟
- A leader election takes a few seconds.
  - يستغرق انتخاب القائد بضع ثوانٍ.
