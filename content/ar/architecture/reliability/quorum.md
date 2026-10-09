---
id: quorum
category: architecture
subcategory: reliability
level: intermediate
related: [leader-election, eventual-consistency, failover]
aliases: ["majority quorum"]
term: "Quorum"
translation: "النصاب"
pronunciation: "كوروم"
keywords: ["غالبية العقد يجب أن توافق", "النصف زائد واحد", "الحماية من انقسام الدماغ", "نصاب القراءة والكتابة", "عدد فردي من العقد", "الإجماع", "majority of nodes must agree", "n/2 plus 1", "split brain protection", "read and write quorum", "odd number of nodes", "consensus"]
---

## التعريف

النصاب (Quorum) هو أقل عدد من العقد، غالباً الأغلبية، يجب أن توافق ليُعتد بعملية أو قرار. ويمنع مجموعتين من اتخاذ قرارات متعارضة.

## أين تسمعه؟

في قواعد البيانات العنقودية، وRaft وPaxos، وetcd في Kubernetes، ومستويات اتساق Cassandra.

## أمثلة

- With 5 nodes, a quorum is 3, so the cluster survives 2 failures.
  - مع 5 عقد يكون النصاب 3 فيتحمل العنقود فشل عقدتين.
- A cluster that lost quorum stops accepting writes.
  - العنقود الذي فقد النصاب يتوقف عن قبول الكتابات.
- A write succeeds once two of the three replicas confirm it, which is a quorum.
  - تنجح الكتابة حين يؤكدها اثنان من النسخ الثلاث، وهذا هو النصاب (quorum).

## خطأ شائع

تشغيل عدد زوجي من العقد. 4 عقد لا تتحمل فشلاً أكثر من 3 لذا استخدم الأعداد الفردية.

## لا تخلطه مع

الإجماع التام حيث يجب أن توافق كل العقد. أما النصاب فيحتاج الأغلبية فقط.

## قلها في العمل

- Do we still have quorum?
  - هل ما زال لدينا نصاب؟
- Three or five nodes, never four.
  - ثلاث أو خمس عقد، لا أربع أبداً.
