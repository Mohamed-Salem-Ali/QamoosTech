---
id: grounding
category: ai-data
level: intermediate
related: [llm, hallucination, rag]
term: "Grounding"
pronunciation: "GROUND-ing"
---

## Definition

Grounding is the process of connecting a Large Language Model (LLM) to external, verifiable data sources to ensure its responses are accurate and factual. It helps prevent the model from generating "hallucinations" by forcing it to rely on trusted information instead of just its internal training data.

## Where you hear it

In meetings about AI architecture, RAG implementation, or when discussing how to improve the reliability of a chatbot.

## Examples

- We need to implement grounding so the AI answers based on our company's internal documentation.
- Grounding the model with real-time data significantly reduced the number of incorrect responses.

## Common mistake

Thinking that grounding is the same as fine-tuning; while fine-tuning changes the model's internal weights, grounding provides the model with external context during the inference phase.

## Don't confuse with

Grounding provides the LLM with external context at inference time, whereas fine-tuning permanently modifies the model's internal weights using a new dataset.

## Say it at work

- Let's check if the grounding pipeline is fetching the latest documents correctly before we merge this PR.
- We need to improve the grounding mechanism to ensure the chatbot references the updated product specs.
