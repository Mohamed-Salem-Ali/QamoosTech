---
id: embeddings
category: ai-data
level: intermediate
related: [rag, llm, chunking, cosine-similarity]
term: "Embeddings"
pronunciation: "em-BED-ingz"
keywords: ["convert text to vectors","semantic text representation numbers","vector representation of words","vectors for semantic search","text meaning as numbers","generate text embeddings","numerical vectors for ai","word vectorization for rag","imbeddings","vector embeddings","تمثيل النصوص بأرقام","تحويل النص إلى متجهات","البحث الدلالي بالمتجهات","متجهات المعنى للنصوص","تمثيلات رقمية للنصوص","ايجاد مشابهة النصوص بالذكاء الاصطناعي","إمبيدينجز","توليد متجهات النصوص"]
---
## Definition

Lists of numbers that capture the meaning of text. Texts with similar meaning get similar numbers, which makes semantic search possible.

## Where you hear it

Search, recommendations, and RAG systems.

## Examples

- We store the embeddings of each article in a vector database.
- Search improved after we switched from keywords to embeddings.
- Two questions with the same meaning get close embeddings even when they share no words.

## Common mistake

Mixing embeddings from different models. Vectors from different models cannot be compared.

## Don't confuse with

Embeddings are sometimes confused with tokens, but embeddings are numerical vectors representing semantic meaning, while tokens are the raw sub-word units of text processed by the model.

## Say it at work

- We need to regenerate all our embeddings using the new model before deploying the search upgrade.
- Please ensure that the dimension size of the incoming embeddings matches the configuration of the vector database index.
