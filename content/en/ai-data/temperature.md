---
id: temperature
category: ai-data
level: intermediate
related: [llm, prompt-engineering, token]
term: "Temperature"
pronunciation: "TEM-prah-chur"
---

## Definition

Temperature is a hyperparameter in LLMs that controls the randomness of the generated text. Lower values make the output more deterministic and focused, while higher values make it more creative and unpredictable.

## Where you hear it

- Configuring model parameters in an API request.
- Fine-tuning or prompting strategies for creative writing tasks.
- Debugging unexpected or repetitive model responses.

## Examples

- Set the temperature to 0.2 for factual tasks to ensure consistency.
- Increase the temperature to 0.8 if you want the model to generate more creative stories.

## Common mistake

Thinking that a higher temperature means the model is "smarter"; it actually just increases the probability of selecting less likely tokens, which can lead to more hallucinations.
