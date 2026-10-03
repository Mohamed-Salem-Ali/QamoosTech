---
id: few-shot-prompting
category: ai-data
level: intermediate
related: [prompt-engineering, llm]
term: "Few-shot Prompting"
pronunciation: "FYOO-shot PROM-pt-ing"
---

## Definition

Providing a few examples within the prompt to guide the LLM toward a specific output format or behavior.

## Where you hear it

When tuning model outputs, writing system prompts, or improving accuracy without retraining.

## Examples

- We used few-shot prompting to teach the model how to format JSON responses.
- Adding three classification examples via few-shot prompting fixed the incorrect category outputs.

## Common mistake

Assuming you need dozens of examples, when usually two to five well-chosen examples are enough for the model to understand the pattern.

## Don't confuse with

Few-shot prompting is often confused with fine-tuning; while few-shot prompting provides examples within the prompt at inference time, fine-tuning involves permanently updating the model's weights using a large dataset.

## Say it at work

- Let's try adding a few-shot prompting section to the system message to see if it stabilizes the output format.
- I have updated the prompt with few-shot prompting examples to help the model better understand the required extraction logic.
