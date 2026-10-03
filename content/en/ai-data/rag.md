---
id: rag
category: ai-data
level: intermediate
related: [embeddings, llm, hallucination]
term: "RAG (Retrieval-Augmented Generation)"
pronunciation: "RAG"
---
## Definition

A technique where the system first finds relevant documents, then gives them to the LLM so its answer is based on real data.

## Where you hear it

Chatbots over company documents.

## Examples

- The support bot uses RAG to answer from our documentation.
- RAG reduces hallucinations, but it does not remove them.

## Common mistake

Believing RAG makes answers always correct. Retrieval can miss the right document.

## Don't confuse with

RAG updates what the LLM knows by fetching documents, whereas fine-tuning actually modifies the model weights to learn new styles or facts.

## Say it at work

- Let us check if setting up a RAG pipeline will help reduce those hallucination issues in the chatbot.
- We need to update our document retriever configuration to improve the accuracy of the RAG responses.
