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

## Don't confuse with

Temperature controls the randomness of token selection, whereas top_p (nucleus sampling) limits the pool of available tokens based on their cumulative probability.

## Say it at work

- Let us try bumping up the temperature slightly in our next test to see if we get more varied responses.
- Please ensure the temperature parameter is set to zero in the production configuration for all factual retrieval tasks.
