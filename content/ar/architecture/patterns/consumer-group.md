---
id: consumer-group
category: architecture
subcategory: patterns
level: intermediate
related: [competing-consumers, message-queue, pub-sub]
aliases: ["kafka consumer group"]
term: "Consumer Group"
translation: "مجموعة المستهلكين"
pronunciation: "كونسيومر جروب"
keywords: ["مستهلكو Kafka يتقاسمون الأقسام", "معرّف المجموعة", "كل قسم يقرؤه مستهلك واحد", "قراءة متوازية", "موضع القراءة لكل مجموعة", "مجموعات مستقلة", "kafka consumers share partitions", "group id", "each partition read by one consumer", "parallel reading", "offset per group", "independent groups"]
---

## التعريف

مجموعة المستهلكين (Consumer Group) مجموعة مستهلكين يتقاسمون قراءة موضوع: كل قسم يقرؤه عضو واحد فقط من المجموعة، وتحصل كل مجموعة مختلفة على كل الرسائل.

## أين تسمعه؟

في Kafka وKinesis وRedis Streams، وعند توسيع معالجات الأحداث.

## أمثلة

- The billing and analytics services use separate consumer groups.
  - تستخدم خدمتا الفوترة والتحليلات مجموعتي مستهلكين منفصلتين.
- More consumers than partitions leaves some idle.
  - مستهلكون أكثر من الأقسام يترك بعضهم خاملاً.
- The analytics group reads every order event, while the email group reads the same events on its own.
  - تقرأ مجموعة التحليلات كل أحداث الطلبات، بينما تقرأ مجموعة البريد الأحداث نفسها بشكل مستقل.

## خطأ شائع

إعطاء خدمتين مختلفتين معرّف المجموعة نفسه. فتقتسمان الرسائل بدل أن تحصل كل منهما على كلها.

## لا تخلطه مع

المستهلكون المتنافسون وهو النمط العام. أما مجموعة المستهلكين فهي طريقة Kafka في تسميته وتتبعه.

## قلها في العمل

- What's the group id for this service?
  - ما معرّف المجموعة لهذه الخدمة؟
- Consumer lag is growing in the payments group.
  - تأخر المستهلكين يتزايد في مجموعة المدفوعات.
