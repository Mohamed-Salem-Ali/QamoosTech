---
id: embeddings
category: ai-data
level: intermediate
related: [rag, llm]
term: "Embeddings"
pronunciation: "em-BED-ingz"
---
## Definition

Lists of numbers that capture the meaning of text. Texts with similar meaning get similar numbers, which makes semantic search possible.

## Where you hear it

Search, recommendations, and RAG systems.

## Examples

- We store the embeddings of each article in a vector database.
- Search improved after we switched from keywords to embeddings.

## Common mistake

Mixing embeddings from different models. Vectors from different models cannot be compared.

## Don't confuse with

Embeddings are sometimes confused with tokens, but embeddings are numerical vectors representing semantic meaning, while tokens are the raw sub-word units of text processed by the model.

## Say it at work

- We need to regenerate all our embeddings using the new model before deploying the search upgrade.
- Please ensure that the dimension size of the incoming embeddings matches the configuration of the vector database index.
