---
id: cosine-similarity
category: ai-data
level: intermediate
related: [embeddings, llm]
term: "Cosine Similarity"
translation: "تشابه جيب التمام"
pronunciation: "كوساين سيميلاريتي"
keywords: ["حساب التشابه بين المتجهات","قياس الزاوية بين المتجهات","مقارنة المعاني الدلالية للنصوص","تحديد مدى تطابق النصوص","كوساين سيميلاريتي","مقارنة الـ embeddings","حساب تشابه النصوص بالذكاء الاصطناعي","مقياس التشابه الاتجاهي","measure angle between vectors","compare semantic meaning of text","calculate vector similarity score","find similar embeddings easily","cosine sim calculation","compare text vectors in ai","vector angle metric","semantic search matching metric"]
---

## التعريف

هو مقياس يُستخدم لتحديد مدى التشابه بين متجهين (vectors) عن طريق حساب جيب تمام الزاوية بينهما. يركز هذا المقياس على اتجاه المتجهات بدلاً من طولها، مما يجعله مثالياً لمقارنة المعاني الدلالية في الفضاءات عالية الأبعاد.

## أين تسمعه؟

في مشاريع تعلم الآلة، عند بناء محركات البحث، أو عند التعامل مع قواعد البيانات المتجهية (vector databases) والنماذج اللغوية الكبيرة.

## أمثلة

- We used cosine similarity to find the most relevant documents for the user's query.
  - استخدمنا Cosine Similarity للعثور على المستندات الأكثر صلة باستعلام المستخدم.
- The system calculates the cosine similarity between the input embedding and the stored vectors.
  - يقوم النظام بحساب الـ Cosine Similarity بين الـ embedding المُدخل والمتجهات المخزنة.
- Two sentences about the same topic score close to 1 on cosine similarity.
  - تحصل جملتان عن الموضوع نفسه على درجة قريبة من 1 في التشابه بجيب التمام.

## خطأ شائع

الخلط بينه وبين المسافة الإقليدية (Euclidean distance)، حيث تقيس المسافة الإقليدية البعد المباشر بين النقاط، بينما يقيس هذا المقياس الزاوية بين المتجهات.

## لا تخلطه مع

غالباً ما يتم الخلط بين Cosine similarity و Dot product؛ فبينما يرتبطان ببعضهما، يقوم Cosine similarity بمعايرة المتجهات للتركيز على الاتجاه، في حين أن Dot product يتأثر بطول وحجم المتجهات.

## قلها في العمل

- Let's check if the cosine similarity score is high enough to consider these two documents as a match.
  - دعونا نتحقق مما إذا كانت درجة الـ Cosine similarity عالية بما يكفي لاعتبار هذين المستندين متطابقين.
- The current retrieval results are poor, so I suggest we switch from Euclidean distance to cosine similarity to better capture semantic relationships.
  - نتائج الاسترجاع الحالية ضعيفة، لذا أقترح أن ننتقل من استخدام Euclidean distance إلى Cosine similarity لنتمكن من رصد العلاقات الدلالية بشكل أفضل.
