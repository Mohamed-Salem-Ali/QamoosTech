---
id: chunking
category: ai-data
level: intermediate
related: [embeddings, rag, token]
term: "Chunking"
pronunciation: "CHUNK-ing"
keywords: ["split large documents for embeddings","divide text into smaller segments","prepare documents for rag","text splitting strategy","segment documents for vector database","document chunking","chunking","tshinking","split text by paragraph","تقطيع النص إلى أجزاء صغيرة","تقسيم المستندات الكبيرة لنموذج الذكاء الاصطناعي","تجهيز البيانات لنظام راغ","استراتيجية تقطيع المستندات","تقطيع النصوص لتوليد التضمينات","تشنكينج النصوص","تقسيم النص إلى مقاطع دلالية","تجزئة المستندات الطويلة"]
---

## Definition

Chunking is the process of splitting large documents into smaller, manageable segments before converting them into vector embeddings. This ensures that the text fits within model context windows and improves retrieval accuracy in RAG systems.

## Where you hear it

In data preprocessing pipelines, when building RAG applications, or when discussing vector database ingestion.

## Examples

- We need to configure the chunking strategy to split documents by paragraph instead of fixed character counts.
- Poor chunking can cut sentences in half and ruin the semantic meaning of the retrieved context.
- Chunking the handbook by section gave the chatbot better answers than fixed-size pages.

## Common mistake

Assuming that larger chunks are always better because they contain more context, ignoring the fact that embedding models perform best on focused, concise segments.

## Don't confuse with

Chunking splits text into semantic segments for embedding, while tokenization breaks text down into the smallest sub-word units that the model's tokenizer processes.

## Say it at work

- Let's adjust the chunking size so our retrieval step pulls more relevant context.
- We are updating the preprocessing pipeline to improve the chunking strategy for PDF documents.
