---
id: embeddings
category: ai-data
level: intermediate
related: [rag, llm, chunking, cosine-similarity]
term: "Embeddings"
translation: "التمثيلات الرقمية (embeddings)"
pronunciation: "إمبيدينجز"
keywords: ["تمثيل النصوص بأرقام","تحويل النص إلى متجهات","البحث الدلالي بالمتجهات","متجهات المعنى للنصوص","تمثيلات رقمية للنصوص","ايجاد مشابهة النصوص بالذكاء الاصطناعي","إمبيدينجز","توليد متجهات النصوص","convert text to vectors","semantic text representation numbers","vector representation of words","vectors for semantic search","text meaning as numbers","generate text embeddings","numerical vectors for ai","word vectorization for rag","imbeddings","vector embeddings"]
---
## التعريف

قوائم أرقام تلتقط معنى النص. النصوص ذات المعنى المتقارب تحصل على أرقام متقاربة، وهذا ما يجعل البحث الدلالي ممكنًا.

## أين تسمعه؟

البحث والتوصيات وأنظمة RAG.

## أمثلة

- We store the embeddings of each article in a vector database.
  - نخزّن embeddings كل مقال في قاعدة بيانات متجهات.
- Search improved after we switched from keywords to embeddings.
  - تحسّن البحث بعد انتقالنا من الكلمات المفتاحية إلى embeddings.

## خطأ شائع

خلط embeddings من نماذج مختلفة. لا يمكن مقارنة متجهات من نماذج مختلفة.

## لا تخلطه مع

غالبًا ما يتم الخلط بين embeddings والـ tokens، لكن الـ embeddings هي متجهات رقمية تُمثّل المعنى الدلالي، بينما الـ tokens هي وحدات النص الأولية الفرعية التي يمعالجها النموذج.

## قلها في العمل

- We need to regenerate all our embeddings using the new model before deploying the search upgrade.
  - علينا إعادة توليد جميع الـ embeddings الخاصة بنا باستخدام النموذج الجديد قبل نشر ترقية البحث.
- Please ensure that the dimension size of the incoming embeddings matches the configuration of the vector database index.
  - يرجى التأكد من أن حجم الأبعاد للـ embeddings الواردة يتطابق مع إعدادات فهرس قاعدة بيانات المتجهات.
