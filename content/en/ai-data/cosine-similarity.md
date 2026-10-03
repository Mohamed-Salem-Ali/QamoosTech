---
id: cosine-similarity
category: ai-data
level: intermediate
related: [embeddings, llm]
term: "Cosine Similarity"
pronunciation: "KOH-sine sim-i-LAR-i-tee"
---

## Definition

Cosine similarity is a metric used to measure how similar two vectors are by calculating the cosine of the angle between them. It focuses on the orientation of the vectors rather than their magnitude, making it ideal for comparing semantic meanings in high-dimensional spaces.

## Where you hear it

In machine learning projects, when building search engines, or when working with vector databases and Large Language Models.

## Examples

- We used cosine similarity to find the most relevant documents for the user's query.
- The system calculates the cosine similarity between the input embedding and the stored vectors.

## Common mistake

Confusing it with Euclidean distance, which measures the straight-line distance between points rather than the angle between vectors.

## Don't confuse with

Cosine similarity is often confused with dot product; while they are related, cosine similarity normalizes the vectors to focus on orientation, whereas the dot product is sensitive to the magnitude of the vectors.

## Say it at work

- Let's check if the cosine similarity score is high enough to consider these two documents as a match.
- The current retrieval results are poor, so I suggest we switch from Euclidean distance to cosine similarity to better capture semantic relationships.
