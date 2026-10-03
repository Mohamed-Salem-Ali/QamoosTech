---
id: chunking
category: ai-data
level: intermediate
related: [embeddings, rag, token]
term: "Chunking"
pronunciation: "CHUNK-ing"
---

## Definition

Chunking is the process of splitting large documents into smaller, manageable segments before converting them into vector embeddings. This ensures that the text fits within model context windows and improves retrieval accuracy in RAG systems.

## Where you hear it

In data preprocessing pipelines, when building RAG applications, or when discussing vector database ingestion.

## Examples

- We need to configure the chunking strategy to split documents by paragraph instead of fixed character counts.
- Poor chunking can cut sentences in half and ruin the semantic meaning of the retrieved context.

## Common mistake

Assuming that larger chunks are always better because they contain more context, ignoring the fact that embedding models perform best on focused, concise segments.
