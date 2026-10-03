---
id: context-window
category: ai-data
level: beginner
related: [llm, prompt-engineering, token]
term: "Context Window"
pronunciation: "KON-tekst WIN-do"
keywords: ["llm memory limit","ai token capacity","maximum prompt length","model input buffer size","context window size","how much text can ai read","ai session memory limit","model text processing limit","token limit per prompt","ai conversation history capacity","الحد الأقصى للنصوص للذكاء الاصطناعي","سعة ذاكرة نموذج اللغة","حجم المدخلات المسموح بها للنموذج","كمية النصوص التي يتذكرها النموذج","نافذة سياق نموذج اللغة","حد الرموز في المحادثة","سعة معالجة النصوص للذكاء الاصطناعي","الحد الأقصى لطول الـ prompt","ذاكرة الجلسة الحالية للنموذج","تجاوز حد الذاكرة المؤقتة"]
---

## Definition

The maximum amount of text, measured in tokens, that a large language model can process and remember during a single interaction. It includes both the input prompt you send and the output the model generates.

## Where you hear it

- Model architecture discussions
- Prompt optimization meetings
- API pricing evaluations

## Examples

- We need to shorten our system prompt to fit within the model's context window.
- Uploading this large PDF failed because it exceeds the context window of our current LLM.

## Common mistake

Assuming the model remembers everything you said in previous separate chats, forgetting that the context window only applies to the current active session.

## Don't confuse with

Context window is often confused with training data; the context window refers to the temporary memory available during a specific session, while training data represents the permanent knowledge base the model was built upon.

## Say it at work

- I think we're hitting the context window limit because the model is starting to forget the earlier parts of our conversation.
- Please ensure that the provided documentation does not exceed the model's context window to avoid truncation issues.
