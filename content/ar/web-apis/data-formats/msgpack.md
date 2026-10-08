---
id: msgpack
category: web-apis
subcategory: data-formats
level: intermediate
related: [json, protocol-buffers, serialization]
aliases: ["message pack", "msgpack format"]
term: "MessagePack"
translation: "ميسج باك"
pronunciation: "مِسج باك"
keywords: ["binary json alternative", "smaller payload than json", "compact binary serialization", "decode messagepack", "faster parsing than json", "not readable in a text editor", "بديل ثنائي لـ JSON", "حمولة أصغر من JSON", "تسلسل ثنائي مضغوط", "فك ترميز MessagePack", "تحليل أسرع من JSON", "لا يُقرأ في محرر نصوص"]
---

## التعريف

صيغة ثنائية تحمل الأنواع نفسها التي يحملها JSON (أرقام ونصوص وقوائم وخرائط)، لكن في بايتات أقل، وغالباً بقراءة أسرع. لا تُقرأ كنص، لذلك تحتاج إلى أداة لفحصها.

## أين تسمعه؟

في الخدمات الداخلية التي ترسل رسائل كثيرة صغيرة، وفي طبقات التخزين المؤقت، وفي البيانات المخزّنة في Redis.

## أمثلة

- The service sends MessagePack instead of JSON to save bandwidth on every call.
  - ترسل الخدمة MessagePack بدل JSON لتوفير عرض الشبكة في كل استدعاء.
- Use a MessagePack decoder to read the stored value while debugging.
  - استخدم مُفكّك ترميز MessagePack لقراءة القيمة المخزّنة أثناء تتبّع الأخطاء.
- Both sides must agree on what each field means, because the format itself does not enforce a schema.
  - على الطرفين الاتفاق على معنى كل حقل، لأن الصيغة نفسها لا تفرض مخططاً.

## خطأ شائع

اختياره لواجهة عامة تستدعيها المتصفحات. يصبح التتبّع أصعب، والتوفير غالباً قليل. استخدم JSON ما لم تُظهر القياسات حاجة حقيقية.

## لا تخلطه مع

JSON نص يمكن قراءته في أي محرّر. أما MessagePack فيحمل البيانات نفسها بصيغة ثنائية، فيكون أصغر لكنه يحتاج إلى مُفكّك ترميز. وProtocol Buffers ثنائي أيضاً، لكنه يحتاج إلى ملف مخطط أولاً.

## قلها في العمل

- Is the MessagePack payload worth it, or is JSON fast enough here?
  - هل حمولة MessagePack تستحق العناء، أم أن JSON سريع بما يكفي هنا؟
- Let's measure the size before we switch the cache to MessagePack.
  - لنقِس الحجم قبل أن نحوّل الذاكرة المؤقتة إلى MessagePack.
