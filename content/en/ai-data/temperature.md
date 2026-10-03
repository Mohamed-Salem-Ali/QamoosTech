---
id: temperature
category: ai-data
level: intermediate
related: [llm, prompt-engineering, token]
term: "Temperature"
pronunciation: "TEM-prah-chur"
keywords: ["control randomness of llm output","make ai model more creative","reduce repetitive text from model","llm hyperparameter for variety","adjust ai text predictability","how to change model randomness","make ai responses less deterministic","ai token selection probability","configure generative ai model settings","tweak model output diversity","التحكم في عشوائية مخرجات النموذج","جعل إجابات الذكاء الاصطناعي إبداعية","تقليل تكرار النصوص في النموذج","معامل ضبط عشوائية النماذج اللغوية","تغيير مدى تنوع إجابات الذكاء","ضبط احتمالية اختيار الكلمات","جعل مخرجات النموذج أكثر دقة","تعديل إعدادات توليد النصوص","تيمبريتشر في النماذج اللغوية","التحكم في تنوع إجابات الـ ai"]
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
